<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px" alt="Codely logo"/>
  </a>
</p>

<h1 align="center">
  <⚡⚛️> Vite React Best Practices Template (by Codely)
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV/vite-react_best_practices-template/actions/workflows/tests.yml"><img src="https://github.com/CodelyTV/vite-react_best_practices-template/actions/workflows/tests.yml/badge.svg" alt="Build status"/></a>
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="Codely Pro Courses"/></a>
</p>

<p align="center">
  Template for creating React apps with TypeScript following best practices: Unit and end-to-end tests, Continuous Integration, and linting.
  <br />
  <br />
  <a href="https://github.com/CodelyTV/vite-react_best_practices-template/stargazers">Stars are welcome 😊</a>
</p>

## ⚡ Using this Vite template

1. Create your project based on this template:
   - a) If you want to create a GitHub repository, we would recommend to use the GitHub "Use this template" button and clone your newly created repository
   - b) If you prefer to just create a local project, you can use [degit](https://github.com/Rich-Harris/degit):
     ```bash
     npx degit CodelyTV/vite-react_best_practices-template#main my-app
     ```
2. Update your project meta-information:
   - [ ] Update the [`package.json`](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/package.json):
     - [ ] Specify proper values for the `name`, `author` and `license` properties
     - [ ] Remove the `private` property if you plan to publish the app as a npm package
   - [ ] Change the author in [`LICENSE`](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/LICENSE)
   - [ ] Change the title in [`index.html`](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/index.html)
   - [ ] Replace the favicon in the [`public`](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/public) directory
   - [ ] Clean up this [`README.md`](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/README.md)
3. Run your app:
   1. `cd my-app`: Move to your project root directory
   2. `npm install`: Install all the project dependencies
   3. `npm start`: Start the development server on [localhost:3000](http://localhost:3000)

## ✅ Testing

### Unit tests

`npm run test`: Run unit tests with Jest and React Testing Library

### End-to-end tests

1. `npm start`: Start the development server on [localhost:3000](http://localhost:3000)
2. Run end-to-end tests with Cypress choosing one of the following options:
  - `npm run cy:open`: Open Cypress in dev mode
  - `npm run cy:run`: Execute Cypress in CLI

## 🔦 Linting

- `npm run lint`: Run linter
- `npm run lint:fix`: Fix lint issues

## 🌈 Tech Stack

- [TypeScript](https://www.typescriptlang.org)
- [ESLint](https://eslint.org) and [Prettier](https://prettier.io) already configured with the [🤏 Codely's configuration](https://github.com/CodelyTV/eslint-config-codely)
- [Jest](https://jestjs.io) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro) for the unit tests
- [Cypress](https://www.cypress.io) with [Testing Library](https://testing-library.com/docs/cypress-testing-library) for the end-to-end tests
- [GitHub Action Workflows](https://github.com/features/actions) set up to run tests and linting on push
- [Makefile](https://github.com/CodelyTV/vite-react_best_practices-template/blob/main/Makefile) for standardize how to run projects
- [Sass](https://sass-lang.com) to supercharge CSS with nested classes and more fun
- [.editorconfig](https://editorconfig.org) for sharing the IDE config

## 🤔 FAQ

### 🤷‍♂️ Why Vite and not Next.js, Remix, or Create React App

React updated the official recommendation about how to start a new project. Previously, they recommended Create React App (CRA) and we did [this very same template based on CRA](https://github.com/CodelyTV/cra-template-codely), and right now they recommend to directly use a framework like Next.js, Remix, or Gatsby.

However, they also include an specific section in the official documentation on how to use React without a framework, and the recommended way is to use Vite or Parcel.

Even if not using a framework such as Next.js is something to double check, we are interested into having this template for use cases where you are not interested into the benefits of a complete framework. For instance, theses cases could be as simple as learning the React.js features and limitations in order to have a clear vision where React ends and a framework starts. This is something we do in [our React video course](https://pro.codely.com/library/react-de-0-aplicando-buenas-practicas-192069/460310/about/).

### 👻 Why not adding `.vscode` or `.idea` to the `.gitignore` template

These are folders created due to personal environment preferences. We should ignore these personal development environment preferences to be ignored using your global `.gitignore` file and leave the project `.gitignore` file as clean as possible, that is, only containing the project specific rules.

You can create a `.gitignore_global` file with rules that will apply to all your repositories with:

```bash
touch ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related information

This application was generated using the [<⚡⚛️> Vite React Best Practices Template](https://github.com/CodelyTV/vite-react_best_practices-template). Feel free to check it out and star the repo! 🌟😊🙌
