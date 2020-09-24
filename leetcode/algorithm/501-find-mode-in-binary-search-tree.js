/**
 * 501. 二叉搜索树中的众数
 * 
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 假定 BST 有如下定义：
 *  结点左子树中所含结点的值小于等于当前结点的值
 *  结点右子树中所含结点的值大于等于当前结点的值
 *  左子树和右子树都是二叉搜索树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if(!root) return [];
    const obj = {};
    deep(root,obj);
    let key = Object.keys(obj);
    let result = [key[0]];
    let temp = obj[key[0]]
    for (let i = 1; i < key.length; i++) {
        if(temp < obj[key[i]]) {
            temp= obj[key[i]];
            result = [key[i]]
        }else if(temp === obj[key[i]]) {
            result.push(key[i])
        }
    }
    return result;
};
const deep =(root,obj)=> {
    if(!root) return false;
    obj[root.val] ? obj[root.val]++: obj[root.val] = 1;
    deep (root.left,obj)
    deep (root.right,obj)
}

/**
 * 比较啰嗦,有些代码可以省,
 * 
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了23.48%的用户
 * 内存消耗：44.9 MB, 在所有 JavaScript 提交中击败了40.46%的用户
 */