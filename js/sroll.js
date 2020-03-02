 var banner = document.getElementById('banner');
 // 获取图片标签,获取
 var img = document.getElementsByClassName('imgWrap')[0];
 var imgs = document.getElementsByTagName('li');
  console.log(imgs);
//获取小圆点
var icons = document.getElementsByClassName('btn-list')[0].getElementsByTagName("div");
// 初始化图片的位置
var left = 0;
let time = null;
index = 0;
img.style.marginLeft = left+"px";
// 设置一个定时器
var timer;
// 自调用
run();
function run(){
    if(time>=4){
       index = 0;
    }
    // 如果位置为整张图片，暂停1秒钟
    // var stop = (left%1920==0)?1000:0;
    changeImg();
    // 计算图片下标
    var m = Math.floor(-left/1920);
    changeIcon(m);
    left -=10; 
    // 使用setTimeout(),每隔10ms
    setTimeout(run,20);
}
function changeImg(){
    img.style.marginLeft = left+"px";
}
// 图片轮播时改变下面圆点颜色
function changeIcon(m){
    for(var i = 0;i<icons.length;i++){
        icons[i].style.backgroundColor = '';
    }
    icons[m].style.backgroundColor = 'red;'
}
