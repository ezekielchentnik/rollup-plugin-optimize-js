# rollup-plugin-optimize-js

[![NPM](https://img.shields.io/npm/v/rollup-plugin-optimize-js.svg)](https://www.npmjs.com/package/rollup-plugin-optimize-js)
[![Travis](https://travis-ci.org/gufsky/rollup-plugin-optimize-js.svg?branch=master)](https://travis-ci.org/gufsky/rollup-plugin-optimize-js)

Run your [Rollup](https://github.com/rollup/rollup) bundles through [optimize-js](https://github.com/nolanlawson/optimize-js) post bundle generate.

This will optimize a JavaScript file for faster initial execution and parsing, by wrapping all immediately-invoked functions or likely-to-be-invoked functions in parentheses.  Rollup by default does similar optimization, however, this will apply it to all immediately-invoked functions or likely-to-be-invoked functions in parentheses, and/or handle situations where minification undo's previous optimizations.

See (optimize-js)[https://github.com/nolanlawson/optimize-js#javascript-api] for more info and details on when it makes sense for this optimization.

#### [Demo](https://github.com/ezekielchentnik/preact-pwa)

---

## Usage Example

Install

```bash
npm i rollup-plugin-optimize-js --save
```

Use plugin in your `rollup.config.js`

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
        "negate_iife": false,
        // omitted for brevity
      }
    })
    optimizeJs()
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
