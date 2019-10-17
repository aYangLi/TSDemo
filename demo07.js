"use strict";
var jsYang = {
    name: '阿阳',
    website: 'yculcy.cn',
    age: 27,
    saySomething: function () {
        console.log('学习');
    }
};
console.log(jsYang.name);
jsYang.saySomething();
// 数组 --- array String Date RegExp
var arr1;
var arr2;
// 赋值：字面量赋值，
var arr3 = [];
var arr4 = [1, 2, 3, 4];
var arr5 = ['aYang', 'xueXi'];
// 构造函数赋值
var arr6 = new Array();
var arr7 = new Array(1, 2, 3, 4);
var arr8 = new Array('aYang');
// 元祖
var x;
x = ['hello', 1];
