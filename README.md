### webpack学习
#### webpack支持的模块化方式
* es6的模块化方式
* CommonJS的模块化方式
* AMD的模块化方式
  * 引用的模块会打包成一个单独的模块
  
---
#### webpack.config.js配置

```js
module.exports = {
    entry: {
        app: './app.js' // chunk name: 路径需要带上./
    },
    output: {
        filename: '[name].[hash:5].js'
    }
}
```

* 使用AMD定义的模块会生成*.hash.js文件, 单独打包


---
### 使用babel
* 安装最新 ```npm install babel-loader@8.0.0-beta.0 @babel/core```
* ```npm install babel-loader babel-core --save-dev```

```
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
                use: 'babel-loader', // 只配置这些不知道用什么规范进行打包, 需要配置babel-presets, 规范的总结, es2016 env包括最新及之前, react相关, stage0-3
                exclude: '/node_modules/' // 排除在规则之外, 不进行babel-loader编译
            }
        ]
    }
}

```

---
### 配置babel-presets
* 如果安装了最新的babel-loader babel-core ```npm install @babel/preset-env --save-dev```
* 如果安装的是普通的babel-loader babel-core ```npm install babel-preset-env --save-dev```
* **配置的targets不同, 打包的结果也不尽相同**

```js
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
                                    browsers: ['> 1%', 'last 2 versions']
                                    // chrome: '52'
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
```
 

### babel-polyfill和babel-runtime-transform
#### 为什么有?
* 转换函数和方法, 需要这两个**插件**, 例如Generator, Map, Set, Array.from, Array.prototype.includes

#### 区别
* Babel-polyfill 
  * 垫片, 全局, 引入后全局变量定义, 为开发应用准备, 业务中使用
  * 安装 ```npm install babel-polyfill --save```
  * 引用 ```import "babel-polyfill"```
* babel-runtime-transform
  * 局部垫片, 为开发框架而准备, 不会污染全局, 开发框架的使用新方法
  * 使用的时候, 处理多余代码?
  * 安装插件 ```npm install babel-plugin-transform-runtime --save-dev```
  * 安装环境 ```npm install babel-runtime --save```
  * 使用:项目的根目录下创建.barbelrc文件, 配置这个文件
  
---
### 使用局部垫片

* 配置.babelrc
```json
{
  "presets": [
    ["@babel/preset-env", {
      "targets": {
        "browsers": ["last 2 versions"]
      }
    }]
  ],
  "plugins": ["transform-runtime"]
}
```

**注意这时候安装的应该是@babel/runtime, 因为babel-loader, babel-core安装的都是最新**