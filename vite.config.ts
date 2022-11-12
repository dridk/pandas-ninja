import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
	plugins: [svelte()],
	define : {
		        '__APP_VERSION__': JSON.stringify(process.env.npm_package_version),
	}
})
