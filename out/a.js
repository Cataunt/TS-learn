"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// 多行字符串
var content = "\naaa \nbbb \nccc";
// 字符串模板
var myname = "zhang san";
var getName = function () {
    return "zhang u";
};
console.log("hello " + myname);
console.log("<div>\n<span>" + myname + "</span>\n<span>" + getName + "</span>\n</div>");
// 自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "zhai zhang";
var getAge = function () {
    return 18;
};
test(__makeTemplateObject(["hello my name is ", ", i'm ", ""], ["hello my name is ", ", i'm ", ""
    // 参数类型(基本类型、函数参数类型、自定义类型)
]), myname, getAge());
// 参数类型(基本类型、函数参数类型、自定义类型)
var myname = "zhang san";
var alias = "xixi";
alias = 0;
var age = 12;
var man = false;
function test2(name) {
    return "";
}
test2("Cataunt");
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var zhang = new Person();
zhang.name = "zhangggg";
zhang.age = 16;
// 参数默认值
var my = "zhangss";
function yest(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
yest("xxx", "yyy", "cccc");
function jest(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
jest("xxx", "yyy");
// 可选参数(在后面加?)
function pest(a, b, c) {
    if (c === void 0) { c = "jojo"; }
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
function getStockPrice(stock) {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, Math.random() * 100];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
var priceGenerator = getStockPrice("IBM");
var limitPrice = 15;
var price = 100;
// while (price > limitPrice) {
//     price = priceGenerator.next().value;
//     console.log(`the generator return ${price}`)
// }
console.log("buying at " + price);
// 析构表达式
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        },
        aaa: "xixi"
    };
}
var _a = getStock(), codex = _a.code, price1 = _a.price.price1; // 别名
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
var sum = function (arg1, arg2) {
    arg1 + arg2;
};
var myArray = [1, 2, 3, 4];
console.log(myArray.filter(function (value) { return value % 2 == 0; }));
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
myArray.forEach(function (value) { return console.log(value); }); // es5会忽略myArray的desc属性,以及不能break
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
for (var _i = 0, _b = "four number"; _i < _b.length; _i++) { // 打印出来的是值,可以break
    var n = _b[_i];
    console.log(n);
}
// 类(访问控制符：public-默认, private-内部,protected-内部和子类访问)
var hello = /** @class */ (function () {
    // 实例化的时候被调用
    function hello(name) {
        this.name = name;
    }
    hello.prototype.eat = function () {
        console.log("in eating");
    };
    return hello;
}());
var p1 = new hello("spreman"); // 实例化
// p1.name = "potman";
p1.eat();
var p2 = new hello("slik");
// p2.name = "superman";
p2.eat();
// super 调用父类的方法
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, code) {
        var _this = _super.call(this, name) || this;
        _this.code = code;
        return _this;
    }
    Employee.prototype.work = function () {
        _super.prototype.eat.call(this);
        this.doWork();
    };
    Employee.prototype.doWork = function () {
        console.log("i'm working");
    };
    return Employee;
}(hello));
var e1 = new Employee("name", "1");
e1.work();
// 泛型(参数化的类型，一般用来限制集合的内容)
var workers = [];
workers[0] = new hello("jjj");
var dell = /** @class */ (function () {
    function dell(config) {
        this.config = config;
    }
    return dell;
}());
var q1 = new dell({
    name: "zhangsas",
    age: 890
});
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
