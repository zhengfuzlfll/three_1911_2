const path = require('path');
module.exports = {
    //入口文件
    entry: './src/index.js',


    // 出口路径
    output: {
        /* 路径要为绝对路径 */
        path: path.resolve('./dist')
    },

    /* 加载器loader，识别jsx => babel-loader*/
    /* babel-loader & @babel/core & @babel/preset-react    */
    /*    编译js      依赖babel核心库    编译jsx     */
    /* 加载css/sass/less/vue/图片等 */
    module: {
        /* 加载器的规则 */
        // rules: [{
        //     //-----------js文件编译规则
        //     /* 匹配以 .js  结尾的文件=>即js文件 */
        //     test: /\.js$/,
        //     /* 使用哪种加载器 */
        //     use: [{
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-react']
        //         }
        //     }]
        //     //-----------其他文件编译规则
        // }]

        rules: [
            // js文件编译规则
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                        // plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }]
            },

            // 其他文件编译规则
        ]




    }
}