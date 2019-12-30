const path = require('path')
// import React from 'react';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    /* 1、入口 */
    entry: './src/index.js',

    /* npm i -D webpack-cli */

    /*2、 出口文件 */
    output: {
        path: path.resolve(__dirname, './dist')
    },

    /* 3、加载器 */
    /*安装 npm i -D  babel-loader @babel/core @babel/preset-react*/
    module: {
        rules: [{
                /* 编译js文件 */
                text: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }]
            },
            /* 其他文件编译规则 */
        ]
    },

    /* 4、插件plugins */
    /* npm i -D html-webpack-plugin */
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    /* 5、服务器 */
    /* npm i -D webpack-dev-server */
    devServer: {
        contentBase: './public',
        open: true
    }


}