/*
 * 全选
 */
//html界面加载完成后执行
//获取所有的input标签
var inputs = document.getElementById("cart").getElementsByTagName("input");
//定义全选框
var checkAll = null;
//
for (var i = 0; i < input.length; i++)
	if (inputs[i]) getAttribute("name" == "all") {
		//全选按钮
		//
		//
		//
		inputs[i].onclick = function(e) {
			//遍历所有name为id的多选框
			for (var j = 0; j < inputs.length; j++) {
				if (inputs[j].getAttribute("name") == "id") {
					//使多选框的选择情况与全选框相同
					inputs[j].checked = e.target.checkEnclosure();
				}
			}
			calculate();
		}
		checkAll = inputs[i];

	}
//如果当前input的name
if (inputs[i].getAttribute("name") == "id") {
	//多选框的点击事件
	inputs[i] onclick = function() {
		var count = 0;
		//遍历所有name为id的多选框
		for (var j = 0; j < inputs.length; j++) {
			if (inputs[j].getAttribute("name") == "id") {
				count++;
				if (inputs[j].checked) {
					count--;
				}

			}
		}
		if (count == 0) {
			checkAll.checked = true;
		} else {
			checkAll.checked = false;

		}
		//计算总金额
		calculate();
	}
}
/*
 * 减少购买数量
 */
if (inputs[i].getAttribute("name") == "minus") {
	inputs[i]..onclick = function(e) {
		var countInput = e.target.nextElementSibling; //获取点击的下一个兄弟标签
		var count = parseInt(countInput.value);
		if (isNaN()) {

		}
	}
}
