const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/client/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "[name].[contenthash].js",
        publicPath: ""
    },
    module: {
        rules: [
            {
                test: /.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            // {
            //     test:/\.css$/,
            //     use: ['style-loader'],
            // },
            {
                type: "asset",
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
            }
        ],
    },
    resolve: {
        extensions: [".js", ".jsx", ".json"],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};
