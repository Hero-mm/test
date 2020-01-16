// 定时器的使用
/*
开启定时器 setInterval
延时性      setTimeout

function show(){
    alert('a');
}
setInterval(show,1000);//每隔1000ms执行这个函数
setTimeout(show,1000);//只执行一次
clearTimeout(show,);
*/
window.onload = function(){
    var oBtn1 = document.getElementById('btn1');
    var oBtn2 = document.getElementById('btn2');
    var timer = null;
    oBtn1.onclick = function(){
        timer = setInterval(function(){
            alert('我又出来了');
        },5000);
    };
    oBtn2.onclick = function(){
        clearInterval(timer);
    };
};

