//把相关的属性和方法聚在一个单独的对象直接量内，称之为单例
var element = {
  //创建一个数组，用于储存各个页面元素的引用
  allElement: [],
  //通过元素的ID获取对该元素的引用并保存它
  get: function(id){
    var elem = document.getElementById(id);
    this.allElement.push(elem);
    return elem;
  },
  //根据给定的类型创建一个新元素，并保存它
  create: function(type){
    var elem = document.createElement(type);
    this.allElement.push(elem);
    return elem;
  },
  //返回所有保存的元素
  getAllElements:function(){
    return this.allElement;
  }
},
//获得对ID为header的页面元素的引用并进行保存
header = element.get("header"),
//创建一个新的input元素
input = element.create("input"),
//这里包含着id为 “header” 以及新创建的<input>元素
allElements = element.getAllElements();

//检查所保存的元素个数
console.log(allElements.length);

// 自执行单例函数-----------------------------------------------------------------------------------------------
//初始化代码是通过使用自执行函数闭包实现的，这使得在创建单例模式的时候所执行的代码不是公共性质的，不会被应用程序的其余部分访问

var cookie = (function(){
  //cookie保存在document.cookie字符串中，由分号(;)进行隔离
  var allCookies = document.cookie.split(";"),
      cookies = {},
      cookiesIndex = 0,
      cookiesLength = allCookies.length,
      cookie;
  //循环遍历所有cookie，把它们添加至cookies对象，使用cookie的名称作为属性名称
  for(; cookiesIndex< cookiesLength;cookiesIndex++){
    cookie = allCookies[cookiesIndex].split("=");
    cookies[unescape(cookie[0])] = unescape(cookie[1]);
  }
  //这里返回的方法将可为在本代码清单顶部所定义的全局cookie变量所使用

  return {
    //创建一个函数，以cookie的名称获取其值
    get:function(name){
      return cookies[name] || "";
    },
    set:function(name,value){
      //添加新的cookie至次cookie对象，同时也添加至document.cookie字符串中
      cookie[name] = value;
      document.cookie = escape(name)+ "=" +escape(value);
    }
  };
}());
// 使用通过cookie单例所暴露的set方法来设置一个cookie
cookie.set("name","lh");
// 检查时候已经正确设置
console.log(cookie.get("name"));
