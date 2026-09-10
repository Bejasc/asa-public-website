// Configuration for your app
// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file

import { defineConfig } from "#q-app/wrappers";
import path from "path";

export default defineConfig(() => {
	return {
		// app boot file (/src/boot)
		// https://v2.quasar.dev/quasar-cli-vite/boot-files
		boot: [],

		// https://github.com/quasarframework/quasar/tree/dev/extras
		extras: ["mdi-v7", "fontawesome-v6", "roboto-font", "material-icons"],

		// Full list of options: https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#build
		build: {
			target: {
				browser: ["es2022", "firefox115", "chrome115", "safari14"],
				node: "node20",
			},

			typescript: {
				strict: true,
				vueShim: true,
			},

			vueRouterMode: "history", // available values: 'hash', 'history'

			alias: {
				"@": path.join(__dirname, "./src"),
			},
			vitePlugins: [
				[
					"vite-plugin-checker",
					{
						vueTsc: {
							tsconfigPath: "tsconfig.vue-tsc.json",
						},
					},
					{ server: false },
				],
			],
		},

		// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#devserver
		devServer: {
			open: true, // opens browser window automatically
		},

		// https://v2.quasar.dev/quasar-cli-vite/quasar-config-file#framework
		framework: {
			config: {
				dark: true,
			},

			plugins: [],
		},

		animations: [],
	};
});
