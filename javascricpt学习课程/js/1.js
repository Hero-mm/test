// NaN 不是一个数
// 1. console.log('hello world');
// 2.两个 == 号是进行判断的，控制台输出 false
// console.log(1==2);
// 不能和NaN进行判断是否相等，包括和自己都不相等 
console.log(isNaN(parseInt('123px')));
console.log('AA'  == NaN)
// 参数描述占位符 isNaN([val])
// NaN 检测一个值是否为非有效数字，如果不是有效数字返回true，如果不是Number类型，先转换为Number类型，反之为有效数字FLASE
console.log(isNaN(10));//=>FLASE
console.log(isNaN('aa'));//=>TRUE
console.log(isNaN('10'));//==false  //如果不是Number类型，先转换为Number类型
 Number('10') //=> 10;
// 把字符串转换为数字，只要字符串包含任意一个有效数字字符（第一个点除外）结果都是NaN，空字符串会变成数字0
 console.log(Number('12.5'));//=>12.5
 console.log(Number('12.5px'));//=>NaN
 console.log(Number('12.5.5'));//>=NaN
 console.log(Number(''));//>=0   空字符串会变成数字0
 console.log(Number({name:'10'}));//=>NaN
 console.log(Number({}));//=>NaN
 
 console.log(Number([]));//=>0   空字符串会变成数字0
// [].toString() ->  ''    看toString 的结果，结果在Number
 console.log(Number([12]));//=>12
// [].toString() -> '12'
 console.log(Number([12,1]));//=>NaN
//  [].toString() ->'12,1'

//  布尔类型转换为数字
console.log(Number(true));//=>1
console.log(Number(false));//=>0
// 因为不管是1或者0都是有效数字，转换为flase
console.log(isNaN(false));//=>false
console.log(Number(null));//=>0
console.log(Number(undefined));//=>NaN
// 把引用数字类型转化为数字，是先基于toString方法转换为字符串，然后再转换为数字
console.log(Number([12]));//=>12
//[12].toString() ->'12'
let str='12.5px';
let str1 = 'aba';
console.log(Number(str));//=>NaN
console.log(parseInt(str));//=>12
console.log(parseInt(str1));//=>NaN
console.log(parseFloat(str));//>=12.5
console.log(parseFloat(true));//=>NaN
console.log(Number(true));//=>1