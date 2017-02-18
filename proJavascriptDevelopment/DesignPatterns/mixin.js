// 掺和模式

// 定义一个mixin，可以借助它来实现调试日志记录，可将其应用至任何对象或“类”
var loggingMixin = {
  // 声明一个存储数组，用于存放各条日志记录
  logs: [],

  // 定义一个方法，用于存储消息到日志中
  log: function(message) {
    this.logs.push(message);
  },

  // 定义一个方法，用于读取所存储的日志
  readLog: function() {
    return this.logs.join('\n');
  },
  element,
  header,
  textField,
  emailField;

  // 定义一个函数，用于将一个对象中的方法喝属性应用到另一个对象中，
  // 将使用该函数来应用mixin至其他对象
  function extenObj(obj1,obj2) {
    var obj2key;
    for(obj2key in obj2) {
      if (obj2.hasOwnProperty(obj2key)) {
        obj1[obj2key] = obj2[obj2key];
      }
    }
    return obj1;
  }
  // 定义一个单例，我们将应用该mixin 于其上
  element = {
    allElement: [],
    create: function(type){
      var elem = document.createElement(type);
      this.allElement.push(elem);

      // 使用该mixin的log()方法，确保该方法存在才调用它，如果mixin尚未应用，该方法仍将正常运作
      if (typeof this.log === "function") {
        this.log("create an element of type: " + type);
      }
      return elem;
    },
    getAllElement: function() {
      return this.allElement;
    }
  }
};
