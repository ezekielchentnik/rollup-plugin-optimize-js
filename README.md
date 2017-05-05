# rollup-plugin-optimize-js

[![NPM](https://img.shields.io/npm/v/rollup-plugin-optimize-js.svg)](https://www.npmjs.com/package/rollup-plugin-optimize-js)
[![Travis](https://travis-ci.org/ezekielchentnik/rollup-plugin-optimize-js.svg?branch=master)](https://travis-ci.org/ezekielchentnik/rollup-plugin-optimize-js)

Run your [Rollup](https://github.com/rollup/rollup) bundles through [optimize-js](https://github.com/nolanlawson/optimize-js) post minifying.

This will optimize a JavaScript file for faster initial execution and parsing, by wrapping all immediately-invoked functions or likely-to-be-invoked functions in parentheses.  By default [Rollup](https://github.com/rollup/rollup) does similar optimizations, however, this will apply the optimization to all functions, and/or handle situations where minifying your bundle undos previous optimizations.

See [optimize-js](https://github.com/nolanlawson/optimize-js#javascript-api) for more info and details on when it makes sense for this optimization.

#### [Demo](https://github.com/ezekielchentnik/preact-pwa)

---

## Usage Example

Install

```bash
npm i rollup-plugin-optimize-js --save
```

Use plugin in your `rollup.config.js`, be sure to add after uglify

```js
const buble = require('rollup-plugin-buble')
const uglify = require('rollup-plugin-uglify')
const optimizeJs = require('rollup-plugin-optimize-js')

module.exports = {
  entry: 'src/index.js',
  plugins: [
    buble(),
    uglify({
      "compress": {
        "negate_iife": false, // not required, similar optimization
        // omitted for brevity
      }
    }),
    optimizeJs() // occurs after uglify
  ],
  targets: [
    {
      sourceMap: true,
      format: 'iife'
    }
  ]
}
```

### Thanks
[Nolan Lawson](https://github.com/nolanlawson) for the excellent JavaScript

### License

[MIT]

[MIT]: http://choosealicense.com/licenses/mit/
