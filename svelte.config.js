import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { optimizeImports } from 'carbon-preprocess-svelte';

const config = {
	preprocess: [vitePreprocess(), optimizeImports()],
	kit: { adapter: adapter() }
};

export default config;
