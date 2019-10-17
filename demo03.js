"use strict";
var age = 18;
var stature = 180.1;
console.log(age);
console.log(stature);
console.log('-----------');
var aYang = 'aYang study';
console.log(aYang);
console.log('-----------');
// boolean : true || false
var b = true;
var c = false;
console.log('-----------');
// enum 枚举类型；举例：人：男人，女人，中兴；四季：春，夏，秋，冬；
var REN;
(function (REN) {
    REN["nan"] = "\u7537\u4EBA";
    REN["nv"] = "\u5973\u4EBA";
    REN["yao"] = "\u5996";
})(REN || (REN = {}));
console.log(REN.nan); // 不赋值打印的是索引0，赋值之后打印的是固定值；
// any 类型
console.log('-----------');
var t = 10;
t = 'aYang';
t = true;
