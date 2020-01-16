//获得选择框数组
		function getCheckArray(){
			var inputArray = document.getElementsByClassName("xuanzhe");
			var checkarray = new Array();
			for(var i = 0;i < inputArray.length;i++){
				if(inputArray[i].type == "checkbox"){
					checkarray.push(inputArray[i]);
				}
			}
			return checkarray;
		}
		//获得文本框数组
		function getTextArray(){
			var inputArray = document.getElementsByTagName("input");
			var textarray = new Array();
			for(var i = 0;i < inputArray.length;i++){
				if(inputArray[i].type == "text"){
					textarray.push(inputArray[i]);
				}
			}
			return textarray;
		}
		//设置选择框
		function setCheck(thischeck){
			var checkarray = getCheckArray();
			//是否为全选
			if(thischeck.id == "checkbox_all"){
				//是全选
				if(checkbox_all.checked == true){
					//设置全选
					for(var i = 0;i < checkarray.length;i++){
						//设置为选中
						checkarray[i].checked = "checked";
					}
				}
				if(checkbox_all.checked == false){
					//取消全选
					for(var i = 0;i < checkarray.length;i++){
						//设置为选中
						checkarray[i].checked = "";
					}
				}
			}else{
				//不是全选
				var yixuan = 0;
				//循环查询选中的,不循环最后一个全选
				for(var i = 0;i < checkarray.length - 1;i++){
					if (checkarray[i].checked == true) {
						//如果被选中了,已选就+1
						yixuan = yixuan + 1;
					}
				}
				//已经没有商品了
				if(checkarray.length-1 == 0){
					checkarray[checkarray.length-1].checked = "";
					return;
				}
				//如果已选择的等于所有-1
				if(yixuan == checkarray.length - 1){
					//把全选勾上
					checkarray[checkarray.length-1].checked = "checked";
				}else{
					//把全选取消
					checkarray[checkarray.length-1].checked = "";
				}
			}
			setZongJia();
		}
		//减
		function sub(thisbt){
			var input = thisbt.nextSibling;  //这个是#text
			var input = input.nextSibling;  //这个是输入框
			//如果不是数字就转为数字
			if(isNaN(input.value)){
				input.value = parseInt(input.value);
			}
			//如果大于1就-1
			if(input.value > 1){
				input.value = parseInt(input.value) - 1;
			}
			setZongJia();
		}
		
		//加
		function add(thisbt){
			var input = thisbt.previousSibling;  //这个是#text
			var input = input.previousSibling;  //这个是输入框
			//如果不是数字就转为数字
			if(isNaN(input.value)){
				input.value = parseInt(input.value);
			}
			//+1
			input.value = parseInt(input.value) + 1;
			setZongJia();
		}
		//更改价格显示
		function setZongJia(){
			var textarray = getTextArray();
			var allzongjia = document.getElementById("zongjia_all");  //全部总价标签
			var zongjiaNum = 0;  //总价数
			for (var i = 0;i < textarray.length;i++) {
				var shangpintr = textarray[i].parentNode.parentNode;  //tr
				
				var xuanzhe = shangpintr.firstChild.nextSibling;  //选择td
				xuanzhe = xuanzhe.firstChild.nextSibling;  //选择框标签
				//console.log(xuanzhe);
				var danjia = shangpintr.firstChild.nextSibling;  //选择td
				danjia = danjia.nextSibling.nextSibling;  //商品td
				danjia = danjia.nextSibling.nextSibling;  //单价td
				danjia = danjia.lastChild.previousSibling;  //单价标签
				//console.log(danjia);
				var zongjia = shangpintr.lastChild.previousSibling;  //总价td
				zongjia = zongjia.lastChild.previousSibling;  //总价标签
				//console.log(zongjia);
				
				//更改商品总价显示
				zongjia.innerHTML = parseInt(textarray[i].value) * parseFloat(danjia.innerHTML);
				//如果被选中,总价数加上本商品
				if(xuanzhe.checked == true){
					zongjiaNum = zongjiaNum + parseFloat(zongjia.innerHTML);
				}
			}
			//更改全部总价显示
			allzongjia.innerHTML = parseInt(zongjiaNum);
		}
		//只留整数
		function outInt(text){
			text = text.replace(/^(0+)|[^\d]+/g,'')
			if(isNaN(parseInt(text))){
				return 1;
			}else{
				return text;
			}
		}
		//删除
		function deleteShangpin(){
			var textarray = getTextArray();
			var deleteArray = new Array();
			for (var i = 0;i < textarray.length;i++) {
				var shangpintr = textarray[i].parentNode.parentNode;  //tr
				
				var xuanzhe = shangpintr.firstChild.nextSibling;  //选择td
				xuanzhe = xuanzhe.firstChild.nextSibling;  //选择框标签
				//console.log(xuanzhe);
				//如果被选中,就添加到删除数组中
				if(xuanzhe.checked == true){
					shangpintr.innerHTML = "";
				}
			}
			setZongJia();
			setCheck(this);
		}