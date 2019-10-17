// 函数声明法
function add(n1: number, n2: number): number {
    return n1 + n2;
}

console.log(add(2, 3));

// 函数表达式法
var minus = function (n1: number, n2: number): number {
    return n1 - n2;
};
console.log(minus(3, 1));

// 完全支持 es6，箭头函数；

var except = (n1:number,n2:number):number => {
    return n1/n2;
};

console.log(except(4,1));