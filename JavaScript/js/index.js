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
    var str1 = 'Hello World';
    var str2 = "Hello World";
    // console.log(str1 == str2);

    // null 空值,多用于变量定义时
    var arr = null;
    // console.log(arr);

    // 基本数据类型
    // 数值\字符串\布尔\undefined\null

    // 数组使用[]和括号的方式定义
    // 用于存放多个相同意义的值
    // 数组中的值的类型可以不一致
    // 数组不属于js的基本数据类型,而是js对象
    arr = ["1", 2, str1]
    // console.log(arr);
    // console.log(arr[2]);

    // 对象
    var obj = {
        name: "name",
        age: 18,
        sex: "男",
        hobby: ["sing", "dance", "rap"],
        isStudent: true,
        tel: 12345678901
    }
    console.log(obj);
}