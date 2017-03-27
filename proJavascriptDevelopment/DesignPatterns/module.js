// 模块模式

// 综合使用了自执行的匿名函数闭包，作为参数传入的依赖，以及一个可选的return语句，此语句可使得再闭包中编写的代码能够在外部进行访问

// 唯一一个依赖是 document 对象，在它当中包含有浏览器的cookie数据。作为一项附加的安全措施，我们可以使用一个名为 undefined的末位参数，不会向其中传入值

var cookie = (function(document, undefined) {
  var allCookies = document.cookie.split(";"),
      cookie = {},
      cookieIndex = 0,
      cookieLength = allCookies.length,
      cookie;

  for(;cookieIndex < cookieLength; cookieIndex++) {
    cookie = allCookies[cookieIndex].split("=");
    cookie[unescape(cookie[0])] = unescape(cookie[1]);
  }

  // 返回方法，属性或值
  return {
    get:function(name) {
      return cookies[name] || "";
    },
    set: function(name,value) {
      cookies[name] = value;
      document.cookie = escape(name) + "=" + escape(value);
    }
  };
}(document));

// 使用模块模式增加命名空间
// 定义一个命名空间，把一些代码模块放入命名空间
var myData = {};

// 这是一个AJAX模块，通过添加的方式将其加入到 myData 命名空间
// 命名空间是作为参数传入的，一旦该命名空间被加入新的方法，最后就返回此命名空间，使用此新的、
// 增加了新内容的命名空间重写原来的方法
maData = (function(myNmaespace,undefined){
  // 往命名空间加入一个ajax 对象，并使用相关方法充实该属性
  myNmaespace.ajax = {
    get: function(url, callback) {
      var xhr = new XMLHttpRequest(),
          STATE_LOADED = 4,
          STATUS_OK = 200;
      xhr.onreadystatechange = function(){
        if (xhr.readyState !== STATE_LOADED) {
          return;
        }
        if(xhr.status === STATUS_OK) {
          callback(xhr.responseText);
        }
      };
      xhr.open("GET",url);
      xhr.send();
    }
  };
  // 返回该新的，增加了新内容的命名空间至 myData 变量
  return myNmaespace;
  // 可以使用保障机制，如果该myData命名空间对象尚不存在，则使用一个空对象。当你载一个大的 命名空间
  // 下使用分散在多个文件下的多个模块，而且你又不确定所转入的命名空间是否在之前的其他地方已经被
  // 初始化过时，这种方法很有帮助
}(myData || {}));

// 这是 cookies 模块，我们通过添加放入方式将其加入到 myData 命名空间和之前一样，
// 把命名空间传进来,增加内容,然后返回,重写原来的命名空间对象.
// 此时,myData 命名空间已经包含了 Ajax 代码

myData = (function(myNmaespace, undefined){
  // 往命名空间加入一个 cookies 对象属性，并使用相关方法充实该属性
  myNmaespace.cookie = {
    get: function (name) {
      var output = "",
          escapedName = escape(name),
          start = document.cookie.indexOf(escapedName + "="),
          end = document.cookie.indexOf(";", start);

      end = end === -1 ? (document.cookie.length - 1) : end;

      if(start >= 0) {
        output = document.cookie.substring(start + escapedName.length + 1,end);
      }
      return unescape(output);
    },
    set: function(name, value) {
      document.cookie = escape(name) + "=" + escape(value);
    }
  };
  return myNmaespace;
}(myData || {}));
