<script lang="ts">
	import imageCompression from 'browser-image-compression';
	import type { Recipe } from '$lib/types';
	import { v4 as uuidv4 } from 'uuid';
	import {
		FileDropzone,
		InputChip,
		ProgressRadial,
		getModalStore,
		getToastStore
	} from '@skeletonlabs/skeleton';
	import RecipeImage from './RecipeImage.svelte';
	import ChevronLeftIcon from '~icons/mdi/chevron-left';
	import DeleteIcon from '~icons/mdi/delete';
	import PencilIcon from '~icons/mdi/pencil';
	import SaveIcon from '~icons/mdi/content-save';
	import { goto } from '$app/navigation';
	import Tag from './Tag.svelte';
	import { deleteDoc, doc, setDoc } from 'firebase/firestore';
	import { db, storage } from '$lib/firebase';
	import { userStore } from '$lib/stores';
	import { ref, uploadBytes } from 'firebase/storage';
	import { base } from '$app/paths';

	export let recipe: Recipe;
	export let editMode = false;

	const toastStore = getToastStore();
	const modalStore = getModalStore();

	let uploadingFiles = 0;
	let name = recipe.name;
	let tags = recipe.tags;
	let notes = recipe.notes;
	let imgUrls = recipe.imgUrls;
	$: userId = $userStore?.uid;

	let fileList: FileList | undefined;

	function onDeleteImage(imgUrl: string) {
		imgUrls = imgUrls.filter((url) => url !== imgUrl);
	}

	function onDeleteRecipe() {
		modalStore.trigger({
			type: 'confirm',
			title: 'Delete Recipe?',
			body: `Are you sure you want to delete ${name}?`,
			buttonTextConfirm: 'Delete',
			response: (response: boolean) => {
				if (response) {
					deleteDoc(doc(db, `users/${userId}/recipes/${recipe.id}`)).then(() => {
						goto(`${base}/`);
					});
				}
			}
		});
	}

	function onFocusName(event: Event) {
		const target = event.target as HTMLInputElement;
		target.select();
	}

	async function addFiles(files: FileList) {
		const filePaths = Array.from(files).map((file) => {
			const extension = file.name.split('.').pop();
			return `${$userStore?.uid}/${uuidv4()}.${extension}`;
		});
		uploadingFiles = filePaths.length;
		Promise.all(
			Array.from(files).map((file, index) => {
				const fileRef = ref(storage, filePaths[index]);
				return new Promise<void>(async (resolve, reject) => {
					try {
						const compressedFile = await imageCompression(file, {
							maxSizeMB: 0.1
						});
						await uploadBytes(fileRef, compressedFile);
						resolve();
					} catch {
						reject();
					}
				});
			})
		)
			.then(() => {
				imgUrls = [...imgUrls, ...filePaths];
				fileList = undefined;
			})
			.catch(() => {
				toastStore.trigger({
					message: 'Image upload failed! Please try again later.',
					hideDismiss: true,
					timeout: 2000,
					classes: 'bg-red-500'
				});
			})
			.finally(() => {
				fileList = undefined;
				uploadingFiles = 0;
			});
	}

	$: if (fileList) {
		addFiles(fileList);
	}

	async function toggleEditMode() {
		if (editMode) {
			const updatedRecipe: Recipe = {
				...recipe,
				imgUrls,
				name,
				notes,
				tags
			};
			setDoc(doc(db, `users/${userId}/recipes/${recipe.id}`), updatedRecipe)
				.then(() => {
					editMode = false;
					toastStore.trigger({
						message: 'Save successful!',
						hideDismiss: true,
						timeout: 2000,
						classes: 'bg-green-500'
					});
				})
				.catch(() =>
					toastStore.trigger({
						message: 'Save failed! Please try again later.',
						hideDismiss: true,
						timeout: 2000,
						classes: 'bg-red-500'
					})
				);
		} else {
			editMode = true;
		}
	}
</script>

<div class="w-full h-full border-l border-neutral-400 bg-slate-200 flex flex-col">
	<div
		class="w-full h-16 bg-blue-500 md:bg-slate-100 p-3 flex flex-row justify-between gap-3 items-center shadow text-white md:text-neutral-900"
	>
		<div class="flex flex-row flex-1 items-center gap-2">
			<button class="btn-icon md:hidden" on:click={() => goto(`${base || '/'}`)}>
				<ChevronLeftIcon class="h-8 w-8" />
			</button>
			{#if editMode}
				<input
					class="input bg-slate-200 text-neutral-950"
					bind:value={name}
					on:focus={onFocusName}
				/>
			{:else}
				<div class="font-bold text-2xl overflow-hidden overflow-ellipsis line-clamp-2">{recipe.name}</div>
			{/if}
		</div>
		<button
			class="btn-icon md:variant-filled md:bg-blue-500 md:shadow w-10 h-10"
			on:click={toggleEditMode}
		>
			{#if editMode}
				<SaveIcon />
			{:else}
				<PencilIcon />
			{/if}
		</button>
		<button
			class="btn-icon md:variant-filled md:bg-red-500 md:shadow w-10 h-10"
			on:click={onDeleteRecipe}
		>
			<DeleteIcon />
		</button>
	</div>
	<div class="m-2 p-2 flex flex-col gap-2 bg-slate-100 rounded-md shadow flex-1">
		{#if editMode}
			<InputChip
				name="tags"
				placeholder="Tags"
				bind:value={tags}
				chips="badge rounded-full bg-blue-200 text-neutral-900 border border-blue-400 shadow font-semibold px-2 py-1"
			/>
		{:else if recipe.tags.length > 0}
			<div class="flex flex-row gap-2">
				{#each recipe.tags as tag}
					<Tag {tag} />
				{/each}
			</div>
		{/if}
		{#if notes || editMode}
			<textarea
				class="textarea flex-1 resize-none min-h-[50%]"
				bind:value={notes}
				readonly={!editMode}
			/>
		{/if}
		{#if imgUrls.length > 0}
			<section class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
				{#each imgUrls as url}
					<RecipeImage firebaseUrl={url} {editMode} {onDeleteImage} />
				{/each}
				{#each new Array(uploadingFiles) as _i}
					<RecipeImage firebaseUrl={undefined} editMode={false} {onDeleteImage} />
				{/each}
				{#if editMode}
					<FileDropzone
						class="aspect-square"
						name="imageUpload"
						accept=".jpg,.jpeg,.png"
						bind:files={fileList}
						multiple={true}
					/>
				{/if}
			</section>
		{:else if editMode}
			<FileDropzone
				name="imageUpload"
				accept=".jpg,.jpeg,.png"
				bind:files={fileList}
				multiple={true}
			/>
		{/if}
	</div>
</div>
