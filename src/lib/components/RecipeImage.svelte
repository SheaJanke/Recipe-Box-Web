<script lang="ts">
	import { storage } from '$lib/firebase';
	import { ProgressRadial, getModalStore } from '@skeletonlabs/skeleton';
	import { getDownloadURL, ref } from 'firebase/storage';
	import CloseIcon from '~icons/mdi/window-close';

	export let firebaseUrl: string;
	export let editMode: boolean;
	export let onDeleteImage: (url: string) => void;

	const modalStore = getModalStore();

	let imgSrc: string | undefined;

	getDownloadURL(ref(storage, firebaseUrl)).then((src) => (imgSrc = src));
</script>

<div
	class="aspect-square border border-surface-400 rounded-md flex justify-center items-center bg-surface-200 relative cursor-pointer"
>
	{#if imgSrc}
		<img
			class="rounded-md object-cover aspect-square"
			src={imgSrc}
			on:click={() =>
				modalStore.trigger({
					type: 'alert',
					image: imgSrc
				})}
		/>
		{#if editMode}
			<button
				class="btn-icon btn-sm variant-filled bg-red-600 absolute right-1 top-1 border border-white"
				on:click={() => onDeleteImage(firebaseUrl)}
			>
				<CloseIcon />
			</button>
		{/if}
	{:else}
		<ProgressRadial width="w-1/3" stroke={100} track="stroke-blue-500/30" meter="stroke-blue-500" />
	{/if}
</div>
