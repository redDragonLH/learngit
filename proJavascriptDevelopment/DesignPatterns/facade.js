// 外观模式
//    简化 AJAX 调用


// 定义一个函数，作为 facade  来简化和帮助实现跨浏览器的 AJAX 调用，所支持的浏览器可回溯至 IE5
function ajaxCall(type, url, callback, data) {
  // 根据现代浏览器获取对 Ajax 连接对象的调用
  var xhr = (function() {
    try{
      // 所有现代浏览器所使用的标准方法
      return new XMLHttpRequest();
    } catch (e) {}
    // 较老版本的  IE使用用户机器上安装的一个 ActiveX 对象
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.6.0");
    } catch (e) {}
    try {
      return new ActiveXObject("Msxml2.XMLHTTP.3.0");
    } catch (e) {}
    try {
      return new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}

    // 如果没有找到相关的Ajax连接对象，则抛出一个错误
    throw new Error("Ajax not supported in this browser");
  }()),
  STATE_LOADED = 4,
  STATUS_OK = 200;

  // 一旦从服务器收到表示成功的相应信息，则执行所给定的回调方法
  xhr.onreadystatechange = function() {
    if(xhr.readyState !== STATE_LOADED) {
      return;
    }
    if(xhr.status === STATUS_OK) {
      callback(xhr.responseText);
    }
  };
  // 使用浏览器的 Ajax 连接对象来向给定的URL发出相关的调用
  xhr.open(type.toUpperCase(), url);
  xhr.send(data);
}
