const path = require('path');
/* 引入插件  html-webpack-plugin */
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    //1、入口文件
    entry: './src/index.js',


    //2、 出口路径
    output: {
        /* 路径要为绝对路径 */
        path: path.resolve('./dist')
    },

    /* 5、测试服务器   npm i -D webpack-dev-server */
    /* 用于自动编译成为相关的文件 */
    devServer: {
        /* 以xx目录作为服务器的根目录 */
        /* 默认为8080端口 */

        contentBase: './public',
        /* 自动打开浏览器  自动刷新内容*/
        open: true
    },







    /*3、 加载器loader，识别jsx => babel-loader*/
    /* babel-loader   & @babel/core     & @babel/preset-react    */
    /*===> 编译js     依赖babel核心库    编译jsx     */
    /*安装 npm i -D  babel-loader @babel/core @babel/preset-react*/

    /* 加载css/sass/less/vue/图片等 */
    module: {
        /* 加载器的规则 */
        rules: [{
            //-----------js文件编译规则
            /* 匹配以 .js  结尾的文件=>即js文件 */
            test: /\.js$/,
            /* 使用哪种加载器 */
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-react']
                }
            }]
            //-----------其他文件编译规则
        }]

    },

    /*4、插件plugin  编译成为html文件  */
    plugins: [
        new HtmlWebpackPlugin({
            /* npm i -D html-webpack-plugin */
            /* 以此文件作为模板 在出口目录生成一个HTML文件,html会自动引入js文件*/
            template: './public/index.html',
            /* 生成的html文件名默认为index.html */
            // filename:'login.html'
        })
    ]
}