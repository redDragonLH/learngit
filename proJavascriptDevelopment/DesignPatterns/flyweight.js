// 享元模式

// 第一阶段从我们想要实现更高效地内存存储地对象地原来地外部状态数据，(原Employee的各项属性)中提取出要成为内部状态的数据

// 在代码清单的Employee对象中，又两组外部状态数据--人员数据和公司数据
// 创建两个类来表示这些类型的数据

// Person 对象表示独立的社会安全号码以及人员名称
function Person(data) {
  this.ssId = data.ssId || "";
  this.name = data.name || "";
}

// Company 对象表示公司名称、地址和国家详细内容
function Company(data) {
  this.name = data.name || "";
  this.address = data.address || "";
  this.country = data.country || "";
}
// 实现享元模式的第二阶段时，要确保代表唯一外部状态数据的对象只被创建一次并保存起来以供以后使用
// 这是通过对每一个新的外部状态数据 “类” 应用工厂模式来抽象对象实例的创建过程来实现的
// 这样。如果找到一个已经存在的对象，就会返回该对象而不是创建一个新的实例
var personFactory = (function(){
  // 创建一个变量，用于按照ssId保存Person “类”的所有对象
  var people = {},
      personCount = 0;
  return {
    // 建立一个方法，根据输入的数据所提供的给定的ssId，如果还不存在该ssId对应的Person"类"的实例，则创建一个新的实例；如果已经存在，则返回对象而不是创建一个新的对象
    creatPerson:function(data){
      var person = people[data.ssId],
          newPerson;

      // 如果该给定的ssId所对应的人员已经存在于本地数据中，则返回人员对象实例，否则创建一个新对象
      if(person) {
        return person;
      } else {
        newPerson = new Person(data);
        people[newPerson.ssId] = newPerson;
        personCount++;

        return newPerson;
      }
    },
    // 建立一个方法，以便获悉已经创建了多少个Person类的对象
    getPersonCount:function(){
      return personCount;
    }
  };
}());

// 为 Company 类的对象创建一个相似的工厂，按name 保存公司数据
companyFactory = (function(){
  var companies = {},
      companyCount = 0;

  return {
    creatCompany: function(data) {
      var company = companies[data.name],
          newCompany;

      if(company) {
        return company;
      } else {
        newCompany = new Company(data);
        companies[newCompany.name] = newCompany;
        companyCount++;

        return newCompany;
      }
    },
    getCompanyCount: function(){
      return companyCount;
    }
  };
}());
