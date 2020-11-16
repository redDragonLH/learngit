class A {
    c() {
      return 2;
    }
  }
  
  class B extends A {
    constructor() {
      super();
      console.log(super.c); // 2
    }
  }
  
  let b = new B();