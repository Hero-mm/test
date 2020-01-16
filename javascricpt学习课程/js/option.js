var arr  = [1,2,3];
arr.push(4);//数组末尾添加
arr.pop();//删除数组末尾最后一个
arr.shift();//数组头部第一个删除
arr.unshift(5);//数组头部添加一个
var arr = [1,2,3,4,5,6];
// splice(起点,长度)
arr.splice(2,3);//数组    1，2，6
arr.splice(2,0)//数组不变
//插入splice(起点,长度,元素);
arr.splice(2,0,'a','b','c');//1,2,a,b,c,3,4,5,6
arr.splice(2,2,'a','b');//1,2,a,b,5,6
//  concat数组连接
var a = [1,2];
var b = [4,5];
alert(b.concat(a));//4,5,1,2
// join 连接符 
var arr = [1,2,3,4];
alert(arr.join('-'));//1-2-3-4
alert(arrjoin('- -p'));//1--p2--p3--p4
// sort  排序   只识别字符串
var arr = ['float','width','alpha'];
alert(arr.sort);//排序  arr.sort();
// 数字排序
var arr = [1,45,5,32];
arr.sort(function(n1,n2){
    return n1-n2;
    /*
    if(n1<n2){
        return -1;
    }else if(n1>n2){
        return 1;
    }else{
        return 0;
    }
    */
});
alert(arr);