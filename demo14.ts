// 接口
interface Husband {
    sex:string
    interest:string
    maiBaoBao?:Boolean, // 可选参数
}


let  myHusband:Husband = {
    sex:'男',
    interest:'coding',
    maiBaoBao:false,
};

console.log(myHusband);

// 函数接口规范
interface SearchMan {
    (source:string,subString:string):boolean
}

let mySearch:SearchMan;
mySearch = function (source:string, subString:string):boolean {
    let flag = source.search(subString);
    return (flag != -1);
};

console.log(mySearch('高、富、帅、德、瘦','高'));