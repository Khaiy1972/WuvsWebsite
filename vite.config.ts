import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

import path from 'path';

// https://vite.dev/config/
export default defineConfig({
	plugins: [tailwindcss(), react()],
	base: '/WuvsWebsite/',
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, './src'),
			'@public': path.resolve(__dirname, './public'),
		},
	},
});
