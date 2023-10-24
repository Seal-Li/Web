// sourcery skip: avoid-using-var
// 函数声明提前, 会将函数名字放到当前文件的顶部

document.getElementById('btn').onclick = function(){
    // alert('Hello World, from JS!');
}

// var声明变量,Js没有变量类型单独声明的说法
// 若变量声明但没有赋值,则值为undefined
// var num = 10;
// alert(num);

// 常量名全部大写
// const PI = 3.1415926;
// alert(PI);

// js变量会基于定义时赋予的值自动获取数据类型,
// 但是这不影响给这个变量赋予其他类型的值 
// var num = 10;
// var str = 'Hello World';
// str = 123;
// // alert(str);
// console.log(str);

// bool 值 true false,多用于条件判断
// var str1 = 'Hello World';
// var str2 = "Hello World";
// console.log(str1 == str2);

// null 空值,多用于变量定义时
// var arr = null;
// console.log(arr);

// 基本数据类型
// 数值\字符串\布尔\undefined\null

// 数组使用[]和括号的方式定义
// 用于存放多个相同意义的值
// 数组中的值的类型可以不一致
// 数组不属于js的基本数据类型,而是js对象
// arr = ["1", 2, str1]
// console.log(arr);
// console.log(arr[2]);

// 对象
// var obj = {
//     name: "name",
//     age: 18,
//     sex: "男",
//     hobby: ["sing", "dance", "rap"],
//     isStudent: true,
//     tel: 12345678901
// }
// console.log(obj);
// console.log(obj.name);

// js中的数量类型可以相互转换
// 任意类型的值转化为bool值都为true,仅有几个例外
// 0, null, '', undefined
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(''));
// console.log(Boolean(undefined));

// 类型检测
// var str = "Hello World";
// console.log(typeof str);
// str = 123;
// console.log(typeof str);

// 隐式转换
// 如果计算两侧有字符串,则转换为字符串(字符串仅限于+操作)
// 非+两侧进行运算时,两侧均转为数值类型
// NaN与任何数值任何类型运算都转换为NaN

// var num = 10;
// var num1 = 10.5;
// console.log(num + num1);

// var str2 = "10";
// var str3 = "10.5";
// console.log(str2 + str3);

// var num = 10;
// var str = "abc";
// console.log(num + str);

// console.log(num - str)

// 引用数据类型-栈
// 程序运行消耗时间,运行时消耗运行内存
// 堆栈存储结构: 上下文 堆 栈
// | 上下文     | 栈: 存储小块数据(固定)  | 堆: 存储大块数据(弹性) |
// |  a->0001   |   0001                |    10                 |
// |  PI        |   0002                |  3.14                 |
// |            |   0003                |  3.15                 |
// |  arr->0004 |   0004                |  hash_value [1,2,3]   |

// const arr = [1, 2, 3];
// console.log(arr);
// arr[0] = 10;
// console.log(arr);

// var x = 1;
// console.log(x++); // out:1, 先使用再执行自增操作
// console.log(x); // out: 2,已经自增完成
// console.log(++x); // out: 3,先自增再使用

// == 只用于比较值是否相同
// === 恒等于操作符,既比较值,又比较类型
// var a = 1;
// var b = true;
// console.log(a == b); //out: true
// console.log(a === b); //out: false

//当两侧比较内容的类型不一致时,采用隐式转换,将两侧类型转换为相同的数据类型再进行比较

// console.log(2 > 1 && 4 > 5); // out: false
// console.log(2 > 1 || 4 > 5);    // out: true
// console.log(!(2 > 1));  // out: false

// 逻辑运算符优先级
// && > || > !

// 逻辑运算符的短路特性
// 1. && 左侧为假时,右侧不执行
// 2. || 左侧为真时,右侧不执行

// 逻辑运算符的短路特性
// 1. && 左侧为假时,右侧不执行
// 2. || 左侧为真时,右侧不执行

// var a = 5;
// a += 10; // 等价于a = a + 10
// console.log(a);

// 三目运算符
// var age = 20;
// if (age > 18) {
//     console.log('adult');
//  } else {
//     console.log('teenager');
// }
// 等价于以下写法
// (age >= 18) ? console.log('adult') : console.log('teenager');

// var a = 10;
// var b = 20;
// var max = a > b ? a : b;
// console.log(max);

// var a = 10;
// var b = 20;
// var max = a > b ? a : b;
// console.log(max);

// 函数:抽象的代码集合,使用function关键字
// function func(a, b){
    // return a + b;
    // console.log(a + b); // 位于return之后的代码不会执行
    
// }
// result = func(3, 5); // 调用函数func
// console.log(result);

// 如果定义了函数,但没有给定 return 返回值, 那么默认返回undefined
// 采用函数名定义的函数和变量定义的函数底层逻辑不一致
// 未命名的函数称为匿名函数
// 函数形参再定义时默认初值为undefined
// 如果实参数量小于形参数量,则未被赋值的形参的值为undefined
// 如果传递的实参数量多于形参,那么只使用前卖弄对应数量的值,后面的参数不会被使用,但也不会被销毁
// arguements关键字,只能在函数内部使用,用来接收所有的实参,并存放在一个伪数组中
// var sum = function(a, b) {
//     var x = undefined;
//     var y = undefined; // 这两行由浏览器首次加载改文件时自动执行操作
//     return a + b;
// }
// console.log(sum(6, 6));

// var sum = function(a, b) {
//     console.log(arguments);
//     return a + b;
// }
// console.log(sum(6, 6, 6));

// var sum = function(a, b,...args) {
//     console.log(arguments);
//     console.log(args);
//     return a + b;
// }
// console.log(sum(6, 6, 6));

// 每个变量都有自己的作用域
// 最外层的变量叫做全局变量,其余便来给你统称为局部变量
// 变量的作用范围是通过{}划分的
// 变量的作用范围只能小于等于自身所在范围
// 变量值的获取规则,就近(会从自身所在层,逐层向上寻找直到全局变量,遇到值直接使用)
// 局部变量定义时,未使用var,则默认全局变量

// 变量声明提前,在js文件执行前,会有预扫描阶段,改阶段将变量名提前至文档最前方,但不会提前赋值

// var i = 10;
// function func(num){
//     var a = 1;
//     console.log(a, num, i); //可输出 1, 5, 10
// }

// func(5)
// console.log(a, i); //a 不可被调用 

// 无论if语句的条件的多复杂,最后都会转化为一个bool值
//判断条件大于两个的时候,不建议使用else(随着时间的增加,可能会出现意想不到的结果)

// var age = 16;
// if (age > 18) {
//     console.log("adult");
// }
// // 当语句块中有且仅有一行语句时,{}可以省略不写,但不推荐使用
// if (age > 18) 
// console.log("adult");


// 递归, 求10的阶乘 10!
// function factorial(num) {
//     if (num == 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }
// console.log(factorial(10));

// 循环, 求10的阶乘
// var num = 1
// for (var i = 1; i <= 10; i++){
//     num *= i;
// }
// console.log(num);

// 双重循环, 九九乘法表
// str = ""
// for (var i = 1; i <= 9; i++) {
//     for (var j = 1; j <= i; j++) {
//         str += j + "*" + i + "=" + (i * j) + "\t";
//         if (i == j){
//             str += "\n";
//         }
//     }
// }
// console.log(str);

// break 只能终止当前层循环;
// continue 跳过当前次
// return 可以直接终止多重循环, 用法 "return;", 但同时函数也结束

// js中的整数,浮点数统称为数值,不区分具体类型
// 数组内可以保存任何类型的数据,长度不限
// 数组有一个固定的属性,length
// var arr = [1, "a", true, [2, 3], 
// {name: "zs", age: 18}];
// console.log(arr);
// console.log(arr[4]);
// console.log(arr.length);

// 三种对数组进行循环的方式
// var arr = [1, "a", true, [2, 3], 
// {name: "zs", age: 18}];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (i in arr) {
//     console.log(arr[i]);
// }

// // ES6 新增
// for (ele of arr) {
//     console.log();
// }


// 数组的常用方法
// 1. push 向数组的末尾添加元素,可传多个参数,都会添加到末尾,会修改原数组
// 2. pop 弹出末尾的元素,传参无效,修改原数组
// 3. shift 删除数组开头的元素,传参无效,修改原数组
// 4. unshift 添加元素到数组开头
// 5. join("-") 用"-"将数组的元素连接成字符串,不在原数组上修改,返回新的字符串
//      通常和split搭配使用
// 6. cancat 将多个素组连接起来

// var arr = [1, -1, "a", true, [2, 3], {name: "zs", age: 18}];
// arr.push(4);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift(0);
// arr.unshift(-1, -2);
// console.log(arr);
// var str = arr.join("-");
// console.log(str);
// var newArr = str.split("-");
// console.log(newArr);
// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 10];
// var arr3 = arr1.concat(arr2);
// console.log(arr3);

// 其余数组常用方法
// 1. slice 截取数组, 第一个参数为起始位置,第二个参数为结束位置,闭区间[start, stop]
// 2. splice 删除数组元素并添加新值,第一个参数为起始位置,第二个参数为截取长度,第三个元素为添加的新元素
//      改变原数组,返回截取元素
// 3. reverse 数组反转, 改变原数组
// 4. sort 数组排序,升序排列,默认使用ASCII码排序,可以通过修改规则,使其达到升序或降序
// 5. indexOf 查找数组中是否包含某个元素,若包含返回元素位置,不包含则返回-1

// var arr = [1, 2, 3, 9, 10, 4, 5, 6, 7, 8];
// console.log(arr)
// var start = 0;
// // var stop = 4;
// // sub_arr = arr.slice(start, stop);
// // console.log(sub_arr);

// var interval = 2;
// var sub_arr = arr.splice(start, interval, "new element");
// console.log(sub_arr);
// console.log(arr);

// arr.reverse();
// console.log(arr);

// arr.sort();
// console.log(arr);

// arr.sort(function (a, b){
//     // a-b升序
//     // b-a降序 
//     return b-a;
// })
// console.log(arr);

// var index = arr.indexOf(10);
// console.log(index);