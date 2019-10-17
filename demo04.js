"use strict";
function searchXiaoJieJie(age) {
    return '找到了' + age + '岁的小姐姐';
}
var age = 22;
var result = searchXiaoJieJie(age);
console.log(result);
// 有可选参数的函数 ?:
function searchXiaoJie(age, stature) {
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy += stature;
    }
    return yy + '小姐姐';
}
var result01 = searchXiaoJie(18);
console.log(result01);
var result02 = searchXiaoJie(18, '大长腿');
console.log(result02);
// 有默认参数的函数
function searchXiao(age, stature) {
    if (age === void 0) { age = 20; }
    if (stature === void 0) { stature = '水蛇腰'; }
    var yy = '';
    yy = '找到了' + age + '岁';
    if (stature != undefined) {
        yy += stature;
    }
    return yy + '小姐姐';
}
var result03 = searchXiao();
console.log(result03);
// 有剩余参数的函数
function search() {
    var xuQiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuQiu[_i] = arguments[_i];
    }
    var yy = '扎到了';
    for (var i = 0; i < xuQiu.length; i++) {
        yy += xuQiu[i];
        if (i <= xuQiu.length)
            yy += '、';
    }
    return yy + '的小姐姐';
}
var result05 = search('22岁', '瓜子脸', '漂亮');
console.log(result05);
