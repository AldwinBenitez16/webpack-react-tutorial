module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // transpile everything that ends with .js or jsx
                exclude: /node_modules/, // exclude the node_modules file
                use: {
                    loader: "babel-loader" // traspile everything with babel-loader
                }
            }
        ]
    }
}