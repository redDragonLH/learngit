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
      next: null,
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
// singleLinked.insert(2,3)
// console.log(singleLinked.getLength());
// singleLinked.log()
// singleLinked.insert(80,3)
// console.log(singleLinked.getLength());
// singleLinked.log()
// singleLinked.insert(80,8);
// singleLinked.log()
// singleLinked.delete(80)
// console.log(singleLinked.getLength());
// singleLinked.log()
// singleLinked.insert(80,3)
// singleLinked.log()
// console.log(singleLinked.getLength());

/**
 * 双向链表
 */

class DoublyListNode {
  constructor(key) {
    return {
      key: key,
      next: null,
      prev: null
    }
  }
}

class DoublyList {
  constructor(key= null) {
    this.count = 0;
    this.head = null;
    key ? this.addHead(new DoublyListNode(key)): ''
  }
  insert( key, position, islow = false ){
    let node = new DoublyListNode( key );
    let currentNode = this.head;
    let count = 0;
    if( !this.head ){
      this.addNode( node )
      return node;
    }
    if((position > this.count || !position) && !islow){
       throw new Error('没有此位置');
    }else if((position > this.count || !position) && islow){
      while(currentNode.next != null){
        currentNode = currentNode.next;
      }
    }else if(position <= this.count){
      while(position < count){
        currentNode = currentNode.next;
        count++
      }
    }
    node.next = currentNode.next
    currentNode.next = node;
    node.prev = currentNode;
    this.count++;
  }
  addHead(node,isadd = true){
    this.head = node;
    this.head.prev = 'head';
    isadd ? this.count++ :this.count--;
  }
  delete(position){
    let currentNode = this.head;
    let count = 0;
    if (this.count === 0 || position < 1 || position > this.count) {
      throw new Error('没有此位置');
    }
    if(position === 1){
      this.addHead(currentNode.next,false);
    }else{
      while( position < count-1 ){
        currentNode = currentNode.next;
        count++
      }
      currentNode.next = currentNode.next.next;
      currentNode.next.prev = currentNode;
      this.count++;
    }
  }
  getLength(){
    return this.count
  }
  log(){
    console.log(this.head);
  }
}
let doublyList = new DoublyList(3)
doublyList.log()
doublyList.insert(10,null,true)
doublyList.log()
doublyList.insert(11,2,true)
doublyList.log()
// console.log(doublyList.getLength());
doublyList.delete(2)
doublyList.log()
