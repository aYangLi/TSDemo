// 类是对象具体事物的一个抽象 ，对象是类的的具体表现

class XiaoJieJie {
    name:string;
    age:number;
    constructor (name:string, age:number) {
        this.name = name;
        this.age = age;
    }
    say(){
        console.log('好呀呀！！');
    }
}

let jieJie:XiaoJieJie = new XiaoJieJie('刘亦菲', 28);

jieJie.say();
console.log(jieJie);