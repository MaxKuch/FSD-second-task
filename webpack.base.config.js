const path = require('path')
const merge = require(('webpack-merge'))
const postcssConfig = require('./postcss.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

const isDev = process.env.NODE_env === 'development'
const isProd = !isDev
const isWatching = process.env.WATCH === 'true'
const PATHS = {
    src: path.join(__dirname, './src'),
    dist: path.join(__dirname, './dist'),
    assets: 'assets/'
}
console.log('isDev:', isDev)
console.log('isWatching:', isWatching)
const filename = ext => isDev ? `${ext}/[name].${ext}` : `${ext}/[name].[hash].${ext}`
const cssLoaders = extra => {
    const loaders = [{
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true,
            reloadAll: true
        }
    }, 'css-loader', 'postcss-loader']
    if (extra) {
        loaders.push(extra)
    }
    return loaders
}

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    }
    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
    return config
}

module.exports = merge(postcssConfig, {
    externals: {
        paths: PATHS
    },
    context: PATHS.src,
    mode: 'development',
    entry: {
        main: './index.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@js': path.resolve(__dirname, './src/js'),
            '@img': path.resolve(__dirname, './src/assets/img'),
        }
    },
    optimization: optimization(),
    output: {
        filename: filename('js'),
        path: PATHS.dist,
        publicPath: ''
        
    },
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './pug/ui-kit.pug',
            filename: 'ui-kit.html',
            minify: {
                collapseWhitespace: isProd
            }
        }),
        new CleanWebpackPlugin({
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new CopyWebpackPlugin([
            {from: `${PATHS.src}/assets/img/**/*`,
             to: `${PATHS.dist}/[path][name].[ext]`}
        ])
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: cssLoaders()
            },
            {
                test: /\.s[ac]ss$/,
                use: cssLoaders('sass-loader')
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: isDev ? '[path][name].[ext]' : '[path][name][hash].[ext]',
                    publicPath: '../'
                },
            },
            {
                test: /\.(ttf|woff|eot)$/,
                loader: 'file-loader',
                options: {
                    name: isDev ? '[path][name].[ext]' : '[path][name][hash].[ext]',
                    publicPath: '../',
                },
            },
            {
                test: /\.pug$/,
                use: [`pug-loader?pretty=${isDev}`]
            }
        ]
    },
})
