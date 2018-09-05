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
 * 性质：它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
 *
 * 引入概念：平衡因子，该节点的两个子树的高度差（左减右），（如果其中一个子树不存在，则该子树的高度为0）
 * 如果高度差的绝对值超过1就要调整
 *
 * 调整情况见文档
 */
/**
 * 网上找的 C版 改的
 * https://blog.csdn.net/u014634338/article/details/42465089
 */


  /**
   * AVL树调整函数
   * @param  {object} root 根节点
   * @param  {object} node 需要插入的节点
   * @return {object}    根节点
   */
function AVLTree( root, node ){
  let balance = 0; // 平衡因子  
  while( node != null ){ //检查其祖先是否需要调整，更新
    update_depth(node); // 更新当前节点的高度信息
    balance = is_balance( node ); // 获取当前节点的平衡因子情况
    if(balance > 1 || balance < -1){ // 平衡因子超标情况
      if( balance > 1 ) { //左子树高
        if( is_balance( node.lchild) > 0 ) node = LL_rotate( node ); //LL型
        else node = LR_rotate( node ); // LR型
      }else{ // 右子树高
        // console.log(node);
        if( is_balance( node.rchild) < 0 ) node = RR_rotate( node ) //RR型
        else node = RL_rotate( node ); // RL型
      }
      
      if(!node.parent){ // 到达根节点
        root = node; // 设置新的根节点
        break; // 退出
      }
    }
    node = node.parent; // 依次找到其父节点
  }
  return root;// 返回新根节点
}

// 更新节点深度
function update_depth( node ){
  if( !node ) return false;
  else{
    let depth_Lchild = get_balance( node.lchild ); // 左节点深度
    let depth_Rchild = get_balance( node.rchild ); // 右节点深度
    node.depth = max( depth_Lchild,depth_Rchild ) + 1;
    
  }
}
// 返回当前平衡因子
function is_balance( node ){
  if( !node ) return false;
  else return get_balance( node.lchild) - get_balance(node.rchild);
}
// RR型调整函数
function RR_rotate( node ){  
  console.log('rr');
  
  // node 为离操作节点最近的失衡节点
  
  let parent = son = null;
  
  // 获取失衡节点的父节点
  parent = node.parent;
  
  //获取失衡节点的右子节点
  son = node.rchild;
  // 设置 son 节点左子节点的父指针
  if(son.lchild) son.lchild.parent = node;
  
  // 失衡节点的右子节点变更 son 的左子节点
  node.rchild = son.lchild;
  
  // 更新失衡节点的高度信息
  update_depth( node );
  
  // 失衡节点变成 son 的左子节点
  son.lchild = node;
  
  // 设置 son 的父节点为原失衡节点的父节点
  son.parent = parent;
  
  // 如果失衡节点不是根节点，则开始更新父节点
  if(parent){
    // 如果父节点的左子节点是失衡节点，指向现在更新后的新 son
    if(parent.lchild == node) parent.lchild = son;
    else parent.rchild = son; // 父节点的右子节点是失衡节点的话
  }
  //设置失衡节点的父节点
  node.parent = son;
  //更新son 节点的高度信息
  update_depth( son );
  return son;
}
// LR型 先左旋，在右旋
function LR_rotate( node ){  
  console.log('lr');
  
  RR_rotate( node.lchild );
  return LL_rotate( node );
}

function LL_rotate( node ){
  console.log('ll');
  /**
   * 主要操作是把问题节点与此节点的左节点互换位置
   * 
   */
/**
 * 1. 获取node的 父元素 与有问题的左子节点
 * 2. 如果node节点的左节点也就是 son 的右节点 存在则把右节点挂载到node的右节点
 * 3. son 节点的右节点挂载到node 的左节点 
 * 4. 把node 挂载到son的右节点
 * 5. 把son节点挂载到 node的父节点上
 * 6, 把node的父级指向son ，node原来的左子节点
 */
  // node 为离操作节点最近的失衡节点
  let parent = null,
      son = null;
  
  // 获取失衡节点的父节点
  parent = node.parent;
  // 获取失衡节点的左节点
  son = node.lchild;  // 问题节点
  
  // 设置 son 节点右子节点的父指针
  if(son.rchild) son.rchild.parent = node;
  
  //失衡节点的左子节点变更为 son 的右子节点
  node.lchild = son.rchild;
  
  // 更新失衡节点的高度信息
  update_depth( node );
  
  // 失衡节点变成 son 的右子节点
  son.rchild = node;
  
  // 设置son的父节点为原失衡节点的父节点
  son.parent = parent;
  
  // 如果失衡节点不是根节点，则开始更新父节点
  if(parent){
    // 如果父节点的左子节点是失衡节点，指向现在更新后的新 son
    if(parent.lchild == node ) parent.lchild = son;
    else parent.rchild = son; // 父节点的右子节点是失衡节点的话
  }
  // 设置失衡节点的父节点
  node.parent = son;
  // 更新 son 节点的高度信息
  update_depth( son );
  return son;
}
function RL_rotate( node ){
  console.log('rl');
    LL_rotate( node.rchild );
    return RR_rotate( node );
  }

function remove_val( root, node ){
  let parent = node.parent;
  temp = null;
  
  // 只有左孩子
  if( node.rchild == null && node.lchild != null ){
    temp == node;
    node = node.lchild;  // 指向左孩子
    node.parent = temp.parent;
    temp = null;
    update_depth( node ) // 更新当前节点信息
  }else if( node.lchild == null && node.rchild != null ){ //只有右孩子
    temp == node;
    node = node.rchild;  // 指向右孩子
    node.parent = temp.parent;
    temp = null;
    update_depth( node ) // 更新当前节点信息
  }else if( node.rchild == null && node.lchild == null){ // 叶子节点
    let parent = node.parent;
    if(parent){
      if (parent.lchild == node){ //当前结点是父节点的左孩子
        parent.lchild = null;    //删掉左孩子
      }
      else{ //当前结点是父节点的右孩子
        parent.rchild = null;
      }
      node = null;
      update_depth( parent ); //更新父节点高度信息
    }else{ //删除的是根
      root = null;
    }
  }else { // 既有左又有右
    let tmp = find_min( node.rchild ) //找到替代元素。temp为叶子节点
    node.val = tmp.val
    //判断当前叶子结点是左孩子还是右孩子。
    let parent = tmp.parent;
    
    if (parent.lchild == temp){
      parent.lchild = null;
    }else{
      parent.rchild = null;
    }
    tmp = null;
    update_depth( parent );
  }
  return parent;
}
// 查找最小值
function find_min( node ){
  if( root.lchild ){
    return find_min( node.lchild );
  }
  return node;
}
// 前序
function preOrder( node  , pos){
    if( !node ) return false;
    console.log( node.val + '-' + node.depth + '-'+ pos );
    
    preOrder( node.lchild ,'l')
    preOrder( node.rchild ,'r')
  }
// 中序
function inOrder( node , pos){
    if( !node ) return false;
    inOrder( node.lchild ,'l');
    
    console.log( node.val + '-' + node.depth + '-'+ pos );
    
    inOrder( node.rchild , 'r');
  }
// 获取节点深度
function get_balance( node ){
    if (node == null)
      return 0;
    return node.depth;
  }
function max(nodel,noder){
    return nodel > noder ? nodel : noder;
  }

class AVLNode {
  constructor(val) {
    this.depth = 0;
    this.parent = null
    this.val = val;
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
    if( this.root === null ){ // 根节点
      this.root = node;
    } else {
      temp = this.insert_val( this.root, node, null ); // 调用真正的插入函数
    }
    if( temp ){
      update_depth( temp );
      this.root = this.AVLTree( temp ); // 检查树是否需要调整
    }else temp = null;
    
    return this.root
  }
  insert_val(root, newNode, parent ){
    if(newNode.val <= root.val){ // 小的节点放在左边
      if(root.lchild === null){ //左节点没有直接放在左边
        root.lchild = newNode;
        newNode.parent = parent;
        return root;
      } else { // 左树有内容的话再搜索下一层的节点
        return this.insert_val(root.lchild, newNode, root)
      }
    } else { // 大的key 放在右边
      if(root.rchild === null){
        root.rchild = newNode
        newNode.parent = parent;
        return root;
      } else { // 搜索下一层
        return this.insert_val( root.rchild, newNode, root )
      }
    }
  }
  /**
   * AVL树调整函数
   * @param  {object} node 需要插入的节点
   * @return {object}    根节点
   */
  AVLTree( node ){
    return AVLTree( this.root, node )
  }
  // LR型 先左旋，在右旋
  LR_rotate( node ){
    return LR_rotate( node )
  }
  // LL型调整函数u
  LL_rotate( node ){
    return LL_rotate( node );
  }
  // RR型调整函数
  RR_rotate( node ){
    return RR_rotate( node )
  }
  // RL型 ，先右旋，再左旋
  RL_rotate( node ){
    return RL_rotate( node )
  }
  // 找到删除的节点，执行删除操作，并根据情况调整AVL树
  /**
   * 删除节点
   * @param  {object} node 根节点
   * @param  {string|number} val 需要删除的数据
   * @return {object} 找到删除结点的情况则返回新根，否则返回NULL
   */
  remove(node, val ){
    let temp = null;
    // 查找节点
    if( node )  return null;
    else if( node.val < val ) remove( node.rchild, val ) // 在右子树查找
    else if( node.val > val ) remove( node.lchild, val ) // 在左子树查找
    else temp = node; // 找到
    
    if(temp){
      if( !node.parent ){
        let tmp = null;
        tmp = remove_val( node, temp ) //执行删除
        return AVLTree(node, tmp); // 更新AVL 树
      }
      return temp;
    }
    return null;
  }
  
  //删除
  remove_val( node ){
    return remove_val( this.root, node )
  }
  // 查找最小值
  find_min( node ){
    return find_min( node )
  }
  
  //前序
  preOrder(){
    preOrder( this.root  )
  }
  
  //中序
  inOrder( node ){
    inOrder( this.root )
  }
}

let balancedBinaryTree = new BalancedBinaryTree(3);
balancedBinaryTree.insert(4);
balancedBinaryTree.insert(5);
balancedBinaryTree.insert(7);
balancedBinaryTree.insert(9);
balancedBinaryTree.insert(12);
balancedBinaryTree.insert(13);
balancedBinaryTree.insert(14);
// balancedBinaryTree.insert(15);
// balancedBinaryTree.insert(16);
// balancedBinaryTree.insert(17);
// balancedBinaryTree.insert(10);
// balancedBinaryTree.insert(18);
// balancedBinaryTree.insert(19);
// balancedBinaryTree.insert(8);
// balancedBinaryTree.insert(6);
balancedBinaryTree.inOrder();

// console.log(balancedBinaryTree.root);








