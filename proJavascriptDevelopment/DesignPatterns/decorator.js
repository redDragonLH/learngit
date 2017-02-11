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
var form = document.createElement("form"),
    formField = new FormField("search", "Enter your search term");

// 使用装饰者为所生成的表单域元素添加 maxLength 和 autocomplete 属性，实现对 formField 对象的嫖客
formField = new MaxLengthFieldDecorator(formField, 255);
formField = new AutoCompleteFieldDecorator(formField, "off");

// 创建该HTML 表单域元素并将其添加至 <form> 元素
form.appendChild(formField.createElement());

// 添加一个事件处理函数至该 <form> 标签的 submit 事件， 防止在我们添加的这个表单域当中没有值的情况下提交表单
form.addEventListener("submit", function(e){
  // 屏蔽表单的默认提交动作
  e.preventDefault();

  // 检测该表单域是否通过检验，例如是否包含值
  if(formField.isValid()) {
    // 如果是，继续运行并提交
    form.submit();
  } else {
    // 提示错误
    alert("没有值");
  }
}, false);

// 页面加载完成，添加该表单至当前页面
window.addEventListener("load", function(){
  document.body.appendChild(form);
}, false);
