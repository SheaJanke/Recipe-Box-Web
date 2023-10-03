<script lang="ts">
	import classnames from 'classnames';
	import { AppShell } from '@skeletonlabs/skeleton';
	import NavBar from '../components/NavBar.svelte';
	import RecipeList from '$lib/components/RecipeList.svelte';
	import EmptyRecipePage from '$lib/components/EmptyRecipePage.svelte';
	import { recipeStore } from '$lib/stores';
	import RecipeDetails from '$lib/components/RecipeDetails.svelte';

	export let recipeId: string | undefined;

	$: selectedRecipe = $recipeStore?.find((recipe) => recipe.id === recipeId);
</script>

<div class="absolute inset-0">
	<AppShell>
		<div slot="header" class={classnames('md:block', { hidden: selectedRecipe })}><NavBar /></div>
		<div
			slot="sidebarLeft"
			class={classnames('h-full md:w-96', {
				'w-screen': selectedRecipe === undefined,
				'w-0': selectedRecipe !== undefined
			})}
		>
			<RecipeList />
		</div>
		{#if selectedRecipe}
			{#key selectedRecipe.id}
				<RecipeDetails recipe={selectedRecipe} />
			{/key}
		{:else}
			<EmptyRecipePage />
		{/if}
	</AppShell>
</div>
