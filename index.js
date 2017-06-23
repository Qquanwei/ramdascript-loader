var compiler = require('ramdascript').compile

module.exports = function (source) {
  this.cacheable && this.cacheable()
  return compiler(source, { wrapper: 'commonjs'})
}
