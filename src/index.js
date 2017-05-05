import optimize from 'optimize-js'

export default (options = {}) => {
  return {
    name: 'optimize-js',
    transformBundle: function transformBundle (code) {
      // hack around optimize-js inline sourcemaps, meh
      const raw = optimize(code, { sourceMap: true })
      const split = raw.split('//# sourceMappingURL=data:application/json;charset=utf-8;base64,')
      const result = { code: split[0] }
      result.map = JSON.parse(Buffer.from(split[1], 'base64'))
      return result
    }
  }
}
