"use strict";
//public 共有修饰符，
//protected 受保护的修饰符
//private 私有的修饰符
var XiaoJie = /** @class */ (function () {
    function XiaoJie(sex, name, age) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }
    XiaoJie.prototype.sayHello = function () {
        console.log('hello');
    };
    XiaoJie.prototype.sayLove = function () {
        console.log('love');
    };
    return XiaoJie;
}());
var xiaoJie = new XiaoJie('nv', '冰', 18);
console.log(xiaoJie);
xiaoJie.sayHello();
// xiaoJie.sayLove();
// readonly 只读
var Man = /** @class */ (function () {
    function Man() {
        this.sex = '男';
    }
    return Man;
}());
var man = new Man();
