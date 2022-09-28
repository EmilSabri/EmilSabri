import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['./src/images']
		}
	}
};

export default config;
