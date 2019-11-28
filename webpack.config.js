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
            chunks: 'all',
            cacheGroups: {
                vendors: false,
                default: false,
                edgeCaseWidget: {
                    test: module => {
                        return module.identifier().includes('edge-case-widget') || module.issuer && module.issuer.context.includes('edge-case-widget');
                    },
                    name: 'edge-case-widget',
                    chunks: 'all',
                    enforce: true,
                },
                interestingWidget: {
                    test: module => {
                        return module.identifier().includes('interesting-widget') || module.issuer && module.issuer.context.includes('interesting-widget');
                    },
                    name: 'interesting-widget',
                    chunks: 'all',
                    enforce: true
                }
            }
        }
    }
};

module.exports = config;
