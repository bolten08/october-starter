const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = (env, argv) => {
    const prodMode = argv.mode === 'production';

    let config = {
        context: path.resolve(__dirname, 'src'),
        entry: {
            main: ['./js/main.js']
        },

        output: {
            path: path.resolve(__dirname, 'backend/themes/demo/assets/'),
            filename: 'js/[name].js'
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/, /build/],
                    use: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                url: false
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: [require('autoprefixer')]
                            }
                        },
                        'sass-loader',
                        {
                            loader: 'style-resources-loader',
                            options: {
                                patterns: [
                                    path.resolve(
                                        __dirname,
                                        'src/scss/shared/*.scss'
                                    )
                                ]
                            }
                        }
                    ]
                }
            ]
        },

        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            }
        },

        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            }),
            new CopyWebpackPlugin([
                {
                    from: 'fonts',
                    to: './fonts'
                }
            ]),
            new StyleLintPlugin({
                configFile: '.stylelintrc',
                context: path.resolve(__dirname, 'src'),
                files: '**/*.scss',
                failOnError: false,
                quiet: false
            }),
            new WebpackNotifierPlugin({
                title: 'Webpack Config',
                suppressSuccess: false,
                warningSound: true,
                messageFormatter: error => `${error}`
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: !prodMode && argv.watch ? 'server' : 'disabled'
            }),
            new VueLoaderPlugin()
        ],

        devServer: {
            proxy: {
                '*': {
                    target: 'http://october-starter.test',
                    changeOrigin: true,
                    secure: false
                }
            }
        }
    };

    return config;
};
