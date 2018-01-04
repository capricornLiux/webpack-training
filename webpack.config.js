module.exports = {
    entry: {
        app: './app.js' // chunk name: 路径需要带上./
    },
    output: {
        filename: '[name].[hash:8].js'
    },

    // 给js文件指定loader
    module: { // 和webpack1相同
        // rules, 数组, 每一项是一个规则
        rules: [
            {
                test: /\.js$/, // 正则的资源使用loader进行处理
                // use: 'babel-loader', // 只配置这些不知道用什么规范进行打包, 需要配置babel-presets, 规范的总结, es2016 env包括最新及之前, react相关, stage0-3
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 给loder指定preset
                        presets: [
                            ['@babel/preset-env', {

                                // 指定浏览器/ node的版本/ 环境等等
                                targets: {
                                    // 指定浏览器的版本, 占有率, 最新的2个版本等, browserlist, can i use上面的数据
                                    // browsers: ['> 1%', 'last 2 versions']
                                    // chrome: '52'
                                    browsers: ['last 2 versions']
                                }
                            }]
                        ]
                    }
                },
                exclude: '/node_modules/' // 排除在规则之外, 不进行babel-loader编译
            }
        ]
    }
}