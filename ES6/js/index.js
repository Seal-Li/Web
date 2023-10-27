// let 关键字
// 1. 声明变量不允许重复声明,但可以再次赋值
// 2. 保留块级作用域
// 3. 没有变量声明提前

// let a = 1;
// a = 2;
// console.log(a);

/**
 * const关键字
 * 1. 不允许修改值
 * 2. 声明必须赋初值
 * 3. 标识符一般都大写
 * 4. 不存在变量声明提前
 * 5. 不允许重复声明
 * 6. 块级作用域
 */

// 声明对象类型使用const，非对象类型声明使用let
// const ARR = [1,2,3,4,5];
// ARR.push(6);
// console.log(ARR);
// const PI = 3.1415926;

/**
 * 模板字符串
 */
// const nv = "zs";
// let str = `<ul>
//                 <li>${nv}</li>
//             </ul>`

// ES5 对象的定义形式
// let username = 'zs'
// let password = '123456'
// let person1 = {
//     username: username,
//     password: password,
//     say: function() {
//         console.log("hello world");
//     }
// };

// // ES6 对象的简写形式
// let person = {
//     username,
//     password,
//     say() {
//         console.log("hello world");
//     }
// };
// console.log(person);
// person.say();

// ES6 允许使用 => 来定义函数
/** 
 * 箭头函数
 * 1. 箭头函数中的this永远执行当前定义的作用域内的this
 * 2. 不能作为构造函数实例化对象
 * 3. 是能使用arguments关键字，但是可以使用args接收参数
*/

// console.log(this)
// let functionArrow = (a, b,...args) => {
//     console.log(this);
//     console.log(args);
//     return a + b;
// };
// console.log(functionArrow(1, 2,3, 4, 5));

// let pow = (x) => {
//     return x * x
// }

// 简写形式
// let pow2 = x => x * x;

// console.log(pow(2));
// console.log(pow2(3));

// let box = document.querySelector('.box');
// box.onclick = function() {
//     console.log(this);
//     setTimeout(() => {
//         box.setAttribute("class", "box bg_green");
//     }, 1000);
// };

// 箭头函数适合与this无关的回溯，定时器，数组方法回调
// console.log(this);
// let box = document.querySelector('.box');
// let that = this;
// box.onclick = function() {
//     console.log(that);
//     setTimeout(() => {
//         console.log(this);
//         box.setAttribute("class", "box bg_green");
//     }, 1000);
// }

// promise
// 有属性是状态，可以通过resolve，reject调整状态
// pending 异步执行中
// fulfilled 成功
// rejected 失败
// 如果成功了，触发成功后的后续操作；失败亦然

// let p = new Promise((resolve, reject) => {
//     // let data = {
//     //     status: 1,
//     //     message: "成功"
//     // }
//     let data = {
//         status: 0,
//         message: "失败"
//     }
//     if (data.status) {
//         resolve(data);
//     } else {
//         reject(data);
//     }
// });

// console.log(p);

// p.then((data) => {
//     // promise 成功后触发
//     console.log(data);
//     return data;
// }, (data) => {
//     // promise 失败后触发
//     console.log(data);
//     return data;
// });

// 接口1 接口2 接口3
// 三个接口必须顺序执行，接口1的结果是接口2的参数，接口2的结果是接口3的参数
// new Promise((resolve, reject) => {
//     // 接口1
//     resolve(1);
// }).then((data) => {
//     // 接口2
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         resolve(2);
//     });
// }).then((data) => {
//     // 接口3
//     console.log(data);
//     return new Promise((resolve, reject) => {
//         resolve(3);
//         console.log(3);
//     });
// });

// catch 专用于捕捉失败

// let p = Promise.resolve("success");
// console.log(p);
// let p1 = Promise.reject("failed");
// console.log(p1);


// 模块化
// 1. 防止命名冲突
// 2. 代码复用
// 3. 可维护性强

// export 用于对外
// import 用于引入