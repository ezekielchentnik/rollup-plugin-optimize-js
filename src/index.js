import optimize from 'optimize-js'

export default (options = {}) => {
  return {
    name: 'optimize-js',
    ongenerate (bundle, output) {
      // attempt to hack around optimize-js inline sourcemaps, meh
      // const raw = optimize(output.code, { sourceMap: true })
      // const split = raw.split('//# sourceMappingURL=data:application/json;charset=utf-8;base64,')
      // const result = { code: split[0] }
      // result.map = JSON.parse(Buffer.from(split[1], 'base64'))

      // more accurate sourcemaps, todo: fix, PR optimize-js
      const raw = optimize(output.code, { sourceMap: false })
      const result = { code: raw, map: output.map }
      return result
    }
  }
}
