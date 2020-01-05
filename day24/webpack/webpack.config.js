const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
/* 基于commonjs */
/* 》》》》》》》》》》》》》》配置文件内容发生改变需要重启 */
module.exports = {
    // 1、入口文件，默认为index.js
    /* 入口文件可以有多个，=>多页面应用 */

    // entry: './src/index.js',//=>默认得到main.js文件
    entry: {
        /* home  最后生成的文件的名字 */
        home: './src/index.js', //home.js
        /* 多入口=>多页面应用   ======>配合多个plugin配置*/
        // login: './src/login.js'//login.js
    },

    //2、 出口路径
    output: {
        /* 路径要为绝对路径 */
        /* __dirname 当前文件所在的目录*/
        path: path.resolve(__dirname, './dist'),
        // filename: 'home.min.js'//单入口
        // filename: '[name].min.js' //以入口文件名为最终输出的文件名=>缓存问题
        filename: '[name].[hash:5].min.js'
        /* 默认生成哈希值，取5位，每次哈希值都不同，请求到不同的文件名，解决缓存问题 */
    },



    /*3、 加载器loader，识别jsx => babel-loader*/
    /* babel-loader   & @babel/core     & @babel/preset-react    */
    /*===> 编译js     依赖babel核心库    编译jsx     */
    /*安装 npm i -D  babel-loader @babel/core @babel/preset-react*/

    /* 加载css/sass/less/vue/图片等 */
    module: {
        /* 加载器的规则 */
        rules: [
            //-----------js文件编译规则
            {

                /* 匹配以 .js  结尾的文件=>即js文件 */
                /* js */
                // test: /\.js$/,
                /* js/jsx 正则*/
                test: /\.jsx?$/,
                /* 排除   绝对路径  =>优化编译速度，排除即不编译node_modules*/
                exclude: path.resolve(__dirname, 'node_modules'),
                /* 使用哪种加载器 */
                use: [{
                        loader: 'babel-loader',
                        options: { //------------^^^^^^^^^^^^^^----------->[ptions]
                            presets: ['@babel/preset-react'],
                            /* 浏览器支持高阶组件的简写（设计模式） 
                                npm i -D @babel/plugin-proposal-decorators 
                            */
                            plugins: [
                                /* 1---支持高阶组件的简写（设计模式）------ */
                                ['@babel/plugin-proposal-decorators', {
                                    legacy: true
                                }],
                                /* 支持箭头函数，支持静态属性 */
                                ['@babel/plugin-proposal-class-properties', {
                                    loose: true
                                }],
                            ],
                        }
                    },
                    // css loader(注意顺序:从后往前)
                    /* npm i -D css-loader  
                       npm i -D style-loader
                    */
                    // {
                    //     test: /\.css$/,
                    //     use: ['style-loader', 'css-loader']
                    // },


                ]
            },


            //-----------其他文件编译规则
            // css-loader
            {
                test: /\.css$/,
                /* 无参数，可写成数组形式 =>两者有顺序问题*/
                // use: ['css-loader','style-loader']
                /* 从后往前编译，即先编译css-loader=>style-loader */
                use: ['style-loader', 'css-loader']

            },

            // sass loader(注意顺序:从后往前) 
            /* npm i -D sacss-loader */
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]

    },



    /*4、插件plugin  编译成为html文件  */
    plugins: [
        new HtmlWebpackPlugin({
            /* npm i -D html-webpack-plugin */
            /* 以此文件作为模板 在出口目录生成一个HTML文件,html会自动引入js文件*/
            template: './public/index.html',
            /* 生成的html文件名默认为index.html */
            // filename: 'login.html'
        }),
        /* webpack 实现多页面应用 */
        // new HtmlWebpackPlugin({
        //     /* npm i -D html-webpack-plugin */
        //     /* 以此文件作为模板 在出口目录生成一个HTML文件,html会自动引入js文件*/
        //     template: './public/index.html',
        //     /* 生成的html文件名默认为index.html */
        //     filename: 'login.html'
        // })
    ],


    /* 5、测试服务器   npm i -D webpack-dev-server */
    /* 用于自动编译成为相关的文件 */
    devServer: {
        /* 以xx目录作为服务器的根目录 -------------*/
        /* 默认为8080端口 */
        contentBase: './public',
        /* 自动打开浏览器  自动刷新内容*/
        open: true
    },


    /* 6、目录映射（别名） */
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '~': path.resolve(__dirname, './src/components')
        },
        /* 后缀 先查找index.js,没有则查 .json文件*/
        // extensions:['.js','.json']
    }



}