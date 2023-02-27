// // 手写bind函数：用apply实现
// Function.prototype.myBind = function () {
//     // 1、将参数转为数组
//     const argsArr = Array.from(arguments);
//     console.log(argsArr, 'test');
//     // 2、获取上线文this
//     const context = argsArr.shift();

//     const self = this; // 当前要执行的函数

//     return function () {
//         console.log(this, '11111111');
//         // return self.apply(context, argsArr);
//         self.apply(context, argsArr);
//     }
// }

// Function.prototype.copyBind = function (context, ...args) {

//     const _self = this; // 要执行的函数
//     return function () {
//         _self.apply(context, args);
//     }
// }

// Function.prototype.testBind = function (context, ...args) {
//     const _self = this;

//     return function () {
//         _self.apply(context, args);
//     }
// }

// function test(a, b) {
//     console.log(this);
//     console.log(a, b);
// }

// const result = test.copyBind({ a: 12 }, 1, 2);

// result();

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(1);
    }, 2000)
});
let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(3);
    }, 3000)
});
Promise.race([promise1, promise2, promise3]).then(res => {
    console.log(res);
    //结果：2
}, rej => {
    console.log(rej)
}
)