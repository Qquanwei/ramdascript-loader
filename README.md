[![npm](https://img.shields.io/npm/v/ramdascript-loader.svg)](https://www.npmjs.com/package/ramdascript-loader)

# RamdaScript Loader


## Install

`npm install ramdascript-loader --save-dev`

## Configuration

__webpack.config.js__

```js
module.exports = {
    module: {
        rules: [
            {
                test: /\.ram$/,
                loaders: ['babel-loader', 'ramdascript-loader']
            }
        ]
    }
}
```

## Example

__webpack.config.js__

```js
var webpack = require('webpack')

module.exports = {
    entry: './src/app.ram',
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.json', '.ram']
    },
    output: {
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ram$/,
                loaders: ['babel-loader', 'ramdascript-loader']
            }
        ]
    },

    // dev server config
    devServer: {
        contentBase: './',
        compress: true,
        port: 8000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}
```

## Maintainers

[Quanweili](https://github.com/Qquanwei)

[Yosbel Marín](https://github.com/yosbelms)

MIT