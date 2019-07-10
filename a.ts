// 多行字符串

var content = `
aaa 
bbb 
ccc`

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