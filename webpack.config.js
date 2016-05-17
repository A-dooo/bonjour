var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        client: 'webpack-dev-server/client?http://192.168.16.158:8080',
        server: 'webpack/hot/only-dev-server',
        index: './index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'react-hot!babel-loader'
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style!css!autoprefixer?browsers=last 2 versions'
        }, {
            test: /\.less$/,
            loader: 'style!css!less'
        }, { // url imgs
            test: /\.(png|jpg|gif)$/,
            loader: 'url?limit=25000'
        }, { // font
            test: /\.woff/,
            loader: "url-loader"
        }]
    }
    // devServer: {
    //     hot: true,
    //     inline: true
    // },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ]
};
