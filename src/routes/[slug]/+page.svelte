<script lang="ts">
	import LoginPage from "$lib/pages/LoginPage.svelte";
	import RecipeListPage from "$lib/pages/RecipeListPage.svelte";
	import Layout from "../+layout.svelte";

	export let data;
</script>

<Layout {data} let:user={user} let:loading={loading}>
	{#if loading}
		<div>Loading...</div>
    {:else if user}
		<RecipeListPage recipeId={data.recipeId}/>
    {:else}
        <LoginPage />
    {/if}
</Layout>
