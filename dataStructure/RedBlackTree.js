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


/**
 * 插入节点
 * @param  {object} root    根节点
 * @param  {number} key 需插入的数据
 * @return {object | null}  返回插入节点或者空
 */
function insert_val(root,key){
  let newNode = null;
  if(root.key > key){
    if(root.lchild )return insert_val(root.lchild,key)
    else {
      root.lchild = newNode = new RBNode(key , root);
    }
  }else if(root.key < key){
    if(root.rchild )return insert_val(root.rchild,key)
    else {
      root.rchild = newNode = new RBNode(key ,root);
    }
  }else{
    return false;
  }
  return newNode;
}
/**
 * 节点类
 */
 class RBNode {
   constructor(key,parent=null, vla=null ) {                                        
     this.depth = 0;
     this.parent = parent
     this.key = key;
     this.lchild = null;
     this.rchild = null;
     this.val = vla;
     this.color = 'B'; // black
   }
 }
 
class RedBlackTree{
  constructor(key){
    this.root = null;
    this.size = 0;
    key ? this.insert(key) : '';
  }
  insert(key,obj=null){
    let temp = null;
    if( !this.root ) this.root = temp = new RBNode(key)
    else temp = insert_val(this.root,key)
    if(temp){
      console.log(temp);
      this.size++
    }
    return true;
  }
  get(key,root){
    if(key == null) Error('key is not defined');
    var root = root ? root : this.root;
    
    if(root.key > key) return this.get(root.lchild,key);
    else if(root.key < key) return this.get(root.rchild,key);
    else if(root.key == key) return root;
    else return null;
  }
  /**
   * 左旋节点
   * 将x的右子树绕x逆时针旋转，使得x的右子树成为x的父亲，同时修改相关节点的引用
   * @param  {node} node 需左旋的节点
   * @return {[type]}      [description]
   * 
   *       |                     |
   *       x                     y
   *     /  \     左旋         /  \
   *    a    y   --->         x    c
   *       /  \             /  \
   *      b    c           a    b
   * 
   */
  rotateLeft(node){ // 此节点应为左旋将成为子节点的节点
    if(!node) Error('node is not defined');
    let rchild = node.rchild; // 提取右子节点
    node.rchild = rchild.lchild; // 把右节点的子节点挂载到右子节点上
    
    if(rchild != null){
      rchild.left.parent = node; // 不为空则父元素指向节点
    }
    
    rchild.parent = node.parent; // 右子节点 挂载到它的父节点的父节点上，成为父节点，父节点成为左子节点
    if(node.parent == null){
      this.root = rchild;  // 成为根节点
    }else if(node.parent.lchild == node){ // 确认新的父节点的位置
      node.parent.lchild = rchild 
    }else{
      node.parent.rchild = rchild
    }
    rchild.lchild = node; // 当前节点正式成为子节点，父节点由原来它的右子节点
    node.parent = rchild
  }
  /**
   * 节点右旋
   * @param  {object} node 需旋转的节点
   * @return {object}      [description]
   *
   *        |                 |
   *        x                 y
   *       / \     右旋      / \
   *      y   c   --->      a   x
   *    /  \                   / \
   *   a    b                 b   c
   */
  rotateRight(node){
    if( !node ) Error('node is not defined');
    let lchild = node.lchild;
    node.lchild = lchild.rchild;
    if( lchild.rchild !== null ) lchild.right.parent = node
    
    lchild.parent = node.parent;
    if(node.parent == null ){
      this.root = lchild;
    }else if(node.parent.rchild == p ){
      p.parent.rchild = lchild;
    }else{
      node.parent.rchild = lchild
    }
    lchild.rchild = node;
    node.parent = lchild
  }
}
let redBlackTree = new RedBlackTree(3);
redBlackTree.insert(4)
redBlackTree.insert(2)
// console.log(redBlackTree.get(3));
// console.log(redBlackTree.root);
