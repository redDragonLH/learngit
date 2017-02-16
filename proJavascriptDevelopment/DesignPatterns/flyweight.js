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

// 实现享元模式的第三阶段，使得对象的创建可以按照低效模式相同的方法进行
// 实现最高效的数据储存处理，且从终端用户的角度看来，这种处理是透明的

// 创建一个对象，当中提供了保存员工数据的方法以及按员工的 employeeId 来返回每个对象的数据的方法
// 简化终端开发者的代码

employee = (function(){
  // 声明一个变量，作为数据储存区来存放所有创建的员工对象
  var employee = {},
      employeeCount = 0;
  return {
    // 建立一个方法，用于往数据储存区添加员工对象，把参数所提供的数据传入Person和 Company所对应的工厂，保存所生成的对象至本地区域
    add: function(data) {
      // 根据所提供的参数数据，相应地创建或查找Person类对象，Company类地对象
      var person = personFactory.creatPerson({
        ssId: data.ssId,
        name: data.name
      }),
      company = companyFactory.creatCompany({
        name: data.companyName,
        address: data.companyAddress,
        country: data.companyCountry
      });

      // 保存此对象至本地数据存储区，此对象含有employeeId,occupation,以及员工所任职地公司，还有员工唯一个人信息数据
      employees[data.employeeId] = {
        employeeId: data.employeeId,
        occupation: data.occupation,
        person: person,
        company: company
      };

      employeeCount++;
    },
    // 建立一个方法，用于根据员工地employeeId来返回员工地名称-从相关联地Person对象中获取人名数据
    getName: function(employeeId) {
      return employees[employeeId].person.name;
    },
    // 根据employeeId返回职位
    getOccupation: function(employeeId){
      return employees[employeeId].occupation;
    },
    // 返回任职公司地址
    getCompany: function(employeeId) {
      var company = employees[employeeId].company;
      return [company.name,company.address,company.country].join(",");
    },
    // 获取员工数量
    getCount:function(){
      return employeeCount;
    }
  };
}());
