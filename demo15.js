"use strict";
// 命名空间
var shuaiGe;
(function (shuaiGe) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = '刘德华';
        }
        DeHua.prototype.talk = function () {
            console.log('帅哥刘德华');
        };
        return DeHua;
    }());
    shuaiGe.DeHua = DeHua;
})(shuaiGe || (shuaiGe = {}));
var baJie;
(function (baJie) {
    var DeHua = /** @class */ (function () {
        function DeHua() {
            this.name = '马德华';
        }
        DeHua.prototype.talk = function () {
            console.log('八戒刘德华');
        };
        return DeHua;
    }());
    baJie.DeHua = DeHua;
})(baJie || (baJie = {}));
var deHua1 = new shuaiGe.DeHua();
var deHua2 = new baJie.DeHua();
deHua1.talk();
deHua2.talk();
