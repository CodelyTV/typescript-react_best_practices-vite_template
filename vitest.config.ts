import { configDefaults } from "vitest/config";
import react from "@vitejs/plugin-react";

export default {
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: ["tests/setupTests.ts"],
		exclude:[
			...configDefaults.exclude,
			'./tests/e2e/**'
		]
	},
	plugins: [react()]
};
