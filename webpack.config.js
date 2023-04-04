const path = require('path');
const webpack = require('webpack')
const dotenv = require('dotenv')

const env = dotenv.config().parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports= {
    mode: 'development',
    entry: "./src/index.js",
    devServer:{
        static:'./dist',
    },
    experiments:{
        topLevelAwait:true,
    },
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type:'asset/resource',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin(envKeys)
      ]
};