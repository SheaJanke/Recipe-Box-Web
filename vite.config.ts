import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	server: {
		host: true,
	},
	plugins: [
		sveltekit(),
		purgeCss(),
		Icons({
			autoInstall: true,
			compiler: 'svelte'
		})
	]
});