document.getElementById('btn').onclick = function(){
    // alert('Hello World, from JS!');
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
}

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

// var sum = function(a, b) {
//     return a + b;
// }
// console.log(sum(6, 6));