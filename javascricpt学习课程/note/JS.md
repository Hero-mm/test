### JS学习程度决定薪资
- 初 特效            竞争压力大，工资低 2-4k
- 中 特效+交互       外包公司 底薪+提成 6-8k
- 高 webApp开发() 功能 前端专业8-15k
- 全栈方向 前后端
- 专家 原生JS框架    20k ，前端最顶尖
### JS 中DOM操作基本思路
 - 传统基于操作DOM方式实现业务需求
    1.像操作哪个就先获取它
    2.给元素绑定某一个事件
 -  3.在事件触发的时候修改元素的样式等等
 -  dir 可以获取元素的详细信息
        console.dir(box);
### JS .区别getElementByID,getElementsByName,getElementsByTagName
- 1. ID 是一个人的身份证号码，是唯一的。所以通过getElementById获取的是指定的一个人。
- 2. Name 是他的名字，可以重复。所以通过getElementsByName获取名字相同的人集合。
- 3. TagName可看似某类，getElementsByTagName获取相同类的人集合。如获取小孩这类人，getElementsByTagName("小孩")。
- document.getElementsByTagName('*').length;//获取代码总行

### 获取页面当前时间  
几号
- var oDate = new Date();
- alert(oDate.getFullYear);年
- alert(oDate.getMonth()+1);  月
 alert(oDate.getDate);日
### 常用的浏览器内核
- webkit
- gecko
- presto
- trident
### 闭包
- 闭包就是能够读取其他函数内部变量的函数。例如在javascript中，只有函数内部的子函数才能读取局部变量，所以闭包可以理解成定义在一个函数内部的函数。在本质上，闭包是将函数内部和函数外部连接起来的桥梁。
- 可以使用父级函数的数据变量
### 获取文本框内的值
- value 
### 关键字
 + break
 + continue
 + if
 + else
 + for
 + var/let/const/function/class/import/export
 + instance of
 + type of
 + this
 + return
 + switch
 + case
 + do
 + while
 + delete
+  new
 ### 保留字
 + boolean
 + float
 + int
 + double
 + long
 + char
 + debugger

    