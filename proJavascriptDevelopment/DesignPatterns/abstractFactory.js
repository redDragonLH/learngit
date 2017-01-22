// 抽象工厂模式
function FormFieldFactory(){
  // 定义所支持的表单域类型清单，应用于所有的继承于此类放入表单域工厂类
  this.availableTypes = {
    TEXT:"text",
    EMAIL: "email",
    BUTTON: "button"
  };
}
FormFieldFactory.prototype = {
  // 定义 makeField()方法，它将被各子类利用多态进行重写，所以该方法不应该在此父“类”中直接调用
  // 如果出现这种情况，则抛出一个错误
  makeField: function(){
    throw new Error("this method should not be called directly.")
  }
};
// 定义一个工厂 类 ，继承于基础工厂“类”，用于HTML5表单域的创建
function Html5FormFieldFactory(){
  Html5FormFieldFactory.prototype = new FormFieldFactory();

  // 针对此工厂使用明确的代码来重写makeField()方法
  Html5FormFieldFactory.prototype.makeField = function(options){
    var options = options || {},
        type = options.type || this.availableTypes.TEXT,
        displayText = options.displayText || "",
        field;

    switch (type) {
      case this.availableTypes.TEXT:
        field = new Html5TextField(displayText);
        break;
      case this.availableTypes.EMAIL:
        field = new Html5EmailField(displayText);
        break;
      case this.availableTypes.BUTTON:
        field = new ButtonField(displayText);
        break;
      default:
        throw new Error("Invalid field type specifield:" + type);
    }
    return field;
  };

//定义一个工厂“类”，它继承于相同的基础工厂“类”，用于老式HTML4表单域的创建
function Html4FormFieldFactory(){}
Html4FormFieldFactory.prototype = new FormFieldFactory();

Html4FormFieldFactory.prototype.makeField = function(options){
  var options = options || {},
      type = options.type || this.availableTypes.TEXT,
      displayText = options.displayText || "",
      field;

  switch (type) {
    case this.availableTypes.TEXT:
    case this.availableTypes.EMAIL:
      field = new Html4TextField(displayText);
      break;
    case this.availableTypes.BUTTON:
      field = new ButtonField(displayText);
      break;
    default:
      throw new Error("Invalid field type specifield:" + type);
  }
  return field;
};

//定义各项表单域的“类”，用于创建各种HTML5和HTML4表单元素
  function Html5TextField(displayText){
    this.displayText = displayText || "";
  }
  Html5TextField.prototype.getElement = function(){
    var textField = document.createElement("input");
    textField.setAttribute("type","text");
    textField.setAttribute("placeholder",this.displayText);

    return textField;
  };

  // 因为HTML4不支持placeholder标签特性，作为代替，将创建并返回一个<div>元素，当中包含着文本域和一个相关联的包含着placeholder文本的<lable>
  function Html4TextField(displayText){
    this.displayText = displayText || "";
  }
  Html4TextField.prototype.getElement = function(){
    var wrapper = document.createElement("div"),
        textField = document.createElement("input"),
        textId = "text-field-" + Math.floor(Math.random()*999),
        label = document.createElement("label"),
        labelText = document.createTextNode(this.displayText);

    textField.setAttribute("type","text");
    textField.setAttribute("id",textFieldId);

    label.setAttribute("for",textFieldId);
    label.appendChild(labelText);

    wrapper.appendChild(textField);
    wrapper.appendChild(label);
    return wrapper;
  };
  function Html5EmailField(displayText){
    this.displayText = displayText;
  }
  Html5EmailField.prototype.getElement = function(){
    var emailField = document.createElement("input");
    emailField.setAttribute("type","email");
    emailField.setAttribute("praceholder",this.displayText);
    return emailField;
  };
  // 类型一致
  function ButtonField(displayText){
    this.displayText = displayText;
  }
  ButtonField.prototype.getElement = function(){
    var button = document.createElement("button");
        button.setAttribute("type","submit");
        button.innerHTML = this.displayText;

        return button;
  };
}
