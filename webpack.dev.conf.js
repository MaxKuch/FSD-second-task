const path = require('path')
const webpack = require('webpack')
const merge = require(('webpack-merge'))
const baseWebpackConfig = require('./webpack.base.config')
const devWebpackConfig = merge({
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 8080,
        overlay: true,
        index: 'ui-kit.html'
    },
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.SourceMapDevToolPlugin({
            filename: '[file].map'
        })
    ],
}, baseWebpackConfig)

module.exports = new Promise((resolve, reject) => {
    resolve(devWebpackConfig)
})

