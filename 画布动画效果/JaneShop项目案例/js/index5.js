/* 首页大屏广告效果 */
$(function() {
    var $imgrolls = $("#jnImageroll div a"); //文字区域列表
    $imgrolls.css("opacity", "0.7");
    var len = $imgrolls.length;//轮播图总数
    var index = 0;//当前选中的轮播图下标
    var adTimer = null;//定时器对象
    $imgrolls.mouseover(function() {
        index = $imgrolls.index(this);//获取当前下标
        showImg(index);//图片轮播图业务
    }).eq(0).mouseover();//默认初始化执行第一个标签的鼠标事件
    //滑入 停止动画，滑出开始动画.
    $('#jnImageroll').hover(function() {
        if (adTimer) {
            clearInterval(adTimer);//清除定时器，暂停动画
        }
    }, function() {
    	//设置1秒钟定时器，执行轮播图效果
        adTimer = setInterval(function() {
            showImg(index);
            index++;
            if (index == len) {
                index = 0;
            }
        }, 1000);
    }).trigger("mouseleave");//默认页面初始化就执行鼠标离开事件，创建定时器
});
//显示不同的幻灯片
function showImg(index){
	var $rollobj = $("#jnImageroll");
	//获取文字区域列表
	var $rolllist = $rollobj.find("div a");
	//当前展示文字区域超链接
	var newhref = $rolllist.eq(index).attr("href");
	//替换新的超链接，找到要展示的图片使用淡入显示，其它同辈元素使用淡出隐藏
	$("#JS_imgWrap").attr("href",newhref)
			 .find("img").eq(index).stop(true,true).fadeIn().siblings().fadeOut();
			 //移动文字区域的背景色类名chos，当前展示文字区域添加背景色类名
	$rolllist.removeClass("chos").css("opacity","0.7")
			 .eq(index).addClass("chos").css("opacity","1"); 
}