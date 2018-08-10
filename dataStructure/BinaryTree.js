;(function(){
class Node{
  constructor( key ){
    this.key = key,
    this.left = null,
    this.right = null
  }  
}
const insertNode = function(node, newNode){
  if(newNode.key <= node.key){ // 小的节点放在左边
    if(node.left === null){ //左节点没有直接放在左边
      node.left = newNode;
    } else { // 左树有内容的话再搜索下一层的节点
      insertNode(node.left,newNode)
    }
  } else { // 大的key 放在右边
    if(node.right === null){
      node.right = newNode
    } else { // 搜索下一层
      insertNode( node.right, newNode )
    }
  }
}
// 中序遍历 左-根-右
const  inOrderTraverseNode = function( node ){
  if( node !== null ){
    inOrderTraverseNode(node.left)
    console.log(node.key);
    inOrderTraverseNode(node.right)
  }
}
// 先序遍历 根-左-右
const preOrderTraverse = function( node ){
  if( node !== null ){
    console.log(node.key)
    preOrderTraverseNode(node.left)
    preOrderTraverseNode(node.right)
  }
}
// 后序遍历 左-右-根
const postOrderTraverseNode = function( node ){
  if( node !== null ){
    postOrderTraverseNode( node.left )
    postOrderTraverseNode( node.right )
    console.log( node.key )
}
// 查找最小值
const minNode = function( node ){
  if( node ){
    while (node && node.left !== null ) {
      node = node.left
    }
    return node.key
  }
  return null
}
// 查找最大值
const maxNode = function( node ){
  if( node ) {
    while ( node && node.right !== null ){
      node = node.right
    }
    return node.key
  }
  return null
}
// 搜索
const searchNode = function( node, key ){
  if( node === null ) {
    return false
  } 
  if ( key < node.key ){
    return searchNode( node.left, key )
  } else if ( key > node.key ) {
    return searchNode( node.right, key )
  } else {
    return true
  }
}
// 移除节点
const removeNode = function( node, key){
  if( node == null) {
    return null
  }
  if( key < node.key ){
    node.left = removeNode( node.left, key)
    return node
  } else if( key > node.key ){
    node.right = removeNode( node.right, key )
    return node
  } else {
    // 需要移除的节点时一个叶子节点
    if( node.left === null && node.right === null ) {
      node = null
      return node
    }
    // 需要移除的节点包含一个子节点
    if ( node.left === null ) {
      node = node.right 
      return node
    } else if ( node.right === null ) {
      node = node.left
      return node
    }
    // 需要移除的节点包含两个子节点
    let aux = findMinNode( node.right )
    node.key = aux.key
    node.right = removeNode( node.right, axu.key )
    return node
  }
}
const findMinNode = function( node ) {
  if (node ){
    while (node && node.left !== null ) {
      node = node.left
    }
    return node
  }
  return null
}
class BinaryTreeNode {
  constructor(){
    this.root = null;
  }
  insert( key ){
    let newNode = new Node( key )
    if( this.root === null ){ // 根节点
      this.root = newNode;
    } else {
      insertNode( this.root, newNode );
    }
  }
  inOrderTraverse(){
    inOrderTraverseNode( this.root )
  }
  preOrderTraverse (){
    preOrderTraverseNode( this.root )
  }
  postOrderTraverse (){
    postOrderTraverseNode( this.root )  
  }
  findMin (){
    return minNode( this.root )
  }
  findMax (){
    return maxNode( this.root )
  }
  search (key) {
    return searchNode( this.root, key ) 
  }
  remove (key) {
    removeNode( this.root, key)
  }
}
let binaryTree = new BinaryTreeNode();

var arr = [9,6,3,8,12,15]

// arr.map(item => {
//        binaryTree.insert(item) 
//   });
binaryTree.inOrderTraverse()
binaryTree.preOrderTraverse()
binaryTree.postOrderTraverse()
})();
