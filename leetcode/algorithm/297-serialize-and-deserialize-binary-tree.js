/**
 * 297. 二叉树的序列化与反序列化
 * 
 * 序列化是将一个数据结构或者对象转换为连续的比特位的操作，进而可以将转换后的数据存储在一个文件或者内存中，同时也可以通过网络传输到另一个计算机环境，采取相反方式重构得到原数据。
 * 请设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let arr = [];
    preOrder(root,arr);
    return JSON.stringify(arr);    
};
/**
 * 左子节点 2 * i
 * 右子节点 2 * i + 1
 */
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    function TreeNode(val,i) {
        this.val = val;
        this.index = i
        this.left = this.right = null;
     }
    // 序列化为数组
    let arr = JSON.parse(data);
    let map = new Map();
    let head = new TreeNode(arr[0],0);
    map.set(0,head)

    for (let i = 1; i < arr.length; i++) {
        if(typeof arr[i] === 'number') {
            let node = new TreeNode(arr[i],i);
            if(i%2) {
                let prev =parseInt(i/2);
                prevNode = map.get(prev)
                !!prevNode && (prevNode.left = node)
            }else {
                let prev =parseInt(i/2-1);
                prevNode = map.get(prev)
                !!prevNode && (prevNode.right = node)
            }
            map.set(i,node)
        }
    }
    return head;
};

var preOrder = (root,arr) => {
    if (root == null) return;
    arr[root.index] = root.val;
    preOrder(root.left,arr);
    preOrder(root.right,arr);
}
/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
console.log(deserialize('[1,2,3,null,null,4,5]'));

console.log(deserialize(serialize(deserialize('[1,2,3,null,null,4,5]'))));
