//public 共有修饰符，
//protected 受保护的修饰符
//private 私有的修饰符
class XiaoJie {
    public sex: string;
    protected name: string;
    private age: number;

    public constructor(sex: string, name: string, age: number) {
        this.sex = sex;
        this.name = name;
        this.age = age;
    }

    public sayHello() {
        console.log('hello');
    }

    protected sayLove() {
        console.log('love');
    }
}

let xiaoJie: XiaoJie = new XiaoJie('nv', '冰', 18);
console.log(xiaoJie);
xiaoJie.sayHello();
// xiaoJie.sayLove();

// readonly 只读

class Man {
    public readonly sex:string = '男';
}

let man:Man = new Man();