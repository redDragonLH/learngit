/**
 * 94. 二叉树的中序遍历
 * 
 * 给定一个二叉树，返回它的中序 遍历。
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
var inorderTraversal = function(root) {
    const rsult = [];
    if(!root) return result;
    getData(root,result);
    return rsult;
};
const getData = (root,arr) => {
    if(root) return ;
    getData(root.left,arr);
    result.push(root.val);
    getData(root.right,arr);
}

/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了33.24%的用户
 * 内存消耗：38.4 MB, 在所有 JavaScript 提交中击败了5.29%的用户
 */