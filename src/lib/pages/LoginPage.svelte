<script lang="ts">
	import { auth, googleProvider } from '$lib/firebase';
	import { base } from '$app/paths';
	import { signInWithEmailAndPassword, signInWithPopup, signInWithRedirect } from 'firebase/auth';

	let email = '';
	let password = '';
	let showPassword = false;

	function onChangePassword(event: Event) {
		const target = event.target as HTMLInputElement;
		password = target.value;
	}

	function signInWithEmailPassword() {
		signInWithEmailAndPassword(auth, email, password)
			.then((value) => console.log(value))
			.catch((error) => console.log(error.message));
	}

	function signInWIthGoogle() {
		signInWithPopup(auth, googleProvider)
			.then((user) => console.log(user))
			.catch((error) => console.log('error', error));
	}
</script>

<div class="absolute inset-0 flex flex-row">
	<div
		class="w-0 lg:w-3/5 h-full flex items-center justify-center bg-gradient-to-tr from-blue-500 to-cyan-500"
	>
		<img src={`${base}/images/transparent_icon.png`} />
	</div>
	<div class="w-full lg:w-2/5 h-full flex items-center justify-center bg-slate-100 text-stone-950">
		<div class="flex flex-col w-4/5 lg:w-3/5">
			<div class="font-bold text-3xl mb-8">Log In</div>
			<label class="label mb-2">
				<span class="font-semibold">Email</span>
				<input class="input variant-outline" type="text" bind:value={email} />
			</label>
			<label class="label mb-2">
				<span class="font-semibold">Password</span>
				<input
					class="input variant-outline"
					type={showPassword ? 'text' : 'password'}
					on:input={onChangePassword}
				/>
			</label>
			<div class="flex flex-row justify-between">
				<label class="flex items-center space-x-2 mb-4">
					<input class="checkbox" type="checkbox" bind:checked={showPassword} />
					<p>Show Password</p>
				</label>
			</div>
			<button
				type="button"
				class="btn bg-blue-500 text-white mb-2"
				on:click={signInWithEmailPassword}>Sign In</button
			>
			<div class="w-full text-center mb-2">Or</div>
			<button type="button" class="btn border border-blue-500" on:click={signInWIthGoogle}>
				<img class="w-6 h-6" src={`${base}/images/google_icon.png`} />
				<span>Log In With Google</span>
			</button>
		</div>
	</div>
</div>
