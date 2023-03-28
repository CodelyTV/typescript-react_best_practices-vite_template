module.exports = {
  extends: ["eslint-config-codely/typescript"],
  plugins: ["eslint-plugin-html"],
  overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json", "./cypress/tsconfig.json"],
			},
		},
	],
};
