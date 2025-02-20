# @exercism/eslint-config-javascript

This is the shared [`eslint`][web-eslint] configuration used by the [JavaScript track][git-javascript] (for students) and the files contributors and maintainers touch.
[Shareable configs][web-shareable-configs] are designed to work with the `extends` feature of ESLint configuration files.
This means you can use the same configuration you're used to on [Exercism][web-exercism] in your on projects!

## Usage

To use the configuration for students, open your [eslint configuration][web-eslint-configuration] file, and import the following file for the flat config.
For example, for flat config configuration files:

```javascript
import baseConfig from '@exercism/eslint-config-javascript';

// ...
export default [
  ...baseConfig,
  // ... your configuration
];
```

To use the configuration used by contributors and maintainers, add the following:

```javascript
import baseConfig from '@exercism/eslint-config-javascript/maintainers';

// ...
export default [
  ...baseConfig,
  // ... your configuration
];
```

## Students configuration

Find the student configuration [here](index.mjs).
It's goal is to help detect and prevent common problems, without making _any_ decisions about code-style.

The rules are based on:

- [`eslint:recommended`][web-eslint-recommended]
- A few extra rules that catch common issues but are not enabled via the recommended plugin. See [this PR][git-javascript-pr-1094] for a bit of discussion and rationale.

Because the [Exercism JavaScript track][git-javascript] is primarily focussing on running the exercises on Node, only `node` globals are turned on in the environment, but when extending this configuration, you can add more (or turn those off).

## Maintainers configuration

Similar to the students configuration, and found [here](maintainers.mjs), it also includes the [`prettier` plugin][git-eslint-plugin-prettier] because we use [`prettier`][web-prettier] to achieve consistent code formatting.
This plugin turns _off_ rules that conflict with formatting.

Additionally, it doesn't have warnings but errors for most/all of the rules in the students configuration.

## Tooling configuration

Because the tooling (such as the [JavaScript Analyzer][git-javascript-analyzer], [Representer][git-javascript-representer], and [Test Runner][git-javascript-test-runner]) are written in TypeScript, they don't use the same configuration files.
If you're looking for those, or to build your own tools in TypeScript, go to [@exercism/eslint-config-tooling][git-eslint-config-tooling].

## Development

If you want to work on this repository, install the dependencies using `corepack` and `pnpm`:

```shell
corepack enable pnpm
corepack pnpm install
```

Because pnpm is configured to use isolated `node_modules` (symlinked), everything such as your tools and plugins inside your editor should keep working as expected.

[git-eslint-config-tooling]: https://github.com/exercism/eslint-config-tooling
[git-eslint-plugin-import]: https://github.com/benmosher/eslint-plugin-import
[git-eslint-plugin-prettier]: https://github.com/prettier/eslint-config-prettier
[git-javascript]: https://github.com/exercism/javascript
[git-javascript-analyzer]: https://github.com/exercism/javascript-analyzer
[git-javascript-pr-1094]: https://github.com/exercism/javascript/pull/1094
[git-javascript-representer]: https://github.com/exercism/javascript-representer
[git-javascript-test-runner]: https://github.com/exercism/javascript-test-runner
[web-eslint]: https://eslint.org
[web-eslint-configuration]: https://eslint.org/docs/user-guide/configuring/
[web-eslint-recommended]: https://eslint.org/docs/rules/
[web-exercism]: https://exercism.org
[web-prettier]: https://prettier.io
[web-shareable-configs]: https://eslint.org/docs/developer-guide/shareable-configs
