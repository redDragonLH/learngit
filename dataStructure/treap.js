/**
 * 树堆 treap
 * 
 */

/**
 * 每个节点有两个值`value`和`weight`,
 * 只看 `weight` 的话，满足 heap 二叉堆的特性（父亲比儿子都小/大），
 * 只看 value 的话，满足排序二叉树特性（以左儿子为根的子树元素都比父亲小，右儿子为根的子树都比父亲大）
 *
 * value 是要维护的值，weight 是随机生成的值。由于随机生成的堆使整棵树变得平衡
 */
/**
 * 实际插入方法
 * @param  {node} root     父节点
 * @param  {number} key      存储的关键字
 * @param  {number} priority 优先级
 */
function insert( root, key, priority){
  if( key < root.key ){
    root.left ? insert( root.left, key, priority) : root.left = new TreapNode( priority, key, root );
    if(root.left.priority < root.priority){
      // 右旋
      rotate_right(root);
    }
    return true;
    
  }else if( key > root.key ){
    root.right ? insert( root.right, key, priority) : root.right = new TreapNode( priority, key, root );
    if(root.right.priority < root.priority){
      // 左旋
      rotate_left(root);
    }
    return true;
    
  }else{
    return false;
  }
}

/**
 * [delete_node description]
 * @param  {[type]} root [description]
 * @param  {[type]} key  [description]
 * @return {[type]}      [description]
 */
 function delete_node(root,key){
   if( root ){
     if( key < root.key ){
       delete_node(root.left,key);
     }else if( key > root.key ){
       delete_node(root.right.key);
     }else{
       if( !root.left ){
         root = root.right;
       }else if (! root.right ) {
         root = root.left;
       }else{
         // 先旋转
         if(root.left.priority < root.right.priority){
           rotate_right(root);
           delete_node(root.right, key);
         }else{
           rotate_left(root);
           delete_node(root.left,key);
         }
         return true;
       }
     }
   }
 }

/**
 * 右旋转
 *
 * root 的左子节点旋转到root的 上层，root 降低一层，root 放到原本左节点的右节点，成为旋转完后的父元素的右节点
 *      root.left
 *              \
 *               root
 *               /
 *             root.left.right
 * @param  {object} root 需要旋转的父元素
 */
function rotate_right( root ){
  let x = root.left;// 提取左节点
  if(x.right){ // 如果父元素的左节点的右节点存在
    root.left = x.right;// 则把 它赋值给父元素的左节点（提升一个层级）
    x.right.parent = root;
  } 
  let oldParent = root.parent;
  
  if(x){
    x.right = root;
    root.parent = x;
    x.parent = oldParent;
  }
  if(oldParent.left.key == root.key){
    oldParent.left = x;
  }else{
    oldParent.right = x;
  }
}
/**
 * 左旋转
 * @param  {object} root 需要旋转的父元素
 */
function rotate_left( root ){
  let x = root.right;
  if(x.left){
    root.right = x.left;
    x.left.parent = root;
  }
  let oldParent = root.parent;
  
  if(x){
    x.left = root;
    root.parent = x;
    x.parent = oldParent;
  }
  if(oldParent.left.key == root.key){
    oldParent.left = x;
  }else{
    oldParent.right = x;
  }
}
/**
 * 节点类
 */
class TreapNode {
  /**
   * 初始化方法，自动运行
   */
  constructor( priority = null, key = null, parent = null, node = null ) {
    this.priority = priority; // 优先级
    this.key = key; // 存储的关键字
    this.node = node;
    this.left = undefined;
    this.right = undefined;
    this.parent = parent;
  }
}


class Treap {
  /**
   * 初始化方法，自动运行
   */
  constructor( ) {
    this.root = undefined;
    this.num = 0;
  }
  /**
   * 插入节点
   * @param  {[type]} key         [description]
   * @param  {[type]} priority    [description]
   * @param  {[type]} [node=null] [description]
   * @return {[type]}             [description]
   */
  insert( key, priority, node = null){
    let isInsert = false;
    if (!this.root) {
      this.root = new TreapNode( priority, key, node );
      isInsert = true;
    }else{
      isInsert = insert(this.root, key, priority );
    }
    if(isInsert){
      this.num++;
    }
  }
  delete( key ){
    let isDelete = false;
    isDelete = delete_node(this.root,key);
    if(isDelete){
      this.num--;
    }
  }
}

let treap = new Treap();
treap.insert(1,1);
treap.insert(2,2);
console.log(treap.root);
