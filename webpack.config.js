const path = require('path');

module.exports = {
    entry: './client/src/index.jsx',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.join(__dirname, 'client/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devtool: 'source-map',
};
