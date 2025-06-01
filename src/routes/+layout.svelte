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
	import { onDestroy, onMount } from 'svelte';

	export let data;

	let wakeLock: WakeLockSentinel | null = null;

	// Request the wake lock
	async function requestWakeLock() {
		try {
			if ('wakeLock' in navigator) {
				wakeLock = await navigator.wakeLock.request('screen');
				console.log('Wake lock is active.');

				// Handle wake lock release (e.g., if the system releases it)
				wakeLock.addEventListener('release', () => {
					console.log('Wake lock was released.');
				});
			} else {
				console.warn('Wake Lock API not supported in this browser.');
			}
		} catch (err) {
			console.error(`Failed to acquire wake lock: ${err}`);
		}
	}

	// Re-acquire wake lock when visibility changes
	function handleVisibilityChange() {
		if (wakeLock !== null && document.visibilityState === 'visible') {
			requestWakeLock();
		}
	}

	onMount(() => {
		requestWakeLock();
		document.addEventListener('visibilitychange', handleVisibilityChange);
	});

	onDestroy(() => {
		document.removeEventListener('visibilitychange', handleVisibilityChange);
		if (wakeLock) {
			wakeLock.release();
			wakeLock = null;
		}
	});

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
