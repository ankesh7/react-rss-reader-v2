// webpack config
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
    template: __dirname + '/app/index.html',
    filename: 'index.html',
    inject: 'body',
});

module.exports = {
    entry: [
        './app/index.js'
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react'],
            }
        }]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist/',
    },

    plugins: [HTMLWebpackPluginConfig]
}
