// 获取到想要获得的id元素，
var tabBox = document.getElementById('tabBox')
var tabList = tabBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
// 事件绑定，循环li,给每一个li都绑定点击事件
// 自定义属性解决
for(var i=0;i<navList.length;i++){
    // 在循环给每个li绑定点击事件的时候，我们给每一个li(元素对象)设置一个自定义属性，属性值存储当前li的索引
    navList[i].myIndex = i;
    navList[i].onclick = function(){
        // 我想用的是点击这个LI的索引，但是i不是
        changeTab(this.myIndex);
    }
}
// 封装一个函数实现选项卡切换
// clickIndex 创建函数的时候，不知道要点击谁，所以定义一个入口clickIndex
function changeTab(clickIndex){
    // 先让所有的li和div都没有选中的样式
    for(var i= 0;i<navList.length;i++){
        // 1.className 修改元素的class类的值，先让其清空
        navList[i].className='';
        tabList[i].className='';
    }
    //2.点击的是谁就给谁添加样式类
    navList[clickIndex].className = 'active';
    tabList[clickIndex].className = 'active';
}

