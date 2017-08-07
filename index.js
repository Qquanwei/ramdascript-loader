var ram = require('ramdascript')

module.exports = function (source) {
	this.cacheable && this.cacheable()
	var result = ram.compile(source, {
		format: 'cjs',
		sourceMap: true,
		sourceMapCfg: {
			sourceRoot: '',
			source: this.remainingRequest,
			file: this.currentRequest,
			sourceContent: source
		}
	})
	var sourceMap = JSON.parse(result.sourceMap)
	this.callback(null, result.js, sourceMap)
}
