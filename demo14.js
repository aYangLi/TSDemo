"use strict";
var myHusband = {
    sex: '男',
    interest: 'coding',
    maiBaoBao: false,
};
console.log(myHusband);
var mySearch;
mySearch = function (source, subString) {
    var flag = source.search(subString);
    return (flag != -1);
};
console.log(mySearch('高、富、帅、德、瘦', '高'));
