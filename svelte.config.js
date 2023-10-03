import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		// paths: {
		// 	base: process.env.NODE_ENV === 'production' ? '/sveltekit-github-pages' : ''
		// },
		prerender: {
			entries: ['/', '/id']
		}
	}
};

export default config;
