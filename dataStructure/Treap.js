/**
 * 树堆
 */
/**
 * 是二叉树(Binary Sort Tree)与堆(Heap)结合产生的一种拥有堆性质的二叉排序树
 *
 * 注意：
 * 1. 二叉堆必须是完全二叉树，而Treap 并不一定是
 * 2. Treap 并不严格满足平衡二叉排序树（AVL）的要求，即树堆中每个节点的左右子树高度之差的绝对值可能会超过1，只是近似满足平衡二叉排序树的性质
 */
/**
 * 每个节点记录两个数据，一个是键值，一个时随机附加的优先级，Treap 在以关键码构成二叉排序树的同时，又以节点优先级形成最大堆和最小堆，
 * 所以Treap必须满足这两个性质，一是二叉排序树的性质，二是堆的性质
 */
/**
 * 特点：
 * Teap 因在BST中加入了堆的性质，在以随机顺序将节点插入二叉排序树时，根据随机附加的优先级以旋转的方式维持堆的性质，
 * 其特点时能基本实现随机平衡的结构。
 *  相对于其他的平衡二叉搜索树，优点时实现简单，因为Treap 维护堆性质的方法只用到了旋转，只需要两种旋转
 *
 * 易于维护
 * 可用于高效快速 查找
 */
/**
 * https://blog.csdn.net/K346K346/article/details/50808879
 */
class TreapNode {
  constructor() {
    this.key = null; // 关键字
    this.priority = null; //随机优先级
    this.left = null;
    this.right = null;
  }
}

class Treap{
  constructor(key = null){
    this.root = null; // 根节点
    if(key) this.root = new TreapNode(key);
  }
  /**
   * 左旋
   * @param  {object} node [description]
   * @return {[type]}      [description]
   */
  rotate_left(node){
    let x = node.right;
    node.right = x.left;
    x.left = node;
    node = x;
  }
  /**
   * 右旋
   * @param  {object} node [description]
   * @return {[type]}      [description]
   */
  rotate_right( node ){
    let x = node.left;
    node.left = x.right;
    x.right = node;
    node = x;
  }
  insert(node,key,priority){
    if( this.root == null ){
      this.root = new TreapNode(key);
      this.root.priority = priority;
      this.key = key;
    }else if(key < this.root.key){
      treap_insert( this.root.left, key,priority );
      if( root.left.priority < this.root.priority){
        this.rotate_right( this.root );
      }
    }else{
      treap_insert( this.root.right, key, priority );
      if( root.right.priority ){
        rotate_left( this.root );
      }
    }
  }
  treap_delete( root, key){
    if( root != null ){
      if( key < root.key ){
        treap_delete( root.left ,key );
      }else if ( key > root.key ) {
        treap_delete( root.right,key );
      }else{
        if( root.left == null ){
          root = root.right;
        }else if ( root.right == null ) {
          root = root.left;
        }else{
          if( root.left.priority < root.right.priority ){
            rotate_right( root );
            treap_delete( root.right, key );
          }else{
            rotate_left( root );
            treap_delete(root.left, key);
          }
        }
      }
    }
  }
}
