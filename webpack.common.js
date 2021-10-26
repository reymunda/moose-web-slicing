const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname,"dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ] 
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "index.html",
            filename: "index.html"
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname,'src/assets'),
                    to: path.resolve(__dirname,'dist/assets')
                }
            ]
        })
    ]
}