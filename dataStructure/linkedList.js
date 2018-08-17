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
// doublyList.log()
doublyList.insert(10,null,true)
// doublyList.log()
doublyList.insert(11,2,true)
// doublyList.log()
// console.log(doublyList.getLength());
doublyList.delete(2)
// doublyList.log()

/**
 * ---------------
 * 循环链表
 * ---------------
 */
/**
 * 单循环链表
 */
class SingleCycleList {
  constructor( key ) {
    this.count = 0;
    this.head = null;
    key ? this.insert(key) : '';
  }
  insert( key, needSetKey ){
    let node = new SingleLinkedNode(key);
    if(!this.head){
      this.head = node;
    } else{
      let needSetNode = this.find(needSetKey);
      if(!needSetNode) return needSetNode;
      if(needSetNode.next){
        node.next = needSetNode.next;
        needSetNode.next = node;
      }else{
        needSetNode.next = node;
        node.next = this.head
      }
    }
    this.count++
  }
  delete( key ){
    let Prevnode = this.findPrev( key );
    if(!Prevnode)return Prevnode;
    
    Prevnode.next = Prevnode.next.next;
    this.count--;
  }
  find( key ){
    let count = 0;
    let node = this.head;
    while( node.key != key ){
      if( count > this.count) return false;
      node = node.next;
      count++
    }
    return node;
  }
  findPrev( key ) {
    let count = 0;
    var node = this.head;
    while (node.next.key != key){
      if(count >= this.count) return false;
        node = node.next;
        count++
    }
    return node;
  }
  log(){
    console.log(this.head);
  }
}
let singleCycleList = new SingleCycleList(2)
// singleCycleList.log();
singleCycleList.insert(3,2)
// singleCycleList.log();
singleCycleList.insert(5,3)
// singleCycleList.log();
singleCycleList.delete(10)
// singleCycleList.log();
singleCycleList.insert(6,5)

/**
 * 双向循环链表
 */
class DoublyCycleList {
  constructor( key ) {
    this.count = 0;
    this.head = null;
    key ? this.insert(key) : '';
  }
  insert( key, setKEY ){
    let node = new DoublyListNode( key );
    if( !this.head ){
      this.head = node;
      this.count++;
    }else{
      let needSetnode = this.find( setKEY );
      if (!needSetnode) return needSetnode;
      node.next = needSetnode.next;
      node.prev = needSetnode;
      needSetnode.next = node;
      this.count++
      if(!node.next) node.next = needSetnode;
      if(!needSetnode.prev) needSetnode.prev = node;
    }
  }
  delete( key ){
    let node = this.find(key);
    if( !node ) return false;
    let next = node.next;
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.count--;
  }
  find( key ){
    let isKeep = true,
        prev = this.head,
        next = this.head,
        count = 0,
        tolal = this.count/2 ;
    while(count <= tolal){
      if(count == tolal && prev.key != key && next.key != key) return false;
      if(prev != null && prev.key == key) return prev;
      else if(next!= null && next.key == key) return next;
      
      if( prev != null) prev = prev.prev;
      if( next!= null) next = next.next;
      count++
    }
    if(!prev && ! next) return false;
  }
  log(){
    // console.log(this.head);
    let node =this.head,
        count = this.count
    while ( count ) {
      node = node.next
      console.log(node.key);
      count--
    }
  }
  getLength(){
    console.log(this.count);
    return this.count
  }
}
let doublyCycleList = new DoublyCycleList(3);
let arr = [1,3,5,7,9]
arr.map(function(e,i){
  doublyCycleList.insert( e,3 )
})
// doublyCycleList.getLength()
// doublyCycleList.log();
// console.log('---');
// doublyCycleList.delete(3)
// doublyCycleList.log();
// console.log(doublyCycleList.delete(30));
// console.log('---');
// doublyCycleList.log();
