<script lang="ts">
	import type { Recipe } from '$lib/types';
	import ChevronRight from '~icons/mdi/chevron-right';
	import Tag from './Tag.svelte';
    import { base } from '$app/paths';

	export let recipe: Recipe;

	$: displayedTags = recipe.tags.slice(0, 3);
	$: additionalTags = recipe.tags.length - 3;
</script>

<nav class="list-nav bg-slate-100 rounded-md shadow">
	<a class="flex flex-row items-center h-16" href={`${base}/${recipe.id}`}>
		<div class="flex flex-col flex-1">
			<span class="font-bold text-lg">{recipe.name}</span>
			<div class="flex flex-row gap-2">
				{#each displayedTags as tag}
                <Tag {tag} />
				{/each}
				{#if additionalTags > 0}
					<Tag tag={`+${additionalTags}`} />
				{/if}
			</div>
		</div>
		<ChevronRight class="w-6 h-6" />
	</a>
</nav>
