/**
 * 问题：根节点的重新赋值问题未解决导致死循环
 */
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
 * 参考：
 * 左旋右旋：https://blog.csdn.net/yang_yulei/article/details/46005845
 * 代码结构： http://www.voidcn.com/article/p-xesroiyq-gh.html
 */


/**
 * 实际插入方法
 * @param  {node} root     父节点
 * @param  {number} key      存储的关键字
 * @param  {number} priority 优先级
 */
function insert( root, key, priority,rootnode){
  var newroot;
  if( key < root.key ){

    if(root.left) {
       return insert( root.left, key, priority, rootnode);
     }else {
       root.left = new TreapNode( priority, key, root );
     }

    if(root.left.priority < root.priority){
      newroot = rotate_left(root,rootnode);
    }
    return newroot;

  }else if( key > root.key ){
    if(root.right) {
      return  insert( root.right, key, priority,rootnode);
     }else{
        root.right = new TreapNode( priority, key, root );
     }
    if(root.right.priority < root.priority){
      newroot = rotate_right(root,rootnode);
    }
    return newroot;

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
       }else if ( !root.right ) {
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
function rotate_right( root, rootnode ){
  /**
   * 右旋
   * 1. root 的右子节点替换 root
   * 2. root 挂载到root 的右子元素
   * 3. root 的右节点的左节点存在的话挂载到roto的右节点
   */

//  预计： 单提出来占用内存过多
   let rlnode = root.right.left,
       oldParent = root.parent, // root的父元素
       rnode = root.right;
   rnode.parent = oldParent;

   rnode.left = root  /// root
   root.parent = rnode;
   if(rlnode){
     root.right = rlnode;
     rlnode.parent = root
   }
   if(oldParent === null ){
     return rnode;
   }
   if(oldParent.left !== null && oldParent.left.key == root.key){
     oldParent.left = rnode
   }else{
     oldParent.right = rnode
   }
}
/**
 * 左旋转
 *
 *
 * @param  {object} root 需要旋转的父元素
 */
function rotate_left( root, rootnode ){
  /**
   * 左旋：
   * 1. 根节点转移到左子节点的右子节点
   * 2. 左子节点替换根节点
   * 3. 左子节点如果有右节点则挂载到根节点的左子节点
   *
   */
   console.log(root);

  let lrnode = root.left.right, //  ruot 左子元素的右子元素，位置会被root 占，先提出来
      oldParent = root.parent, // root的父元素
      rlnode = root.left; // root的左子元素，会代替root的位置
  rlnode.parent = oldParent; // 左子节点挂载到根元素的父元素

  root.left.right = null;
  rlnode.right = root;
  root.parent  = rlnode;

  if(lrnode){
    root.left = lrnode;
    lrnode.parent = root
  }

  if(oldParent === null ){
    return rlnode;
  }
  if(oldParent.left.key = root.key){
    oldParent.left = root.left
  }else{
    oldParent.right = root.left;
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
    this.parent = parent;
    this.left = null;
    this.right = null;
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
      isInsert = insert(this.root, key, priority , this);
    }
    if(isInsert){
      // console.log(isInsert);
      isInsert.key ? this.root = isInsert :'';
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
  order(root){
    if(root){
      console.log(root);
      console.log('----------');
      this.order(root.left)
      this.order(root.right)
    }
  }
}

let treap = new Treap();
for (var i = 0; i < 4; i++) {
  treap.insert(i,Math.round(Math.random()*100));
}
// treap.order(treap.root)
// console.log(treap.root);
