/*
* 1.创建循环初始值
* 2.设置（验证）循环执行的条件
* 3.条件成立执行循环体中的内容
* 4.当前循环结束执行步骤累计操作
    i-=2 就是在自己基础上减去2
*/
for (var i = 10;i > 4;i -= 2 ) {
    if(i<7){
        i++;
    }else{
        i--;
    }
}
console.log(i);
// 9-7-6-4

// for(var i=0;i<10;i++){
//     if(i>=2){
//         continue;   遇见continue，下面代码不再执行，如果是break，直接输出最后一行
//     }
//     if(i>=6){
//         break;
//     }
//     i++;
//     console.log(i);
// }
// console.log(i);