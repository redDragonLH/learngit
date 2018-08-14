/**
 * 队列 js 实现
 * 主要： 先进先出
 */

class Queue{
  constructor(key){
    this.array = new Array();
    key? this.array.unshift(key): '';
  }
  push(key){
    return this.array.push(key);
  }
  pop(){
    return this.array.shift();
  }
  peek(){
    return this.array.length >= 1? this.array[0]: null;
  }
  isEmpty(){
    return this.array.length >= 1?true:false;
  }
  log(){
    console.log(this.array);
  }
}
let queue = new Queue(2);
queue.log()
queue.push(3)
console.log(queue.peek());
queue.log()
queue.pop(3)
queue.log()
