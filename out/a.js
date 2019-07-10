"use strict";
// 多行字符串
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
// 可选参数
