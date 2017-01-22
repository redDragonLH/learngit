
(function(window){
  //使用prototype关键字实现原型模式
  var textField,
      emailField;
  //定义一个Field “类”，用于创建<input>元素
  function Field(type,displayText){
    this.type = type || "";
    this.displayText = displayText || "";
  }
  //使用prototype属性来实现原型模式，所定义的方法将会应用于所有继承于此类的对象
  Field.prototype = {
    getElement: function(){
      var field = document.createElement("input");
      field.setAttribute("type",this.type);
      field.setAttribute("placeholder",this.displayText);

      return field;
    }

  };
  //创建2个对象实例，，二者都从prototype中获得getElement方法
  textField = new Field("text","...");
  emailField = new Field("email","@@");

  window.addEventListener("load",function(){
    var bodyElement = document.body;
    bodyElement.appendChild(textField.getElement());
    bodyElement.appendChild(emailField.getElement());
  });
})(window);
// -------------使用ES5实现原型模式----------------------------------------------------------------------
(function(){
  //定义一个基础对象,该对象有两个属性，type和displayText,还有一个getElement()方法，此方法将创建一个HTML<input>元素，使用上述两个属性对此元素进行设置
  var field = {
    type: '',
    displayText: '',

    getElement: function () {
      var field = document.createElement("input");
      field.setAttribute("type",this.type);
      field.setAttribute("placeholder",this.displayText);

      return field;
    }
  },
//基于基础对象创建一个新的对象，使用ES5的 Object.create()方法来克隆原始对象，并为type和displayText这两个属性赋值，，这是为了
  textField = Objectcreate(field,{
    //Object.create()的第二个参数可以使用第一章描述的格式来改写第一个参数中的值
    'type': {
        value: "text",
        enumerable: true
    },
    "displayText": {
      value: "Enter the first line of your address",
      enumerable: true
    }
  }),
  emailField = Object.create(field,{
    'type': {
      value: 'email',
      enumerable: true
    },
    'displayText': {
      value: "Enter the first line of your address",
      enumerable: true
    }
  });
  window.addEventListener("load",function(){
    var bodyElement = document.body;
    bodyElement.appendChild(textField.getElement());
    bodyElement.appendChild(emailField.getElement());
  });
})(window);
