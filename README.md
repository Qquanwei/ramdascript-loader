[![npm](https://img.shields.io/npm/v/ramdascript-loader.svg)](https://www.npmjs.com/package/ramdascript-loader)

# ramdascript-loader

inspire by ramdascript


## install

`npm install ramdascript-loader --save-dev`

## webpack2, 3

```
module.exports = {
 ...
 module: {
   rules: [{
     test: /\.ram$/,
     loaders: ['babel-loader', 'ramdascript-loader']
   }
    ...
   ]
 }
}
```


## with React

just using babel-preset-react

have fun
