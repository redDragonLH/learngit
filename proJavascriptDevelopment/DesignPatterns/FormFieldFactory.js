  var FormFieldFactory = {
  //markField方法使用两个选项
  // - type，定义所创建的表单域的类型，例如：text,email,button
  // - displayText 基于对象的类型，定义表单域的placeholder(占位符)文本或按钮所显示的文本
  makeField: function(options){
    var options = options || {},
        type = options.type || "text",
        displayText = options.displayText || "",
        field;
    //基于所提供的类型使用最合适的“类”来创建对象实例
    switch (type) {
      case "text":
          field = new TextField(displayText);
        break;
      case "email":
          field = new EmailField(displayText);
        break;
      case "button":
          field = new ButtonField(displayText);
          break;
      default:
        field = new TextField(displayText);
        break;
    }
    return field;
  }
};
//定义TextField类，用于创建type = "text" 表单元素
function TextField(displayText){
  this.displayText = displayText;
}
// 创建DOM元素
TextField.prototype.getElement = function(){
  var textField = document.createElement("input");
  textField.setAttribute("type","text");
  textField.setAttribute("placeholder",this.displayText);
  return textField;
};
// 定义EmailField类用于创建type = "email" 表单元素
function EmailField(displayText){
  this.displayText = displayText;
}
// 创建DOM元素
EmailField.prototype.getElement = function(){
  var emailField = document.createElement("input");
  emailField.setAttribute("type","email");
  emailField.setAttribute("praceholder",this.displayText);
  return emailField;
};
// 定义ButtonField类，用于创建<button>元素
function ButtonField(displayText){
  this.displayText = displayText;
}
// 创建DOM元素
ButtonField.prototype.getElement = function (){
  var buttonField = document.createElement("button");
  buttonField.setAttribute("type","submit");
  buttonField.innerHTML = this.displayText;
  return buttonField;
};
