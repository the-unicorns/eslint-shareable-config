# The Unicorns ESLint Shareable Config

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for Javascript based projects

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/) to install it.

This project includes 2 packages:

- `@the-unicorns/eslint-config-base`: Contains the basic ESLint shareable config, for projects not using React.
- `@the-unicorns/eslint-config-react`: Extends the base configuration and includes some React rules. For projects using React.

```bash
yarn add -D @the-unicorns/eslint-config-base
yarn add -D @the-unicorns/eslint-config-react
```

## Usage

Once the `@the-unicorns/eslint-config-*` package is installed, you can use it by specifying `@the-unicorns/eslint-config-*` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "@the-unicorns/eslint-config-base",
  "rules": {
    // Additional, per-project rules...
  }
}
```


## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Contributors

    - [View Contributors](https://github.com/the-unicorns/eslint-shareable-config/graphs/contributors)

## License

[MIT](LICENSE)
