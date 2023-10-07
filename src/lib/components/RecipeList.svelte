<script lang="ts">
	import { recipeStore, userStore } from '$lib/stores';
	import type { MiddlewareState } from '@floating-ui/dom';
	import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
	import RecipeListItem from './RecipeListItem.svelte';
	import AddRecipeIcon from '~icons/mdi/file-document-plus-outline';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { createNewRecipe, type Recipe } from '$lib/types';
	import { doc, setDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';

	let searchValue = '';

	const searchPopupTarget = 'searchAutocomplete';

	let searchPopupSettings: PopupSettings = {
		event: 'focus-click',
		target: searchPopupTarget,
		placement: 'bottom',

		middleware: {
			size: {
				apply: ({ rects, elements }: MiddlewareState) => {
					Object.assign(elements.floating.style, {
						width: `${rects.reference.width}px`
					});
				}
			}
		}
	};

	$: recipes = $recipeStore || [];

	$: recipeOptions =
		recipes?.map<AutocompleteOption>((recipe) => ({
			label: recipe.name,
			value: recipe.id,
			keywords: recipe.tags.map((tag) => `#${tag}`)
		})) || [];

	function onNewRecipeClick() {
		const userId = $userStore?.uid;
		const newRecipe = createNewRecipe();
		setDoc(doc(db, `users/${userId}/recipes/${newRecipe.id}`), newRecipe).then(() => {
			goto(`${base}/${newRecipe.id}`);
		});
	}
</script>

<div class="w-full h-full flex flex-col bg-slate-200">
	<div class="h-16 p-3 bg-slate-100 flex flex-row gap-3 shadow">
		<input
			class="input autocomplete rounded-full px-6"
			type="search"
			bind:value={searchValue}
			placeholder="Search Recipe..."
			use:popup={searchPopupSettings}
		/>
		<button
			class="btn-icon variant-filled bg-blue-500 shadow w-10 h-10"
			on:click={onNewRecipeClick}
		>
			<AddRecipeIcon /></button
		>
		<div data-popup={searchPopupTarget} class="bg-slate-100">
			<Autocomplete
				bind:input={searchValue}
				emptyState="No Recipes"
				options={recipeOptions}
				regionList="list-nav max-h-80 overflow-y-auto shadow-lg border border-blue-500 p-2 rounded-md"
				regionButton="w-full"
				regionEmpty="text-center shadow-lg border border-blue-500 p-2 rounded-md"
				on:selection={(event) => {
					searchValue = '';
					goto(`${base}/${event.detail.value}`);
				}}
			/>
		</div>
	</div>
	<div class="flex-1 flex flex-col p-2 gap-2 overflow-y-auto">
		{#each recipes as recipe}
			<RecipeListItem {recipe} />
		{/each}
	</div>
</div>
