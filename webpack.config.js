const path = require("path");
const dotenv = require("dotenv");
const webpack = require('webpack');

const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = () => {
    // call dotenv and it will return an Object with a parsed key
    const env = dotenv.config().parsed;

    // reduce it to a nice object, the same as before
    const EnvPlugin = Object.keys(env).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(env[next]);
        return prev;
    }, {});

    const CSSLoader = {
        loader: "css-loader",
        options: {
            modules: true,
            localIdentName: '[local]',
        }
    };

    return {
        entry: {
            main: "./src/index.jsx"
        },
        output: {
            path: path.join(__dirname, "/public/assets"),
            filename: "bundle.js",
            publicPath: '/assets/'
        },
        module: {
            rules: [
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader"
                    },
                },
                {
                    test: /\.css$/,
                    include: path.resolve(__dirname, "src/styles"),
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: CSSLoader
                    })
                },
                {
                    test: /\.scss$/,
                    include: path.resolve(__dirname, "assets/scss"),
                    use: ExtractTextPlugin.extract({
                        fallback: "style-loader",
                        use: [CSSLoader, "sass-loader"]
                    })
                },
                {
                    test: /\.svg$/,
                    use: {
                        loader: "react-svg-loader",
                    }
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin(EnvPlugin),
            new ExtractTextPlugin("bundle.css"),
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                filename: path.join(__dirname, "/public") + "/index.html"
            })
        ],
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@app": path.join(__dirname, "src/app"),
                "@assets": path.join(__dirname, "assets/scss")
            }
        },
        devServer: {
            contentBase: path.join(__dirname, "public"),
            publicPath: '/assets',
        },
        node: {
            fs: 'empty' // This fixes issue with webpack, dotenv and css-loader
        }
    }
};