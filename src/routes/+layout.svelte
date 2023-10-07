<script lang="ts">
	import '../app.postcss';
	import { onAuthStateChanged, type Unsubscribe } from 'firebase/auth';
	import { auth, db } from '$lib/firebase';
	import { recipeStore, userStore } from '$lib/stores';
	import { collection, getDocs, onSnapshot } from 'firebase/firestore';
	import type { Recipe } from '$lib/types';
	import { computePosition, autoUpdate, offset, shift, flip, arrow, size } from '@floating-ui/dom';
	import { Modal, Toast, initializeStores, storePopup } from '@skeletonlabs/skeleton';
	import type { Unsubscriber } from 'svelte/store';

	export let data;

	initializeStores();

	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow, size });

	let unsubscribeFromRecipes: Unsubscribe | undefined;
	let unsubscribeFromUsers: Unsubscriber | undefined;

	let loading = false;

	auth.authStateReady().then(() => {
		loading = false;
		userStore.set(auth.currentUser);
	});

	onAuthStateChanged(auth, async (user) => {
		if (user) {
			userStore.set(user);
		} else {
			userStore.set(null);
		}
	});

	unsubscribeFromUsers?.();
	unsubscribeFromUsers = userStore.subscribe(async (user) => {
		if (!user) {
			recipeStore.set([]);
			return;
		}
		unsubscribeFromRecipes?.();
		unsubscribeFromRecipes = onSnapshot(
			collection(db, `users/${user.uid}/recipes`),
			(recipesSnapshot) => {
				const recipes = recipesSnapshot.docs.map((recipeDoc) => recipeDoc.data()) as Recipe[];
				recipeStore.set(recipes);
			}
		);
	});

	$: selectedRecipe = $recipeStore?.find((recipe) => recipe.id === data.recipeId);
</script>

<svelte:head>
	<title>{selectedRecipe ? selectedRecipe.name : 'Recipe Box'}</title>
</svelte:head>

<Modal />
<Toast />

<slot user={$userStore} {loading} />
