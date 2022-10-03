import adapter from '@sveltejs/adapter-auto'
import preprocess from "svelte-preprocess"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: [
		preprocess({
			postcss: true,
		})
	],
	env: {
		dir: process.cwd(),
		publicPrefix: 'PUBLIC_'
	}
};

export default config;
