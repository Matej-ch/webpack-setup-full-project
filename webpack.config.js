const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

    devtool: "source-map", // only for development

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset/resource"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(s[ac]|c)ss$/i,

                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {publicPath: "" }
                    },
                    "css-loader","postcss-loader","sass-loader"],
            }
        ]
    },

    plugins: [new MiniCssExtractPlugin()],

    resolve: {
        extensions: [".js",".jsx"]
    },

    output: {
        assetModuleFilename: "images/[hash][ext][query]"
    },

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9999,
        hot: true
    }
}