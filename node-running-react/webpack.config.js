module.exports = {
    target: 'node',
    mode: 'development',
    entry: {
        hello: './Hello.js',
        todo: './TodoList.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            }
        ]
    }
}