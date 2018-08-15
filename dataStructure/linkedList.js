/**
 * 链表js实现
 */

/**
 * 单链表
 */
class SingleLinkedNode {
  constructor(key) {
    return {
      key: key,
      next: null
    }
    
  }
}
class SingleLinked{
  constructor( key ){
    this.count = 0
    this.list = null
    key ? this.insert(key) : '';
  }
  insert(newkey,insertKey){
    let node = new SingleLinkedNode( newkey );
    if(this.list === null){
      this.list = node;
      this.count++;
    } else {
      let setNode = this.find(insertKey );
      if(setNode){
        node.next = setNode.next;
        setNode.next = node
        this.count++
        return node
      }
    }
    return false
  }
  delete(key){
    var node = this.findPrev(key);
    if(node && !( node.next == null )){
      node.next = node.next.next;
      this.count--;
    }
  }
  getLength(){
    return this.count;
  }
  findPrev( key ) {
    var node = this.list;
    while ( node.next != null && ( node.next.key != key )){
        node = node.next;
    }
    return node;
}
  find(key){
    var node = this.list
    while(node.key != key){
      let isset = node.next ? node = node.next : false ;
      if(isset == false) return false;
    }
    return node
  }
  log(){
    console.log(this.list);
  }
}
let singleLinked = new SingleLinked(3);
// singleLinked.log()
singleLinked.insert(2,3)
// console.log(singleLinked.getLength());
// singleLinked.log()
singleLinked.insert(80,3)
// console.log(singleLinked.getLength());
// singleLinked.log()
singleLinked.insert(80,8);
// singleLinked.log()
singleLinked.delete(80)
console.log(singleLinked.getLength());
singleLinked.log()
singleLinked.insert(80,3)
singleLinked.log()
console.log(singleLinked.getLength());
