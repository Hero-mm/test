//超链接文字提示动画
$("a.tooltip").mouseover(function(e){
	this.myTitle = this.title;
	this.title = "";//清空原提示信息
	//创建div元素
	var tooltip = "<div id='tooltip'>"+ this.myTitle +"<div>";
	$("#body").append(tooltip); //把它追加到文档中
	$("#tooltip")
	.css({
		"top": (e.pageY+y) + "px",
		"left":(e.pageX+x)  + "px"
	}).show("fast");//设置x坐标和y坐标，并且动画快速显示
})
.mouseout(function(){
	this.title=this.myTitle;//恢复原提示信息
	$("#tooltip").remove();//移除
})
.mousemove(function(e){
	$("#tooltip")
	.css({
		"top": (e.pageY+y) + "px",
		"left":(e.pageX+x)  + "px"
	});
});
