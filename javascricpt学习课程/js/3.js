// 只有0，NaN,'',null,undefined 五个值转换为flase,
// 其余都转换为true，没有任何特殊情况
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean([]));
console.log(Boolean([12]));
console.log(Boolean([-1]));
// ! : 取反，（先转换为布尔，然后取反）
// ！！取反再取反，相当于转换为boolean 《=》 Boolean
console.log(!1);//=false
console.log(!!1);//true   相当于Boolean
//如果条件只是一个值，不是==/==/！=/>= 等这些比较，是要把这个值先转换为
//布尔类型，然后验证真假
if(1){
    console.log('哈哈');
}
if('2px' + 3) {
    //=> '2px3'
    console.log('呵呵');
}
if('3px' - 30){
    //=>NaN-3 > NaN
    console.log('嘿嘿');
}