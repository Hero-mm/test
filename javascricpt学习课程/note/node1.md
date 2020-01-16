### VSCODE  基本使用
>1.安装 ：一直下一步，遇见框全选

>2.安装插件
左侧图片菜单栏最后一项中（Extensions），联网按章插件
Chinese 汉化
Beautify 代码格式化（shift+alt+F）
Power Mode 鼠标炫酷效果，（设置》首选项》Power Mode：Enable开启） preferencce》Settings

>3.创建的文件要指定后缀名

>4.File》Prefer》Settings
Auto Save 自动保存
Font Size 字体大小
Word Warp 自动换行 

>5.快捷键
div#box.red   <div id="box" class="red"></div>
div.box>h2+(ul>li*5{$})    
<div class="box">
<h2></h2>
<ul>
<li></li>  .......
</ul>
</div>
！ 回车 直接生成html 骨架，
直接写标签名， enter 直接自动补全，
块注释：shift+alt+A 快捷键
代码格式化：shift+alt+F 
代码收起：ctrl+k+0  （零）
代码展开：ctrl+k+J

6.Markdown 专业记录技术笔记的方式
用简单的符号就可以创造，标题，段落，描述，列表，公式，表格，代码块，流程图

后缀名  .md
### JS 做客户端语言
>按照js的语法，去操作页面中的元素，有时需要操作浏览器里面的一些功能
ECMAScipt/3/5/6...,JS的语法规范（变量，数据类型，操作语句等等）
DOM（document object model）：文档对象模型，提供一些JS 的属性和方法，用来操作页面中的DOM元素
BOM (browser object model):浏览器对象模型，提供一些JS的属性和方法，用来操作浏览器的
### JS中的变量 variable
> 变量：可变的量，在编程语言中，变量就是一个名字，用来存储和代表不同值的东西
```
    //ES3
    var a=12;
    a=13;
    console.log(a);//=>输出的a代表的值就是12

    //ES6
    let b=12;
    b=100;
    输出100

    const c = 1000;
    c = 2000;//=>报错:const创建后的值不允许修改,存储的值不允许修改，可以理解为常量

    //创建函数也相当于创建变量
    function fn(){}
    //创建类相当于创建变量
    class A(){}
    //ES6的模块的导入也可以创建变量
    import B from './B.js';
    //Symbol 创建唯一值
    Symbol C = 100;

    
```
### JS 中的命名规范
 - 以专业英文进行注释，对齐页面。
 - 使用数字，字母，下划线，$, 但是数字不能作为开头，一般用JQ获取的以$开头。
  - let $box; //=> 一般使用JQ获取的一i$开头；
  - 使用驼峰命名开头：首选字母小写，其余每一个有意义的首字母都要大写（命名尽可能语义化明显，使用英文单词）
  ```
  let studentInformation
   ```
### JS 中常用的数据类型
 - 基本数据类型
    + 数字 number
        常规数字和NAN
    + 字符串 string
        所有单引号，双引号，反引号（撇）包起来的都是字符串
    + 布尔 boolean
        true/false
    + 空对象指针 null
    + 未定义 undefined
 - 引用数据类型 object
    + {} 普通对象
    + [] 数组对象
    + 正则对象
    +/^[+-]?(\d|([1-9]\d+))(\.\d)?$/
    + Math 数学函数对象
    + 日期对象
    + ...
    + 函数数据类型 function
