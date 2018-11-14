# vue-cli-plugin-expose-env

> vue cli 3 plugin to expose none `VUE_APP_` env to frontend

<!-- [![Build Status](https://img.shields.io/travis/magicdawn/vue-cli-plugin-expose-env.svg?style=flat-square)](https://travis-ci.org/magicdawn/vue-cli-plugin-expose-env)
[![Coverage Status](https://img.shields.io/codecov/c/github/magicdawn/vue-cli-plugin-expose-env.svg?style=flat-square)](https://codecov.io/gh/magicdawn/vue-cli-plugin-expose-env) -->

[![npm version](https://img.shields.io/npm/v/vue-cli-plugin-expose-env.svg?style=flat-square)](https://www.npmjs.com/package/vue-cli-plugin-expose-env)
[![npm downloads](https://img.shields.io/npm/dm/vue-cli-plugin-expose-env.svg?style=flat-square)](https://www.npmjs.com/package/vue-cli-plugin-expose-env)
[![npm license](https://img.shields.io/npm/l/vue-cli-plugin-expose-env.svg?style=flat-square)](http://magicdawn.mit-license.org)

## Install

```sh
$ npm i vue-cli-plugin-expose-env --save
```

## options

vue.config.js

```js
module.exports = {
  pluginOptions: {
    exposeEnv: ['SOME_ENV'],
  },
}
```

then it's ok to use `process.env.SOME_ENV` in frontend code

## Changelog

[CHANGELOG.md](CHANGELOG.md)

## License

the MIT License http://magicdawn.mit-license.org
