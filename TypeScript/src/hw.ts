/**
 * ts 中一旦使用注解修饰变量或函数，就要严格遵守注解类型，不然就会编译报错
 * 但是报错不会影响js的正常编译
 * 
 */
// function showName(name: string): string {
//     return "hello " + name;
// }
// console.log(showName("张三"));

// interface Person {
//     firstName: string;
//     lastName: string;
//     age: number;
// }

// function sayHi(p: UserInfo) {
//     return "hello " + p.firstName + " " + p.lastName + ";" + " age is " + p.age;
// }

// let li = {
//     firstName: "张",
//     lastName: "三",
//     age = 20
// }

// class UserInfo{
//     firstName: string;
//     lastName: string;
//     age: number;
//     constructor(firstName: string, lastName: string, age: number){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

// let li = new UserInfo("张","三", 18)
// console.log(sayHi(li))

// let isDone: boolean = false;
// let num: number = 123; 
// let str: string = "hello";

//undefined、null
// let u: undefined = undefined;
// let n: null = null;

// TS中let关键字允许先定义变量然后再赋值；const关键字定义变量时必须赋值，否则报错
// let str1: string = null;
// let num1: number = undefined;
// let str2: string
// console.log(str1, num1, str2);

// 数组：元素类型必须与定义类型一致，否则报错
// let arr: number[] = [1, 2, 3];
// let arr1: Array<number> = [1, 2, 3, 4];
// console.log(arr, arr1);

// 元组：元素类型不必相同，但需要已知各个位置元素的类型
// 已知位数、类型的数组，类型可以不一致
// let tuple: [number, string, boolean] = [1, "hello", true];
// console.log(tuple)

// // any
// let notSure: any[] = [];
// notSure[0] = true;
// notSure[1] = "hello";
// notSure[2] = 100;
// notSure[3] = ["a", "b"];
// console.log(notSure);

// let txt;  // 默认any类型
// txt = "hello";
// txt = 100;
// txt = false;
// console.log(txt);

// let txt = 'abc'; //自动推断类型
// txt = 123; // 提示类型分配报错

// 数据字典
// let gender = {
//     male:1,
//     female:2
// }

// 枚举 JS标准数据类型的补充
// enum Color {Red, Green, Blue};
// let c: Color = Color.Green;
// console.log(Color);
// console.log(c);

// void 类型 表示没有任何类型，一般用于声明函数类型的返回值

// object
// function func(obj: object){
//     console.log(obj);
// }
// func({a:1, b:2});
// func(new String(10));

// let arr: (string | number)[] = [1, 2, 3, "4"]
// function func1(x: string | number){
//     console.log(x.toString());
// }
// func1(123)
// func1("SADSA")

// ES5写法
// function func2(x: string | number){
//     // 返回参数的长度
//     if (typeof x === "string"){
//         return x.length;
//     } else{
//         return x.toString().length;
//     }
// }

// TS断言写法
// function func2(x: string | number){
//     // 返回参数的长度
//     if ((<string>x).length){
//         return (x as string).length;
//     } else{
//         return x.toString().length;
//     }
// }

// console.log(func2("asjasda"));

//TS 接口

// interface Person {
//     readonly id: number;
//     name: string;
//     age: number;
//     gender?: string;
//     // 接口中定义函数需要三个条件（函数名、参数、返回值类型）
//     sayHi(name: string): string;
// }

// // 通过接口注解变量则必须满足数量与类型一致，可通过设置使其数量不一致
// // 可通过设置问号?使当前属性变为可选
// // readonly 设置属于只读
// let zs: Person = {
//     id: 1,
//     name: "zs",
//     age: 18,
//     sayHi() {
//         return `Hi, ${this.name}`;
//     }
// };

// // 类实现接口
// class PersonClass implements Person {
//     id: number;
//     name: string;
//     age: number;
//     gender: string;
//     constructor(id: number, name: string, age: number, gender: string) {
//         this.id = id;
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
//     sayHi(): string {
//         return `Hi, ${this.name}`;
//     }
// }

// let zs2: PersonClass = new PersonClass(1, "zhangsan", 18, "male");

// console.log(zs2);
// console.log(zs.sayHi("zs"));

// 接口-类类型

// interface Alarm {
//     alert(): any;
// }

// interface Light {
//     switchOn(): any;
//     switchOff(): any;
// }

// class Car implements Alarm, Light {
//     alert() {
//         console.log("Car alert");
//     }
//     switchOn() {
//         console.log("Car switch on");
//     }
//     switchOff() {
//         console.log("Car switch off");
//     }
// }
// let car = new Car();
// car.alert();
// car.switchOn();
// car.switchOff();

// 接口的继承,将多个接口的属性和方法合并到一个接口
// interface LightAndAlarm extends Alarm, Light {}

// 需求： 定义person，姓名属性，sayHi方法，定义student继承person，并重写sayHi方法
// class Person {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(`Hi, ${this.name}`);
//     }
// }

// class Student extends Person {
//     age:number;
//     constructor(name: string, age: number) {
//         super(name); // 用来触发父级的构造函数
//         this.age = age
//     }
//     sayHi() {
//         // 在子类中可以直接访问父级属性
//         // 在子类中可通过super关键字调用父级方法
//         super.sayHi();
//         console.log(`Hi, ${this.name}, I'm a student, age is ${this.age}`);
//     }
// }

// let zs = new Student("zhangsan", 21);
// zs.sayHi();

// 需求：定义Animal类，具有name属性，与run方法，分别定义dog、cat继承Animal类，并重写父类的run方法
// class Animal {
//     name: string;
//     constructor(name: string) {
//         this.name = name;
//     }
//     run() {
//         console.log(`${this.name} is running`);
//     }
// }
// class Dog extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     run() {
//         // super.run();
//         console.log(`${this.name} is running with four legs`);
//     }
// }
// class Cat extends Animal {
//     constructor(name: string) {
//         super(name);
//     }
//     run() {
//         // super.run();
//         console.log(`${this.name} is running with four legs`);
//     }
// }
// let dog = new Dog("dog");
// dog.run();
// let cat = new Cat("cat");
// cat.run();

// 成员修饰符 public private protected readonly
// readonly 修饰的变量只能通过赋初值或者构造函数内部进行修改，否则会报错

// 抽象类作为其他派生类的基础，不能被实例化
// 抽象类，只有在抽象类里里面才能定义抽象方法和抽象属性
// abstract class Animal {
//     // 抽象方法
//     abstract eat(): any;
//     // 实例方法
//     run() {
//         console.log("runing in Animal class");
//     }
// }

// class Dog extends Animal {
//     // 实现抽象方法
//     eat() {
//         console.log("eating meat in Dog class");
//     }
//     // 实例方法
//     bark() {
//         console.log("barking in Dog class");
//     }
// }
// let dog = new Dog();
// dog.eat();
// dog.run();
// dog.bark();