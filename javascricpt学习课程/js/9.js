/*
求两个数的和，算完和乘以10，除以2...
创建函数的时候，设置了形参变量，但是如果执行的时候并没有给传递对应的实参值，
那么形参变量默认的值时: undefined
想把函数中的内容拿到函数外面可以加return,return 返回的是一个具体的值
*/
// 形参 n,m
function sum(n,m){
    // 形参默认值处理，如果没有传递形参值，给有一个默认值0
    if(n === undefined){
        n = 0;
        // 函数中遇到return ，后面代码不再执行
        return;
    }
    // 第二种比较全方位  typeof 检测值  typeof 返回的值类型时字符串
    if(typeof m === 'undefined'){
        m = 0;
    }
    // console.log(n,m);
    let result=n+m;
    result *= 10;
    result /= 2;
    console.log(result)
}
console.log(sum);
// 实参
sum();   
sum(10);
sum(10,20);
sum(10,20,30);
// 没有写return 函数默认返回值undefined

/* function sum(n,m){
    let result = n+m;
    // return result;
}
let A =sum(10,20);
console.log(A);  //undefined */