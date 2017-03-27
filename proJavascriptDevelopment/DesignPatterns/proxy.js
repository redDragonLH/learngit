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
