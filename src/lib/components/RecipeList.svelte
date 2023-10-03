<script lang="ts">
	import { recipeStore } from '$lib/stores';
	import type { MiddlewareState } from '@floating-ui/dom';
	import { Autocomplete, popup } from '@skeletonlabs/skeleton';
	import type { AutocompleteOption, PopupSettings } from '@skeletonlabs/skeleton';
	import RecipeListItem from './RecipeListItem.svelte';
    import AddRecipeIcon from '~icons/mdi/file-document-plus-outline';
	import { goto } from '$app/navigation';

	const searchPopupTarget = 'searchAutocomplete';

	let searchPopupSettings: PopupSettings = {
		event: 'click',
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
			keywords: recipe.tags.map((tag) => `#${tag}`),
		})) || [];

	let searchValue = '';
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
        <button class="btn-icon variant-filled bg-blue-500 shadow w-10 h-10"><AddRecipeIcon/></button>
		<div data-popup={searchPopupTarget} class="bg-slate-100">
			<Autocomplete
				bind:input={searchValue}
				emptyState="No Recipes"
				options={recipeOptions}
				regionList="list-nav shadow-lg border border-blue-500 p-2 rounded-md"
                regionButton="w-full"
                regionEmpty="text-center shadow-lg border border-blue-500 p-2 rounded-md"
                on:selection={(event) => goto(`/${event.detail.value}`)}
			/>
		</div>
	</div>
	<div class="flex-1 flex flex-col p-2 gap-2">
		{#each recipes as recipe}
			<RecipeListItem {recipe} />
		{/each}
	</div>
</div>
