// 定义一个生成器“类”，用于构建简单地表单元素，此表单元素可以根据终端开发者地需要进行配合i
// 终端开发者将实例化该生成器，并根据应用程序整个运作过程地需要，把各项表单域添加至该表单元素
// 最后，调用一个方法来返回包含着所有添加地表单域地<form>元素
function FormBuilder(){}
FormBuilder.prototype = {
  //定义一个属性，用于保存所创建的各个表单域
  fields: [],

  // 定义一个方法，用于向表单实例添加表单域
  addField: function(type,displayText) {
    var field;
    switch (type){
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
      throw new Error("这是啥type" + type);
    }
    // 把所有创建的表单域对象添加至存储数组中
    this.fields.push(field);
  },

  // 定义一个方法，用于返回所生成的<form>元素，当中包含着使用addField方法所添加的各项表单域
  getForm: function(){
    // 创建一个新的<form>元素
    var form = document.createElement("form"),
        index = 0,
        numField = this.fields.length,
        field;

    // 遍历fields属性中所储存的每项表单域，从每项中取得DOM元素，并将其添至该<form>元素
    for (; index < numField; index++) {
      field = this.fields[index];
      form.appendChild(field.getElement());
    }
    //返回经填充的<form>元素
    return form;
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
