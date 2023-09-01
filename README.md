## Project Setup

- `npm install` - install dependencies
- `npm run start:dev` - start the frontend project on the webpack dev server
- `npm run start:dev` - start the frontend project on the webpack dev server + backend (json server)
- `npm run start:vite` - start the frontend project using vite
- `npm run start:dev:vite` - start the frontend project using vite + backend

----

## Scripts
- `npm run build:prod` - build in production mode
- `npm run build:dev` -  build in dev mode (not minimized)
- `npm run lint` - run ESlint
- `npm run lin:fix` - fix Eslint erors
- `npm run stylelint` - run Stylelint
- `npm run stylelint:fix` - fix Stylint errors
- `npm run test:unit` - run unit tests using Jest
- `npm run chromatic` - run Chromatic (use your project token)
- `npm run storybook` - run Storybook
- `npm run sbuild-storybook` - build Storybook
- `npm run prepare` - Husky pre-commit hooks

----

## Project Architecture

The project follows the **[Feature Sliced Design](https://feature-sliced.design/docs/get-started/overview)** methodology.

----

## Internationalization

The project uses the **[i18next](https://react.i18next.com)** library for managing translations. Translation files are stored in *public/locales* folder.

----

## Tests

The project employs 3 types of tests:
1) Unit tests using **Jest** and **React Testing Library**: `npm run test:unit`
2) Visual tests using **Chromatic**: `npm chromatic`
3) End-to-end (e2e) tests using **Cypress**: `npm run test:e2e`

----

## Linting

**ESLint** (Airbnb's config) is used for checking TypeScript code, and **Stylelint** is used for checking CSS syntax.

Additionally, a custom ESLint plugin, **eslint-plugin-maxtikhon-plugin**, enforces key architectural principles with 3 rules:
1) *path-checker* - prohibits the use of absolute imports within a single module;
2) *layer-imports* - checks layers dependencies (low-level layer can't depend on high-level one)
3) *public-api-imports* - allows imports from other modules only through the public API (index.ts).

##### Running Linters
- `npm run lint` - run ESlint
- `npm run lin:fix` - fix Eslint erors
- `npm run stylelint` - run Stylelint
- `npm run stylelint:fix` - fix Stylint errors

----
## Storybook

Story cases files are created alongside components with the *.stories.tsx* extension. Server requests are mocked using the *storybook-addon-mock* library.

You can run Storybook using the command::
- `npm run storybook`

----

## Project Configuration

The project contains configuration for two build tools:
1. **Webpack** - ./config/build
2. **Vite** - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

All configuration is stored in the */config* directory.
- */config/babel* - Babel
- */config/build* - Webpack configuration
- */config/jest* - Jest testing environment configuration
- */config/storybook* - Storybook configuration

Scripts for refactoring are located in the *scripts* folder.

----

## CI Pipeline and Pre-commit Hooks

The **GitHub Actions** configuration can be found in */.github/workflows*. CI pipeline includes running all types of tests, the project and Storybook builds, running linting.

Husky pre-commit hooks includes runnig linters for staged file. The configuration can be found in */.husky*.

----

## Working with Data

Data interaction is managed using **Redux Toolkit**.

Server requests are handled using **Redux Thunk** and **RTK query**.

For dynamically importing reducers (to avoid pulling them into the main bundle), the [useDynamicReducerLoad](/src/shared/lib/hooks/useDynamicReducerLoad.ts) hook is used.

There examples of data normalization using **Entity Adapter**.

----

### Working with Feature Flags

The use of feature flags is allowed only through the toggleFeatures helper or ToggleFeatures component.
They accept an object with the following options:

```typescript jsx
{
   name: // feature flag name, 
   on: // function to execute / copmonent to display if the feature is enabled
   of: // function to execute / copmonent to display if the feature is disabled
}
```

For automatic feature removal, use the *npm run remove-feature {arg1} {arg2}*, which takes two arguments:
- The name of the feature flag to be removed.
- The state (on/off).

----

## Other concepts
- **SCSS modules**
- **Json server**
- **Routing configuration**
- **lazy loading, lazy libraries import**
- **theming**
- **infinite scroll**
- **custom Babel plugin**