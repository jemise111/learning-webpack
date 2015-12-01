module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname,
        filename: "dist/main.js"
    },
    devTool: "source-map",
    devtool: "eval",
    eslint: {
        configFile: '.eslintrc'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ["style", "css?sourceMap", "sass?sourceMap"]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['eslint-loader', 'babel?presets[]=react,presets[]=es2015', 'react-hot']
            },
        ]
    }
};