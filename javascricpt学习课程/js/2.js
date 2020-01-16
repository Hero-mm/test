let a = 12;
console.log(a.toString());//=>'12'  字符串形式
// null 和 undefined 禁止调用toString，但是调用结果就是'null','undefined'
// Object.prototype.toString 方法不是转换为字符串的，而是用来转换数据类型的
// 字符串拼接
// 四则运算法中，除了加法之外，其余都是数学计算，只有加法可能出现
// 字符串拼接
console.log('10'+10);//=>'1010'
console.log('10'-10);//=>0
console.log('10px'-10);//=>NaN
let b = 10 + null + true + [] + undefined + 'zhu' + null + [] + 10 + false;
//10 + null >10+0
//10 + true >10+1
//如果 是 [],里面是12,则是'1112'，往后拼接
//11+ [] -> 11+'' >'11' 空数组变为数字，先要经历变为空字符串，遇到字符串
//啥也别想了，直接转换为字符串拼接
console.log(b);
