// 多行字符串

var content = `
aaa 
bbb 
ccc`

// 字符串模板

var myname = "zhang san"
var getName = function() {
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
var myname:string ="zhang san";

var alias:any = "xixi";
alias = 0

var age:number = 12;
var man:boolean = false;

function test2(name: string) :string {
    return "";
}

test2("Cataunt")

class Person {
    name: string | undefined;
    age: number | undefined
}

var zhang:Person = new Person ()
zhang.name = "zhangggg";
zhang.age = 16;

// 参数默认值
var my:string = "zhangss"
function yest(a:string, b:string, c:string) {
    console.log(a);
    console.log(b);
    console.log(c);
}

yest("xxx","yyy","cccc")


function jest(a:string, b:string, c:string="jojo") {
    console.log(a);
    console.log(b);
    console.log(c);
}

jest("xxx","yyy")

// 可选参数