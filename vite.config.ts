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
			'@assets': path.resolve(__dirname, './src/assets'),
			'@libs': path.resolve(__dirname, './src/libs'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@components': path.resolve(__dirname, './src/components'),
		},
	},
});
