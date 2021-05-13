const { HotModuleReplacementPlugin } = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
// const path = require("path");

/** @type {import('webpack').Configuration} */
const devConfig = {
    mode: "development",
    devtool: 'eval-source-map',
    devServer: {
        port: 8080,
        hot: true
    },
    target: "web",
    plugins: [
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpackPlugin()
    ]
};

module.exports = merge(common, devConfig);
