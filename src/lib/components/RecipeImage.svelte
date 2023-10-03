<script lang="ts">
	import { storage } from '$lib/firebase';
	import { ProgressRadial, getModalStore, type ModalSettings } from '@skeletonlabs/skeleton';
	import { getDownloadURL, ref } from 'firebase/storage';

	export let firebaseUrl: string | undefined;

	const modalStore = getModalStore();

	let imgSrc: string | undefined;

	getDownloadURL(ref(storage, firebaseUrl)).then((src) => (imgSrc = src));
</script>

<div
	class="aspect-square border border-surface-400 rounded-md flex justify-center items-center bg-surface-200"
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
	{:else}
		<ProgressRadial
			class="w-1/3 h-1/3"
			stroke={100}
			track="stroke-blue-500/30"
			meter="stroke-blue-500"
		/>
	{/if}
</div>
