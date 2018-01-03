module.exports = {
    entry: {
        app: './app.js' // chunk name: 路径需要带上./
    },
    output: {
        filename: '[name].[hash:8].js'
    },

    // 给js文件制定loader
    module: {
        // rules, 数组, 每一项是一个规则,
        rules: [
            {
                test: /\.js$/,
                // use: 'babel-loader', // 只配置这些不知道用什么规范进行打包, 需要配置presets
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    // browsers: ['> 1%', 'last 2 versions']
                                    chrome: '52'
                                }
                            }]
                        ]
                    }
                },
                exclude: '/node_modules/'
            }
        ]
    }
}