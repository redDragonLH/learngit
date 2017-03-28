// 对 模块模式中的 myData.cookie.get()方法实现代理
// 先把当前方法保存在一个变量中
var proxiedGet = myData.cookie.get;

// 使用一个新函数来重新 get() 方法，对原来的方法实现代理并增加它的行为
myData.cookie.get = function(){
  // 调用被代理的（原来的）方法来获取它可能产生的值
  var value = proxiedGet.apply(this,arguments);

  // 对被代理的方法所返回的值实施某种操作
  value = value.toUpperCase();
  // 对于实施了某种操作后的值，其类型要与被代理的方法相同，使用该值作为返回值，则该新方法的使用就不会影响到原有的对该方法的调用
  return value;
};
// -----------------------------------------------------------------------------------------
// 虚拟代理，通过延迟对象的实例化时间（这样构造函数的执行就会推迟），直至对象实例中i给你的某个方法被真正调用之时

// 定义一个类，用于构建一个对象，来表示一个简单表单域
function FormField(type, dispalyText) {
  this.type = type || 'text';
  this.dispalyText = dispalyText || '';

  // 创建并初始化一个表单域 DOM 元素
  this.element = document.createElement("input");
  this.element.setAttribute("type", this.type);
  this.element.setAttribute("placeholder", this.dispalyText);
}
// 定义两个方法以供对象实例来继承
FormField.prototype = {
  getElement: function(){
    return this.element;
  },
  isValid: function() {
    return this.element.value !== "";
  }
};

// 现在，使用实现了相同方法的代理来替换 FromField “类”，它会延迟调用原来的构建函数，直至这些方法被真正调用，节省内存提升性能
// 根据需要，可使用模块模式来使该代理“类”的作用域实现局部化，传入原来的 FormField“类”并返回它所经过的代理版本

FormField = (function(FormField) {
  // 定义代理构造函数，类似于原来的 FormField “类”
  function FormFieldProxy(type, dispalyText) {
    this.type = type;
    this.dispalyText = dispalyText;
  }
  FormFieldProxy.prototype = {
    // 定义一个属性，用于在原来的“类”被实例化之后，保存对该实例的引用
    formField: null,

    // 定义一个新的 initialize 方法，用于在formField 的对象实例尚未存在时执行原来的”类的构造函数，以创建出该对象实例
    initialize: function(){
      if(!this.FormField) {
        this.formField = new FormField(this.type, this.dispalyText);
      }
    },

    // 使用一些新方法对原来的各个方法进行代理，只有当这些新方法当中某一个被调用时，才会调用
    // initialize() 方法来实例化 FormField“类”
    getElement: function(){
      this.initialize();
      return this.formField.getElement();
    },
    isValid: function(){
      this.initialize();
      return this.formField.isValid();
    }
 };

// 返回该代理 “类”，替换原来的 “类”
return FormFieldProxy;
}(FormField));
