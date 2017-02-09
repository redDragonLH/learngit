// 组合模式

// 定义一个单例，当中所包含的方法可以获取页面上各种元素的引用并为这些元素的 class 标签特性增加 class 名称

var elements = {
  // 定义一个方法来按 tag 名称获取各 DOM元素，如果只发现一个元素，则它作为一个单独的节点返回，如果发现多个元素，则返回这些元素所组成的数组
  get: function (tag) {
    var elems = document.getElementsByTagName(tag),
        elemsIndex = 0,
        elemsLength = elems.length,
        output = [];

    // 把所有找到的源深路结构转化为一个标准数组
    for(;elemsIndex < elemsLength; elemsIndex++) {
      output.push(elems[elemsIndex]);
    }

    // 如果只找到一个元素，则返回该独立元素，否则返回所找到的各个元素所组成的数组
    return output.length === 1 ? output[0] : output;
  },

  // 定义一个组合方法，用于为一个或多个元素添加class标签特性 class 名称，无论在执行时有多少各元素被传入都可实现
  addClass: function (elems, newClassName) {
    var elemsIndex = 0,
        elemsLength = elems.length,
        elem;

    // 判断所传入的元素究竟是数组还是单独对象
    if (Object.prototype.toString.call(elems) === "[object Array]") {

      // 如果是数组，循环遍历每一个元素并为每个元素都增加class 标签特性 class 名称
      for (;elemsIndex < elemsLength; elemsIndex++) {
        elem = elems[elemsIndex];
        elem.className += (elem.calssName === "" ? "" : " ") + newClassName;
      }
    } else {
      // 如果传入的是单独 的元素，则为其增加 class 标签特性 class 名称值
      elems.className += (elems.className === "" ? "" : " ") + newClassName;
    }
  }
};

// 使用
var body = elements.get("body");

elements.addClass(body, "test");
