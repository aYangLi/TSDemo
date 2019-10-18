"use strict";
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
var AYangLi = /** @class */ (function () {
    function AYangLi(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    AYangLi.prototype.interest = function () {
        console.log('找小姐姐');
    };
    return AYangLi;
}());
var aYangLi = new AYangLi('a阳', 28, 'coding');
aYangLi.interest();
var AYangOne = /** @class */ (function (_super) {
    __extends(AYangOne, _super);
    function AYangOne() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xingXiang = '帅气';
        return _this;
    }
    AYangOne.prototype.interest = function () {
        _super.prototype.interest.call(this);
        console.log('建立电商平台');
    };
    AYangOne.prototype.zhuanQian = function () {
        console.log('一天赚了一个亿');
    };
    return AYangOne;
}(AYangLi));
var shuai = new AYangOne('小阳', 18, 'play');
console.log(shuai);
shuai.zhuanQian();
shuai.interest();
