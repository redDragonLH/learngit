/**
 * 已废弃
 */

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
 * 第三方的节点组织方式，节点内容放在本类内，而不是新建一个节点类
 * 此方式组织结构清晰，类内方法跟随节点，
 * 但本人认为可能会过多占用内存（原型方法不会过多占用内存，比预计的要占用的少很多）
 *
 * 把节点分离出来的组织方式，虽然结构不甚清晰，
 * 操作节点必须配合另一个类，但应该是在我认知内最省内存的方法（性价比存疑）
 */
class BalanceTreeNode {
  constructor(data) {
    this.data = data;
    this.bf = 0;
  }
  setL( node ){
    this.lchild = node;
  }
  setR( node ){
    this.rchild = node;
  }
  search( key ){
    if( key == this.data ){
      return {find:true,node:this};
    }else if( key < this.data ){
      if( !this.lchild ){
        return {find:false,node:this}
      }
      return this.lchild.search( key )
    }else{
      if( !this.rchild ){
        return{find:false,node:this}
      }
       return this.rchild.search(key);
    }
  }
  insert( key ){
    let searchResult = this.search( key );
    if( !searchResult.find ){
      let s = new BalanceTreeNode( key );
      if( key < searchResult.node.data){
        searchResult.node.lchild = s;
      }else{
        searchResult.node.rchild = s;
      }
      return true;
    }
    return false;
  }
  delete(){
    if( !this.rchild ){
      this.data = this.lchild ? this.lchild.data: null
      this.lchild = this.lchild ?this.lchild.lchild : null
      this.rchild = this.lchild ?this.lchild.rchild : null
      return this;
    }else{
      if(!this.rchild.lchild){
        this.data = this.rchild.data
        this.rchild = this.rchild.rchild
        return this.rchild;
      }
      let q = this;
      let s = this.rchild;
      while( s.rchild ){
        q = s;
        s = s.rchild;
      }
      this.data = s.data;
      if( q != this ){
        q.rchild = s.lchild;
      } else {
        q.lchild = s.lchild;
      }
    }
  }
  deleteKey( key ){
    if( this.data == key ){
      this.delete()
    }else if ( this.data > key ) {
      this.lchild.deleteKey(key)
    }else{
      this.rchild.deleteKey(key)
    }
  }
}
let balanceTreeNode = new BalanceTreeNode(10);
balanceTreeNode.insert(9)
// console.log(balanceTreeNode);
balanceTreeNode.insert(11)
// console.log(balanceTreeNode);
balanceTreeNode.insert(8)
// console.log(balanceTreeNode);
balanceTreeNode.insert(12)
// console.log(balanceTreeNode);
balanceTreeNode.insert(7)
// console.log(balanceTreeNode);
balanceTreeNode.insert(13)
// console.log(balanceTreeNode);
balanceTreeNode.insert(6)
// console.log(balanceTreeNode);
balanceTreeNode.insert(14)
// console.log(balanceTreeNode);
balanceTreeNode.deleteKey(14)
balanceTreeNode.deleteKey(6)
balanceTreeNode.deleteKey(13)
balanceTreeNode.deleteKey(7)
balanceTreeNode.deleteKey(12)
balanceTreeNode.deleteKey(8)
balanceTreeNode.deleteKey(11)
balanceTreeNode.deleteKey(9)
console.log('--delete--');
console.log(balanceTreeNode);
