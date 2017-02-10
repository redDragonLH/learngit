// 装饰模式

// 定义一个类，用于构建一个对象来表示一个简单的表单域
var FormField = function(type, displayText) {

  // 使用构建函数的输入参数来确定该表单域的类型，默认为一个简单的文本域以及它的 placeholder 文本
  this.type = type || "text";
  this.displayText = displayText || "";
};

FormField.prototype = {
  createElement: function () {
    this.element = document.createElement("input");
    this.element.setAttribute("type", this.type);
    this.element.setAttribute("placeholder", this.displayText);
    return this.element;
  },
  isValid: function() {
    return this.element.value !== "";
  }
};

// 表单域装饰者，它实现了与 FormField 相同的公共方法
var FormFieldDecorator = function(formField) {
  this.formField = formField;
};
FormFieldDecorator.prototype = {
  createElement: function () {
    this.formField.createElement();
  },
  isValid: function () {
    return this.formField.isValid();
  }
};

var MaxLengthFieldDecorator = function(formField,maxLength) {
  FormFieldDecorator.call(this, formField);
  this.maxLength = maxLength || 100;
};
MaxLengthFieldDecorator.prototype = new FormFieldDecorator();
MaxLengthFieldDecorator.prototype.createElement = function () {
  var element = this.formField.createElement();
  element.setAttribute("maxLength",this.maxLength);
  return element;
};

var AutoCompleteFieldDecorator = function(formField,autocomplete) {
  FormFieldDecorator.call(this, formField);
  this.autocomplete = autocomplete || 'no';
};
AutoCompleteFieldDecorator.prototype = new FormFieldDecorator();
AutoCompleteFieldDecorator.prototype.createElement = function () {
  var element = this.formField.createElement();
  element.setAttribute("autocomplete",this.autocomplete);
  return element;
};


// 使用
// 创建一个空的<form> 标签，一个代表<input type = 'search'> 表单域的新 FormField 对象
