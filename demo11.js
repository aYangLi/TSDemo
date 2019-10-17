"use strict";
// 类是对象具体事物的一个抽象 ，对象是类的的具体表现
var XiaoJieJie = /** @class */ (function () {
    function XiaoJieJie(name, age) {
        this.name = name;
        this.age = age;
    }
    XiaoJieJie.prototype.say = function () {
        console.log('好呀呀！！');
    };
    return XiaoJieJie;
}());
var jieJie = new XiaoJieJie('刘亦菲', 28);
jieJie.say();
console.log(jieJie);
