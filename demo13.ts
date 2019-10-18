class AYangLi {
    public name:string
    public age:number
    public skill:string
    constructor(name:string,age:number,skill:string){
        this.name = name;
        this.age = age;
        this.skill  = skill;
    }
    public interest () {
        console.log('找小姐姐');
    }
}

let aYangLi:AYangLi = new AYangLi('a阳',28, 'coding');

aYangLi.interest();

class AYangOne extends AYangLi{
    public xingXiang:string = '帅气';
    public interest() {
        super.interest();
        console.log('建立电商平台');
    }

    public zhuanQian () {
        console.log('一天赚了一个亿');
    }
}

let shuai:AYangOne = new AYangOne('小阳',18,'play');
console.log(shuai);
shuai.zhuanQian();
shuai.interest();