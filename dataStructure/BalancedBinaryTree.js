/**
 * 平衡二叉树
 *
 * 二叉搜索树的改进
 * 
 * 常用实现方法有红黑树、AVL、替罪羊树?、Treap、伸展树
 */

/**
 * AVL 平衡二叉树
 * 
 */
/**
 * 网上找的 C版 改的
 * https://blog.csdn.net/u014634338/article/details/42465089
 */

class AVLNode {
  constructor(val) {
    this.depth = 0;
    this.parent = null
    this.key = val;
    this.lchild = null;
    this.rchild = null;
  }
}


class BalancedBinaryTree {
  constructor( val ) {
    this.root = null;
    val ? this.insert( val ): '';
  }
  /**
   * 向AVL二叉树插入值
   * @param  {string|number} val 需要插入的值
   * @return {object}    根节点
   */
  insert( val ){
    let temp;
    let node = new AVLNode( val );
    //插入节点
    temp = insert_val( this.root, node, null ); // 调用真正的插入函数
    if( temp ){
      this.update_depth( temp );
      this.root = AVLTree( root, temp ); // 检查树是否需要调整
    }else temp = null;
    
    return this.root
  }
  // 更新节点深度
  update_depth( node ){
    if( !node ) return false;
    else{
      let depth_Lchild = this.get_balance( node.lchild ); // 左节点深度
      let depth_Rchild = this.get_balance( node.rchild ); // 右节点深度
      node.depth = max( depth_Lchild,depth_Rchild ) + 1;
    }
  }
  // 获取节点深度
  get_balance( node ){
    if (node == NULL)
    return 0;
    return node.depth;
  }
  // 返回当前平衡因子
  is_balance( node ){
    if( !node ) return false;
    else return get_balance( node.lchild) - get_balance(node.rchild);
  }
  /**
   * AVL树调整函数
   * @param  {object} node 需要插入的节点
   * @return {object}    根节点
   */
  AVLTree(node){
    let balance = 0; // 平衡因子
    while( node != null ){ //检查其祖先是否需要调整，更新
      this.update_depth(node); // 更新当前节点的高度信息
      balance = this.is_balance( node ); // 获取当前节点的平衡因子情况
      if(balance > 1 || balance < -1){ // 平衡因子超标情况
        if( balance > 1 ) { //左子树高
          if( this.is_balance( node.lchild) > 0 ) node = this.LL_rotate( node ); //LL型
          else node = this.LR_rotate( node ); // LR型
        }
      }
    }
  }
  LL_rotate(node){
    
  }
}