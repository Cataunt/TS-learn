// 多行字符串
var content = `
aaa 
bbb 
ccc`


// 字符串模板
var myname = "zhang san"
var getName = function () {
    return "zhang u"
}
console.log(`hello ${myname}`)
console.log(`<div>
<span>${myname}</span>
<span>${getName}</span>
</div>`)


// 自动拆分字符串
function test(template: any, name: string, age: number) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "zhai zhang";
var getAge = function () {
    return 18;
}
test`hello my name is ${myname}, i'm ${getAge()}`


// 参数类型(基本类型、函数参数类型、自定义类型)
var myname: string = "zhang san";
var alias: any = "xixi";
alias = 0
var age: number = 12;
var man: boolean = false;
function test2(name: string): string {
    return "";
}
test2("Cataunt");
class Person {
    name: string | undefined;
    age: number | undefined;
}
var zhang: Person = new Person()
zhang.name = "zhangggg";
zhang.age = 16;


// 参数默认值
var my: string = "zhangss"
function yest(a: string, b: string, c: string) {
    console.log(a);
    console.log(b);
    console.log(c);
}
yest("xxx", "yyy", "cccc");
function jest(a: string, b: string, c: string = "jojo") { // 有参数值的声明在后面
    console.log(a);
    console.log(b);
    console.log(c);
}
jest("xxx", "yyy");


// 可选参数(在后面加?)
function pest(a: string, b?: string, c: string = "jojo") { // b为undefined
    console.log(a);
    console.log(b);
    console.log(c);
}
pest("xxx");


// Rest and Spread操作符 (声明可以传递任意数量的方法 )
// function func1(...args: number[]) {
//     args.forEach(function (arg) {
//         console.log(arg)
//     })
// }
// func1(1, 2, 3);
// func1(7, 8, 9 , 10);

// function func1(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// var args= [1,2];
// func1(...args);
// var args2=[7, 8, 9, 10 ]
// func1(...args2);

// generator函数(控制函数的执行过程，手工暂停和恢复代码执行)
// function* doSomething() {
//     console.log("start");

//     yield;

//     console.log("finish");
// }

// var func1 = doSomething();
// func1.next();
// func1.next();

function* getStockPrice(stock: string) {
    while (true) {
        yield Math.random() * 100;
    }
}
var priceGenerator = getStockPrice("IBM");
var limitPrice = 15;
var price = 100;

// while (price > limitPrice) {
//     price = priceGenerator.next().value;
//     console.log(`the generator return ${price}`)
// }

console.log(`buying at ${price}`);


// 析构表达式
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        },
        aaa: "xixi"
    }
}
var { code: codex, price: { price1 } } = getStock(); // 别名
console.log(codex);
console.log(price);

// var arr1 = [1, 2, 3, 4]
// var [, ,number1, number2] = arr1;
// console.log(number1);
// console.log(number2);

// var arr2 = [1, 2, 3, 4]
// function doSomething([number1, number2, ...others]) {
//     console.log(number1);
//     console.log(number2);
//     console.log(others);
// }
// doSomething(arr2);


// 箭头表达式(声明匿名函数，消除传统函数的this指向问题)
var sum = (arg1: number, arg2: number) => {
    arg1 + arg2
}
var myArray = [1, 2, 3, 4];
console.log(myArray.filter(value => value % 2 == 0));

// function getOP (name:string) {
//     this.name = name;

//     setInterval(function() {
//         console.log("name is :" + this.name);
//     })
// }

// var Op = new getOP("IBM");


// for of 循坏
var myArray = [1, 2, 3, 4];
// myArray.desc = "four number";
myArray.forEach(value => console.log(value)); // es5会忽略myArray的desc属性,以及不能break

// for (var n in myArray) { // 键的名字
//     console.log(n);
// }

// for (var n in myArray) { // 键的值
//     console.log(myArray[n]);
// }

// for (var n of myArray) { // 打印出来的是值,可以break
//     if (n>2) break;
//     console.log(n);
// }

for (var n of "four number") { // 打印出来的是值,可以break
    console.log(n);
}


// 类(访问控制符：public-默认, private-内部,protected-内部和子类访问)
class hello {
    // 实例化的时候被调用
    constructor(public name: string) {
    }
    eat() {
        console.log("in eating");
    }
}
var p1 = new hello("spreman"); // 实例化
// p1.name = "potman";
p1.eat();
var p2 = new hello("slik");
// p2.name = "superman";
p2.eat();


// super 调用父类的方法
class Employee extends hello {
    constructor(name: string, code: string) {
        super(name);
        this.code = code;
    }

    code: string | undefined;
    work() {
        super.eat();
        this.doWork();
    }

    private doWork() {
        console.log("i'm working");
    }
}
var e1 = new Employee("name", "1");
e1.work();


// 泛型(参数化的类型，一般用来限制集合的内容)
var workers: Array<hello> = [];
workers[0] = new hello("jjj")


// 接口(interface-建立某种代码约定，使得其它开发者在调用某个方法或者创建新的类时必须遵循接口所定义的代码约定)
interface Iperson {
    name: string;
    age: number;
}

class dell {
    constructor(public config: Iperson) {

    }
}

var q1 = new dell({
    name: "zhangsas",
    age: 890
})

// 所有声明实现的类都需要实现该方法
// interface Animal {
//     eat();
// }

// class Sheep implements Animal {
//     eat() {
//         console.log("grass");
//     }
// }


// 模块(module,规定哪些资源暴露出去供外部使用，哪些只在模块内使用)

// 注解(给工具使用)

// 类型定义文件(在ts里面使用已有的javascript的工具包,文件以*.d.ts结尾)
