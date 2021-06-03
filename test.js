class A {
  constructor(data){
    console.log('a',data);
    this.b=data;
  }
    c() {
      return 2;
    }
    d(){
      console.log('d',this.b);
      return this.b
    }
  }
  
  class B extends A {
    constructor() {
      super(1);
      console.log(super.c(),this.c);
      console.log('b',super.b,this.b); 
      console.log('d',super.d()); 
    }
  }
  
  let b = new B();
  b.d()