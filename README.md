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
### polyfill/runtime
* polyfill 垫片, 全局, 引入后全局变量定义, 为开发应用准备
  * ```npm install babel-polyfill --save```
  *  ```import "babel-polyfill"```
* runtime-transformer 局部, 为开发框架而准备
  * 使用的时候, 处理多余代码?
  * ```npm install babel-plugin-transform-runtime --save-dev```
  *  ```npm install babel-runtime --save```
  *  全局环境创建.barbelrc文件, 配置