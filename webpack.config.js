const path = require("path");

const DIST_DIR = path.resolve("dist");
const SRC_DIR = path.resolve("src");

const config = {
    mode: 'development',
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        rules: [
            {
                test: /\.jsx?/,
                include: SRC_DIR,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["react", "es2015", "stage-2"]
                    } 
                } 
            }, {
                test: /\.s?css/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    }
};

module.exports = config;