var age: number = 18;
var stature: number = 180.1;
console.log(age);
console.log(stature);

console.log('-----------');

var aYang: string = 'aYang study';
console.log(aYang);

console.log('-----------');

// boolean : true || false

var b: boolean = true;
var c: boolean = false;

console.log('-----------');

// enum 枚举类型；举例：人：男人，女人，中兴；四季：春，夏，秋，冬；

enum REN {
    nan = '男人',
    nv = '女人',
    yao = '妖',
}

console.log(REN.nan); // 不赋值打印的是索引0，赋值之后打印的是固定值；

// any 类型

console.log('-----------');
var t: any = 10;
t = 'aYang';
t = true;
console.log(t);

// null
console.log('-----------');
