"use strict";
// 多行字符串
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var content = "\naaa \nbbb \nccc";
// 字符串模板
// var myname = "zhang san"
// var getName = function() {
//     return "zhang u"
// }
// console.log(`hello ${myname}`)
// console.log(`<div>
// <span>${myname}</span>
// <span>${getName}</span>
// </div>`)
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
test(__makeTemplateObject(["hello my name is ", ", i'm ", ""], ["hello my name is ", ", i'm ", ""]), myname, getAge());
