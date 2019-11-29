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
                edgeCaseWidget: getSplitChunksRuleForWidget('edge-case-widget'),
                interestingWidget: getSplitChunksRuleForWidget('interesting-widget')
            }
        }
    }
};

function isRelativeToWidget(module, widgetName) {
    if (module.identifier().includes(widgetName)) return true;

    if (module.issuer) return isRelativeToWidget(module.issuer, widgetName)
}

function getSplitChunksRuleForWidget(widgetName) {
    return {
        test: module => isRelativeToWidget(module, widgetName),
        name: widgetName,
        chunks: 'async',
        enforce: true,
    }
}


module.exports = config;
