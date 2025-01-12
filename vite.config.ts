import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "tailwindcss";
import path from "path";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
	plugins: [TanStackRouterVite({}), react()],
	css: {
		devSourcemap: true,
		postcss: {
			plugins: [tailwindcss()],
		},
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
		extensions: [".js", ".jsx", ".ts", ".tsx"],
	},
});
