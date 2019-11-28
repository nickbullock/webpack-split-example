const path = require('path');

const config = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].app.js'
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: [
                    'awesome-typescript-loader'
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [
            '.tsx',
            '.ts',
            '.js'
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                widgets: {
                    test: module => {
                        return module.identifier().includes('src/widgets');
                    },
                    name: module => {
                        const list = module.identifier().split('/');
                        list.pop();
                        return list.pop();
                    },
                    chunks: 'async',
                    enforce: true
                }
            }
        }
    }
};

module.exports = config;
