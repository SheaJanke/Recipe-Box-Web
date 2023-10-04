<script lang="ts">
	import { auth } from '$lib/firebase';
	import { base } from '$app/paths';
	import LogoutIcon from '~icons/mdi/logout';
</script>

<div class="h-full w-full p-4 bg-blue-500 flex justify-between">
	<div class="flex items-center">
		<img class="h-8 w-8" src="./images/transparent_icon.png" alt="Recipe Box Icon" />
		<span class="font-bold ml-2 text-2xl inline-flex items-center text-white">Recipe Box</span>
	</div>
	<button type="button" class="btn p-0" on:click={() => auth.signOut()}>
		<LogoutIcon class="w-6 h-6 text-white" style="fill: white" />
	</button>
</div>
