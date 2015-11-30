module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "dist/main.js"
    },
    devTool: "source-map",
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            }
        ]
    }
};