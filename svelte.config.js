import adapter from '@sveltejs/adapter-auto';
/** @type {import('@sveltejs/kit').Config} */

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { optimizeImports } from 'carbon-preprocess-svelte';

const base = process.env.BASE_PATH || '';

const config = {
	preprocess: [vitePreprocess(), optimizeImports()],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),
		paths: {
			base
		}
	}
};

export default config;
