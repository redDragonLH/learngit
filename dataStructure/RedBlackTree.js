/**
 * 
 * 问题：AVL和红黑都是靠旋转节点平衡二叉树，那么两者的本质区别是什么
 * 
 */

// ------------ 内容区----------------------

// R-B Tree，全称是Red-Black Tree，又称为“红黑树”，它一种特殊的二叉查找树。
// 红黑树的每个节点上都有存储位表示节点的颜色，可以是红(Red)或黑(Black)。
/**
 * 红黑树的特性:
（1）每个节点或者是黑色，或者是红色。
（2）根节点是黑色。
（3）每个叶子节点（NIL）是黑色。 [注意：这里叶子节点，是指为空(NIL或NULL)的叶子节点！]
（4）如果一个节点是红色的，则它的子节点必须是黑色的。
（5）从一个节点到该节点的子孙节点的所有路径上包含相同数目的黑节点。
 *
 * 注意：
(01) 特性(3)中的叶子节点，是只为空(NIL或null)的节点。
(02) 特性(5)，确保没有一条路径会比其他路径长出俩倍。因而，红黑树是相对是接近平衡的二叉树。
 */
/**
 * 主要是用它来存储有序的数据，它的时间复杂度是O(logn)，效率非常之高。
 */

/**
 * 例子:
 * http://www.cnblogs.com/skywang12345/p/3245399.html
 * https://blog.csdn.net/v_JULY_v/article/details/6105630
 */
function insert_val(root,newNode){
  if(root.key > newNode.key){
    if(root.lchild )return insert_val(root.lchild,newNode)
    else {
      root.lchild = newNode;
      newNode.parent = root.lchild;
    }
  }else if(root.key < newNode.key){
    if(root.rchild )return insert_val(root.rchild,newNode)
    else {
      root.rchild = newNode;
      newNode.parent = root.rchild;
    }
  }else{
    return false;
  }
  return newNode;
}
 class RBNode {
   constructor(key) {
     this.depth = 0;
     this.parent = null
     this.key = key;
     this.lchild = null;
     this.rchild = null;
     this.color = 'B'; // black
   }
 }
 
class RedBlackTree{
  constructor(key){
    this.root = null;
    this.size = 0;
    key ? this.insert(key) : '';
  }
  insert(key){
    let newNode = new RBNode(key)
    let temp = null;
    if( !this.root ) this.root = newNode
    else temp = insert_val(this.root,newNode)
    if(temp){
      this.size++
    }
    return newNode;
  }
  get(key,root){
    if(key == null) Error('key is not defined');
    var root = root ? root : this.root;
    
    if(root.key > key) return this.get(root.lchild,key);
    else if(root.key < key) return this.get(root.rchild,key);
    else if(root.key == key) return root;
    else return null;
  }
}
let redBlackTree = new RedBlackTree(3);
redBlackTree.insert(4)
redBlackTree.insert(2)
console.log(redBlackTree.get(3));
// console.log(redBlackTree.root);
