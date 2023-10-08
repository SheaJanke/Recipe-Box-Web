import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},
		prerender: {
			entries: ['/', '/id']
		}
	}
};

export default config;
