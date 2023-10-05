import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		base: dev ? '' : process.env.BASE_PATH,
		prerender: {
			entries: ['/', '/id']
		}
	}
};

export default config;
