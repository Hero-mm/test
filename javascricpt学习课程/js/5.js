let n = [10,20];
let m = n;//m [10,20]
let x = m;//x [10,20]
m[0] = 100;//m [100,20]
x = [30,40];
x[0] = 200;//x[200,40]
m = x;//m[200,300]
m[1] = 300;//m [200,300]
n[2]= 400;//n [10,20,400]
console.log(n,m,x);

// 阿里面试题
let a = {
    n:1
};
let b = a;  //b  n:1
a.x = a = {  //a n:2
    n:2
};
console.log(a.x);
console.log(b);
// a=>{
//     n:2
// }
// b=>{
//     n:1,
//     x:{
//         n:2
//     }
// }
// a.x=undefined
// b.x.n=2
// b.n=1