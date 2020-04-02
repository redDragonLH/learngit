const  NODE = {
 val: 0,
 index:0,
 left: null,
 right: null
}


let fun = (node,array) =>  {
 let leftI = node.index * 2 + 1
 let rightI = node.index * 2 + 2
 if(array[leftI]){
  node.left = JSON.parse(JSON.stringify(NODE))
  node.left.index = leftI
  node.left.val = node.left.val = array[leftI]
  fun(node.left,array)
 }
 if(array[rightI]) {
  node.right = JSON.parse(JSON.stringify(NODE))
  node.right.index = rightI
  node.right.val = node.right.val = array[node.right.index]
  fun(node.right,array)
 }
}
module.exports = function(array){
 if(array.length === 0) return false;
 let head = JSON.parse(JSON.stringify(NODE))
 head.val = array[0]
 fun(head,array)
 return head 
}