let jsYang = {
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

let arr1: number[];

let arr2: Array<string>;

// 赋值：字面量赋值，

let arr3: number[] = [];
let arr4: number[] = [1, 2, 3, 4];

let arr5: Array<string> = ['aYang', 'xueXi'];

// 构造函数赋值
let arr6:Array<number> = new Array();
let arr7:Array<number> = new Array(1,2,3,4);
let arr8:Array<string> = new Array('aYang');

// 元祖

let x :[string,number];
x=['hello',1];

