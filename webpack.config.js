const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const isDev = process.env.NODE_env === 'development'
const isProd = !isDev;
console.log('idDev:', isDev)
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`
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
module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: './index.js'
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@sass': path.resolve(__dirname, 'src/sass')
        }
    },
    optimization: optimization(),
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: filename('css')
        })
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
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|eot|svg)$/,
                use: ['file-loader']
            },
            {
                test: /\.pug$/,
                use: [`pug-loader?pretty=${isDev}`]
            }
        ]
    }
}