let person={
    height : '184cm',
    age : 18,
    name : '易烊千玺',
    1 : 100
};
// 获取属性名对应的属性值
// 对象加属性名
 console.log(person.age);
//  对象[属性名] 属性名是数字或者字符串格式的
 console.log(person['height']);
//  如果属性名不存在 默认的属性值是undefined
 console.log(person.sex);
 console.log(person[1]);
//  console.log(preson.1); SyntaxError 语法错误
 let ary = [12,'哈哈',true,12];
 console.log(ary.length);
 console.log(ary['length']);
 console.log(ary[1]);
//  最后一个索引值 ary.length-1
console.log(ary[ary.length-1]);
// 像数组末尾增加内容
ary[ary.length] = 100;
console.log(ary);