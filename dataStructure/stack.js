/**
 * 栈 js 实现
 */

class Stack{
  constructor(key){
    this.array = new Array();
    key ? this.push(key) :'';
  }
  push(key){
    return this.array.unshift(key);
  }
  pop(){
    return this.array.pop()
  }
  log(){
    console.log(this.array);
  }
}
var stack = new Stack(1);
stack.log()
var c = stack.push(2)
stack.log()
stack.pop()
stack.log()

/*
 * 链表 栈 实现
 * // 链表暂未实现
 */