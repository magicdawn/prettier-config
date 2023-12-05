# @magicdawn/prettier-config

> prettier config for self use

[![npm version](https://img.shields.io/npm/v/@magicdawn/prettier-config.svg?style=flat-square)](https://www.npmjs.com/package/@magicdawn/prettier-config)
[![npm downloads](https://img.shields.io/npm/dm/@magicdawn/prettier-config.svg?style=flat-square)](https://www.npmjs.com/package/@magicdawn/prettier-config)
[![npm license](https://img.shields.io/npm/l/@magicdawn/prettier-config.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install

```sh
$ pnpm add -D @magicdawn/prettier-config
```

## Usage

### `package.json`

```json
{
  "prettier": "@magicdawn/prettier-config"
}
```

### `prettier.config.cjs`

```js
module.exports = {
  ...require('@magicdawn/prettier-config'),
}
```

### `prettier.config.js` with `type=module`

```js
import defaultConfig from '@magicdawn/prettier-config'

export default {
  ...defaultConfig,
}
```

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

the MIT License http://magicdawn.mit-license.org
