class Node{
  constructor( key ){
    this.key = key,
    this.left = null,
    this.right = null
  }  
}
const insertNode = function(node, newNode){
  if(newNode.key <= node.key){ // 小的节点放在左边
    if(node.left === null){ //左节点没有直接放在左边
      node.left = newNode;
    } else { // 左树有内容的话再搜索下一层的节点
      insertNode(node.left,newNode)
    }
  } else { // 大的key 放在右边
    if(node.right === null){
      node.right = newNode
    } else { // 搜索下一层
      insertNode(node.right, newNode)
    }
  }
}
class BinaryTreeNode {
  constructor(){
    this.root = null;
  }
  insert(key){
    let newNode = new Node(key)
    if(this.root === null){ // 根节点
      this.root = newNode;
    }else{
      insertNode(this.root,newNode);
    }
  }
  getroot(){
    return this.root;
  }
}
let binaryTree = new BinaryTreeNode();
binaryTree.insert(10);
console.log(binaryTree.getroot());
binaryTree.insert(19);
console.log(binaryTree.getroot());
binaryTree.insert(9);
console.log(binaryTree.getroot());