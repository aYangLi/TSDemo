function searchXiaoJieJie(age: number): string {
    return '找到了' + age + '岁的小姐姐';
}

var age: number = 22;
var result: string = searchXiaoJieJie(age);

console.log(result);

// 有可选参数的函数 ?:

function searchXiaoJie(age:number,stature?:string):string {
    let yy:string = '';
    yy = '找到了' + age +'岁';
    if (stature != undefined){
        yy+=stature
    }
    return yy+ '小姐姐';
}

var result01:string = searchXiaoJie(18);
console.log(result01);
var result02:string = searchXiaoJie(18, '大长腿');
console.log(result02);

// 有默认参数的函数
function searchXiao(age:number=20,stature:string='水蛇腰'):string {
    let yy:string = '';
    yy = '找到了' + age +'岁';
    if (stature != undefined){
        yy+=stature
    }
    return yy+ '小姐姐';
}

var result03:string = searchXiao();
console.log(result03);

// 有剩余参数的函数
function search(...xuQiu:string[]):string {
    let yy:string = '扎到了';
    for (let i = 0; i< xuQiu.length; i ++){
        yy += xuQiu[i];
        if (i <= xuQiu.length) yy += '、'
    }
    return yy + '的小姐姐';
}

let result05:string = search('22岁','瓜子脸','漂亮');
console.log(result05);