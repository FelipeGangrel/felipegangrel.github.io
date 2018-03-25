const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].bundle.css',
    disable: process.env.NODE_ENV === "development"
});

const rules = {
    js: {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
        }
    },
    sass: {
        test: /\.scss$/,
        exclude: /(node_modules|bower_components)/,
        use: extractSass.extract({
            use: [
                {   // traduz css para CommonJS
                    loader: 'css-loader',
                    options: {
                        sourceMap: true,
                        minimize: true,
                    }
                },
                {   // Compila SASS para CSS
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        minify: true,
                    }
                },
            ],
            fallback: 'style-loader' // usar style loader em desenvolvimento
        })
    },
    vue: {
        test: /\.vue$/,
        use: {
            loader: 'vue-loader',
        }
    },
    fonts : {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: {
            loader: 'file-loader',
        }
    },

};

module.exports = {
    mode: 'development',
    entry: {
        app: [
            './src/js/app.js',
            './src/scss/main.scss',
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            rules.js,
            rules.sass,
            rules.vue,
            rules.fonts,
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            hash: true,
        }),
    ],
    watch: true,
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // usando gzip
        port: 8080,
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        }
    }
}
