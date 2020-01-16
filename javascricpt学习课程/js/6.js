/* 基于typeof 检测出来的结果
1.首先是一个字符串
2.字符串包含对应的类型
*/
console.log(typeof ('1'));// 'String'
console.log(typeof 1); //'Number'
console.log(typeof NaN); //'Number'
/*typeof局限性
1.typeof null => "object" 但是null 不是对象
基于typeof 无法细分出当前值是普通对象还是数组对象等，只要是对象数据类型，
返回的都是"object"
*/
console.log(typeof null); //>= "object"
console.log(typeof undefined); // 'undefined'
console.log(typeof Boolean);
console.log(typeof true);// 'boolean'
console.log(typeof '100');

let a =NaN;
console.log(typeof a); //=》number
// typeof 检测的结果都是字符串，所以只要两个以上同时检测，最终结果必然是"string""
console.log(typeof typeof typeof[]);  //=>String
// typeof[]=>"object"
// typeof "object" =>"string"
// 老王，有一天下班回家，媳妇打电话说，老王，你下班回家后回来给我买两个馒头。
// 今天天气比较热，如果遇到卖西瓜的你买一个，
// 老王，有一天下班回家，拿个一个馒头，老婆问，不是让你买两个吗，老王说：
// 我遇到了卖西瓜的啊。
