// 命名空间
namespace shuaiGe{
     export class DeHua {
         public name:string = '刘德华';
         talk () {
             console.log('帅哥刘德华');
         }
     }
}

namespace baJie{
    export class DeHua {
        public name:string = '马德华';
        talk () {
            console.log('八戒马德华');
        }
    }
}

let deHua1:shuaiGe.DeHua = new shuaiGe.DeHua();
let deHua2:baJie.DeHua = new baJie.DeHua();

deHua1.talk();
deHua2.talk();
