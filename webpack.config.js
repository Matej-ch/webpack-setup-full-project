const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    devtool: "source-map", // only for development

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"],
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js",".jsx"]
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9999,
        hot: true
    }
}