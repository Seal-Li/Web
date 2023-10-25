// var header = document.getElementById("header");
// console.log(header);

// var div = document.getElementsByTagName("div");
// console.log(div);

// var content = document.getElementsByClassName("content");
// console.log(content);

// 只返回匹配到的第一个内容
// var querySelector = document.querySelector(".content");
// console.log(querySelector);

// 返回匹配到的所有元素
// var querySelectorAll = document.querySelectorAll(".content");
// console.log(querySelectorAll);

// 可以像操作数组那样用下标取出其中的元素
// var querySelectorAll = document.querySelectorAll("body .content")[1];
// console.log(querySelectorAll);

// innerHTML和innerText两种方式都支持文字
// innerHTML 用于设置文本或标签内容（标签内容可以正常解析）
// innerText 用于设置文本或标签内容（标签内容不能解析）
//如果想让div中加一个p标签
// var header = document.querySelector("#header");
// header.innerHTML = "innerHTML";
// header.innerHTML = "<p> innerHTML p Tag</p>";
// header.innerText = "innerText";
// header.innerText = "<p> innerHTML p Tag</p>";

// var header = document.querySelector("#header");
// console.log(header.getAttribute("class"));
// header.setAttribute("class", "green");

// var username = document.querySelector(".username");
// 获取表单元素内容
// console.log(username.value);

// var male = document.querySelector(".male");
// checked 用来检测单选或多选按钮是否被选中，选中返回true，否则返回false
// console.log(male.checked);

// 点击注册按钮，获取用户名和密码
// var submit = document.querySelector(".submit");
// submit.onclick = function () {
//     var username = document.querySelector(".username");
//     var password = document.querySelector(".password");
//     console.log(username.value);
//     console.log(password.value);
// };

// 密码长度为8-16位， 如不满足，给出提示
// var password = document.querySelector(".password");
// password.onblur = function () {
//     // console.log(password.value);
//     // console.log(this.value);
//     var password_mark = document.querySelector(".password_mark");
//     if (this.value.length < 8 || this.value.length > 16){
//         // alert("密码长度应为8-16位"); 
//         password_mark.innerHTML = "密码长度应为8-16位";
//         ps = password_mark.getAttribute("class");
//         password_mark.setAttribute("class", `${ps} red`);
//     } else {
//         password_mark.innerHTML = "密码长度正确";
//         password_mark.setAttribute("class", "password_mark green");
//     }
// };


// 创建xmlHttpRequest对象
// var xhr = new XMLHttpRequest();
// //get请求免费天气接口
// // appid 和 appsecret 需要自己解决
// // 域名/注册地址：http://yiketianqi.com
// //              "https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=43656176&appsecret=I42og6Lm&ext=&cityid=&city="
// // true为异步， false为同步，异步更快
// xhr.open("GET", "https://v0.yiketianqi.com/api?unescape=1&version=v91&appid=36184375&appsecret=C1f26btb", true)
// xhr.send();
// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         var data = xhr.responseText;
//         console.log(data); //打印结果为字符串
//         // 将json字符串转化为js中的对象，以便后续操作
//         console.log(JSON.parse(data)); 
//     }
// };