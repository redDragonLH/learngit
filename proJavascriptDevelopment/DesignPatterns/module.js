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
