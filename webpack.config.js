const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const bundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
                        sourceMap: false,
                        minimize: true,
                    }
                },
                {   // Compila SASS para CSS
                    loader: 'sass-loader',
                    options: {
                        sourceMap: false,
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
    mode: 'production',
    entry: {
        app: [
            './src/js/app.js',
            './src/scss/main.scss',
        ],
        // vendor: [
        //     'vue',
        //     'vuex',
        // ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            rules.js,
            rules.sass,
            rules.vue,
            // rules.fonts,
        ]
    },
    plugins: [
        extractSass,
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            hash: true,
            publicPath: '/',
        }),
        new bundleAnalyzerPlugin(),
    ],
    devtool: 'cheap-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true, // usando gzip
        port: 8080,
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.js',
            // '@fortawesome/fontawesome-free-solid$': '@fortawesome/fontawesome-free-solid/shakable.es.js'
        }
    }
}
