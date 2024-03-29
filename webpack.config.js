const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV != 'production';
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const { boolean } = require('yargs');

module.exports = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ?  'eval-source-map' : 'source-map',
    entry: path.resolve( __dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve:{
        extensions: [ '.js', 'jsx'],
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'),
        hot:true,
    },
    plugins:[
        isDevelopment && new ReactRefreshWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ].filter(boolean),
    module:{
        rules:[
            {
                test: /\.jsx$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:{
                        plugins:[
                            isDevelopment && require.resolve('react-refresh/babel'),
                        ].filter(boolean),
                    }
                },
            },
            {
                test: /\.scss$/,
                exclude:/node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            }
        ]
    }



};