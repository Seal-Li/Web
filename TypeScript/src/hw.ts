/**
 * ts 中一旦使用注解修饰变量或函数，就要严格遵守注解类型，不然就会编译报错
 * 但是报错不会影响js的正常编译
 * 
 */
// function showName(name: string): string {
//     return "hello " + name;
// }
// console.log(showName("张三"));

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function sayHi(p: UserInfo) {
    return "hello " + p.firstName + " " + p.lastName + ";" + " age is " + p.age;
}

// let li = {
//     firstName: "张",
//     lastName: "三",
//     age = 20
// }

class UserInfo{
    firstName: string;
    lastName: string;
    age: number;
    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

let li = new UserInfo("张","三", 18)
console.log(sayHi(li))