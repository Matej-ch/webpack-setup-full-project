var path = require('path');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    devtool: "source-map", // only for development

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9999
    }
}