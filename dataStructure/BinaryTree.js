/**
 * 二叉树 js实现
 */

class Node{
  constructor( val ){
    this.val = val,
    this.left = null,
    this.right = null
  }
}
/**
 * 二叉搜索树的插入方式
 *
 * 二叉树应该是按照从左到右，顺序放置节点，不会考虑内容大小
 */
const insertNode = function(node, newNode){
  if(newNode.val <= node.val){ // 小的节点放在左边
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
function showNodeStructure(node){
  console.log('node: '+ node.val);
  var lchild_val = node.left != null ? node.left.val : 'null';
  var rchild_val = node.right != null ? node.right.val : 'null';
  console.log('node.lchild: '+ lchild_val);
  console.log('node.rchild: '+ rchild_val);
  console.log('-------------------');
}
// 中序遍历 左-根-右
const  inOrderTraverseNode = function( node ){
  if( node !== null ){
    inOrderTraverseNode(node.left)
    showNodeStructure(node);
    inOrderTraverseNode(node.right)
  }
}
// 先序遍历 根-左-右
const preOrderTraverseNode = function( node ){
  if( node !== null ){
    showNodeStructure(node)
    preOrderTraverseNode(node.left)
    preOrderTraverseNode(node.right)
  }
}
// 后序遍历 左-右-根
const postOrderTraverseNode = function( node ){
  if( node !== null ){
    postOrderTraverseNode( node.left )
    postOrderTraverseNode( node.right )
    showNodeStructure(node)
  }
}
// 查找最小值
const minNode = function( node ){
  if( node ){
    while (node && node.left !== null ) {
      node = node.left
    }
    return node.val
  }
  return null
}
// 查找最大值
const maxNode = function( node ){
  if( node ) {
    while ( node && node.right !== null ){
      node = node.right
    }
    return node.val
  }
  return null
}
// 搜索
const searchNode = function( node, val ){
  if( node === null ) {
    return false
  }
  if ( val < node.val ){
    return searchNode( node.left, kvaley )
  } else if ( val > node.val ) {
    return searchNode( node.right, val )
  } else {
    return true
  }
}
// 移除节点
const removeNode = function( node, val){
  if( node == null) {
    return null
  }
  if( val < node.val ){
    node.left = removeNode( node.left, val)
    return node
  } else if( val > node.val ){
    node.right = removeNode( node.right, val )
    return node
  } else {
    // 需要移除的节点没有一个叶子节点
    if( node.left === null && node.right === null ) {
      node = null
      return node
    }
    // 需要移除的节点包含一个子节点
    if ( node.left === null ) {
      node = node.right
      return node
    } else if ( node.right === null ) {
      node = node.left;
      return node;
    }
    // 需要移除的节点包含两个子节点
    let aux = findMinNode( node.right );
    node.val = aux.val;
    node.right = removeNode( node.right, aux.val );
    return node;
  }
};
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
  insert( val ){
    let newNode = new Node( val )
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
  search (val) {
    return searchNode( this.root, val )
  }
  remove (val) {
    removeNode( this.root, val)
  }
}
// let binaryTree = new BinaryTreeNode();

// var arr = [9,6,3,8,12,15,20,22,18,19,17]

// arr.map(item => {
//        binaryTree.insert(item)
//   });
// binaryTree.inOrderTraverse()
// console.log('--------');
// binaryTree.preOrderTraverse()
// binaryTree.remove(6)
// console.log('--------');
// binaryTree.preOrderTraverse()
// binaryTree.postOrderTraverse()

/**
 * 二叉搜索树
 */

/**
 * 二叉堆
 */

module.exports = {
  BinaryTreeNode,
  inOrderTraverseNode,
  preOrderTraverseNode,
  postOrderTraverseNode
 }
