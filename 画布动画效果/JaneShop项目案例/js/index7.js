//品牌活动区特效

/* 品牌活动模块横向滚动 */
$(function(){
    $("#jnBrandTab li a").click(function(){ 
		$(this).parent().addClass("chos").siblings().removeClass("chos");
		var idx = $("#jnBrandTab li a").index(this);
		showBrandList(idx);
		return false;
   }).eq(0).click();
});
//显示不同的模块
function showBrandList(index){
	var $rollobj = $("#jnBrandList");
    var rollWidth = $rollobj.find("li").outerWidth();
	rollWidth = rollWidth * 4; //一个版面的宽度
	$rollobj.stop(true,false).animate({ left : -rollWidth*index},1000);
}
/* 滑过图片出现放大镜效果 */
$(function() {
    $("#jnBrandList li").each(function(index) {
       var $this = $(this);
       var $img = $this.find("img");
       setTimeout(function(){
       	var img_w = $img.width();
       	var img_h = $img.height();
       	var spanHtml = '<span   ' + 'style="position:absolute;top:0;left:5px;width:'+img_w+'px;height:'
       	+img_h+'px;" class="imageMask"></span>';
       	$(spanHtml).appendTo($this);
       },1700);
    });
	$("#jnBrandList").delegate(".imageMask", "mouseenter mouseleave", function(){
		$(this).toggleClass("imageOver");
	});
	
	/*
	$("#jnBrandList").find(".imageMask").live("hover", function(){
		$(this).toggleClass("imageOver");
	});
	*/
})