# The Unicorns ESLint Shareable Config Base

An ESLint [Shareable Config](https://eslint.org/docs/developer-guide/shareable-configs) for Javascript based projects

>Contains the basic ESLint shareable config, for projects not using React.

## Installation

Use the package manager [npm](https://www.npmjs.com) or [yarn](https://yarnpkg.com/) to install it.

### Peer Dependencies

Peer dependencies need to be installed in order to make it work properly

```javascript
"eslint": "^6.3.0"
"prettier": "^1.18.2"
"typescript": "^3.6.3"
"eslint-plugin-prettier": "^3.1.0"
"@typescript-eslint/eslint-plugin": "^2.12.0"
```

After that you should install the plugin without any problem

```bash
yarn add -D @the-unicorns/eslint-config-base
```

## Usage

Once the `@the-unicorns/eslint-config-base` package is installed, you can use it by specifying `@the-unicorns/eslint-config-base` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

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

[MIT](https://choosealicense.com/licenses/mit/)
