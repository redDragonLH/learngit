/**
 * ----------------------------
 * 废弃
 * ----------------------------
 */

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
 function showNodeStructure(node){
   if(typeof node != 'object') return false;
   console.log('node: '+node.key);
   var parent_val = node.parent != null ? node.parent.key : 'null';
   var lchild_val = node.left != null ? node.left.key : 'null';
   var rchild_val = node.right != null ? node.right.key : 'null';
   console.log('node.parent: ' + parent_val);
   console.log('------------');
 
   console.log('node.lchild: '+ lchild_val);
   console.log('node.rchild: '+ rchild_val);
   console.log('------------------------');
 }
function insert_val(node,pos,key,priority){
  node[pos] = new TreapNode(key);
  node[pos].priority = priority;
  node[pos].parent = node;
}
class TreapNode {
  constructor(key = null) {
    this.key = key; // 关键字
    this.priority = null; //随机优先级
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class Treap{
  constructor(key = null){
    this.num = 0
    this.root = null; // 根节点
  }
  /**
   * 左旋
   * @param  {object} node [description]
   */
  rotate_left(node){
    let x = node.right;
    node.right = x.left;
    if(x.left){
      x.left.parent = node;
    }
    let nodeP = node.parent;
    x.left = node;
    node.parent = x;
    // node = x;
    x.parent = nodeP;
    if(nodeP.left != null && nodeP.left.key == node.key){
      nodeP.left = x;
    }else{
      nodeP.right = x;
    }
  }
  /**
   * 右旋
   * @param  {object} node [description]
   */
  rotate_right( node ){
    let x = node.left;
    node.left = x.right;
    if( x.right ){
      x.right.parent = node;
    }
    let nodeP = node.parent;
    
    x.right = node;
    node.parent = x;
    x.parent = nodeP;
    if(typeof nodeP.left != null && nodeP.left.key == node.key){
      nodeP.left = x;
    }else{
      nodeP.right = x;
    }
  }
  insert(node,key,priority,root,pos){
    if( node == null && pos == null ){
      this.root = new TreapNode(key);
      this.root.priority = priority;
      this.root.key = key;
      this.num++
    }else if(node == null && pos ){
       insert_val(root,pos,key,priority);
       this.num++
    }else if(key < node.key){
      this.insert( node.left, key,priority ,node,'left');
      if( node.left.priority < node.priority && node.parent){
        this.rotate_right( node );
      }
    }else{
      this.insert( node.right, key, priority ,node,'right');
      if( node.right.priority < node.priority && node.parent){
        this.rotate_left( node );
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
  in_order(node){
    if(!node) return false;
    this.in_order(node.left);
    showNodeStructure(node)
    this.in_order(node.right);
  }
  pre_Order( node ){
    if( node !== null ){
      showNodeStructure(node);
      this.pre_Order(node.left);
      this.pre_Order(node.right);
    }
  }
  depth(node){
    if( node == null )
       return -1;
    let l = this.depth( node.left );
    let r = this.depth( node.right );
  }
}

let treap = new Treap();

for (var i = 0; i < 50; i++) {
    let round = Math.round(Math.random()*100)
    console.log(round);
  treap.insert(treap.root,i,round,treap.root,null)
}
treap.pre_Order(treap.root)
