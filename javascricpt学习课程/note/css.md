### Css 知识要点速记
- 输入框换成密码形式的  type="password" 
-  /* 字体阴影显示 */  text-shadow:100px 2px 6px #000;
- 变成圆角             boreder-radius：50%
- 弹性盒子             display:flex;
- 横轴对齐             justify-content ：flex-end
- 上下  0，左侧距离 调  padding： 0  10px
- red,green,blue,a  代表的透明度  0-1
- background:rgba(0,0,0,0.75);
- 透明度             opacity:0.5
### CSS 引入外部文件
- <link rel="stylesheet" type="text/css" href="a.css>
### CSS 类型选择器
- 选择所有元素 *{}
- 选择类型元素 a{}  <a></a>
- 选择类选择元素 .login{} <p class="login"> </p> 
- 根据id选择元素 #id  <p id="id1"> </p>
- 根据属性选择器选择元素 [href]{} <a href="www.baidu.com">JS</a> 
- :选择器动作(鼠标经过进行的变化) a:hover{}   <a>JS</a> 
### Css 知识要点速记
- 输入框换成密码形式的  type="password" 
-  /* 字体阴影显示 */  text-shadow:100px 2px 6px #000;
- 变成圆角             boreder-radius：50%
- 弹性盒子             display:flex;
- 横轴对齐             justify-content ：flex-end
- 上下  0，左侧距离 调  padding： 0  10px
- red,green,blue,a  代表的透明度  0-1
- 居中  margin:0 auto; 上下
### 盒子边框border
设置边框的宽度 border-width;
设置边框颜色 border-color;
设置上边框 border-top;
设置圆角边框  border-radius:50px;
### 背景设置
设置背景重复方式 background-repeat:no-repeat;  显示一次
- background:rgba(0,0,0,0.75);
- 透明度             opacity:0.5
- 插入背景图 background-img:url(图片名字.后缀名);
- 总体宽高要和图片宽高一致;
- background-attachment:fixed/local;  无论页面怎么滚动，该元素都不动（local-- 随页面滚动）
- background-size 设置背景尺寸
### 对齐方式 - 字体之间的间距
- text-align:center;
- text-align:right;
- text-align:left;
- word-spacing:100px;
### 行
- 行缩进 text-indent:50px;
### 字体线
- text-decoration:underline;   下划线
- text-decoration:overline;    上划线
- text-decoration:line-through;中间划线
### 字体变大小写
text-transform:lowercase;
### 字体样式
- font-family:  ;
- font-style:italic;  斜体
- font-style:oblique;  斜体
- font-weight:400px;  字体粗细
- font-weight:bolder; 加粗
- text-shadow:10px 10px red;  字体阴影
- text-shadow:10px 10px 10px red; 水平偏移，垂直偏移，模糊程度，模糊颜色
### CSS使用过渡  （过渡可以保留原有的效果）
- transition-delay: 100ms;  在过渡效果开始前等待 秒
- transition-duration:200ms;
- transition-property:background-color;  背景颜色慢慢变化
- webkit-transition-duration:500ms;  让过渡效果持续 5秒：
- o-transition-duration:500ms;
### CSS使用动画  (动画无法保留到原有动画)
- transition-timing-function: linear; 慢慢过渡
- transition-timing-function：ease;  后来慢，越来越快
- transition-timing-function:ease-in;慢-快
- transition-timing-function:ease-out;快-慢
- transition-timing-function：ease-in-out;慢-快-慢
- animation-duration:500ms;   属性定义动画完成一个周期所需要的时间
- animation-delay:200ms;  等待，然后开始动画
- animation-name:坤坤;
- animation-iteration-count:infinite;  无限重复
- animation-direction:alternate;   第一次运动正-反...
### CSS使用2D变换
- rotate 角度 正数是45deg，顺时针  -就是逆时针
- transform:rotate(45deg); 
- transform:rotate(-45deg);
- 放大镜效果 transform: scale(1.5);
- 只想改变X轴 transform: scaleX(5);
- 旋转 下-右 transform-origin:bottom right;
- transform-origin:20px 40px;     
### CSS使用3D变换
- rotateX()
- rotateY()     
### CSS定位
- 改变元素在页面上的位置
- z-index  设置元素的堆叠顺序
- static
- relative
- fixed  不管页面怎么滚动，根据当前页面不再变化
- absolute
- 默认static static表示没有定位，或者说不算具有定位属性。
- 如果元素 position 属性值为 static（或者未设 position 属性），该元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。
- 相对定位relative 占据空间，相对于自身原有位置进行偏移，可能会覆盖其他元素。top: 20px;// 向下移动20px
- 绝对定位absolute，不占空间，相对于最近的已定位的祖先元素, 有已定位(指position不是static的元素)祖先元素, 以最近的祖先元素为参考标准。如果无已定位祖先元素, 以body元素为偏移参照基准，父元素一般设置为相对定位
- 固定定位fixed
不占空间，相对于视窗来定位,这意味着即便页面滚动，它还是会停留在相同的位置。一个固定定位元素不会保留它原本在页面应有的空隙。





