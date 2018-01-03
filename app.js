// import sum from './sum.js';
//
// // 引用CommonJS的模块
// var minus = require('./minus.js');
//
// // 引用amd模块
// // 注意: 要使用相对路径
// require(['./muti'], function (muti) {
//     console.log('muti(2,3)=', muti(2, 3));
// })
//
// console.log('sum(2,3)=', sum(2, 3));
//
// console.log('minus(12,5)=', minus(12, 5));

let func = ()=>{}

const NUM = 8

let arr = [1,2,3]

let arrB = arr.map(element=>{
    return element * 2
})

console.log(new Set(arr))