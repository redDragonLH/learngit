/**
 * 145. 二叉树的后序遍历
 * 
 * 给定一个二叉树，返回它的 后序 遍历。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 递归方案
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let result = [];
    const deep =(root,arr)=> {
        if(!root) return false
        //先左后又最后中间
        root.left && deep(root.left,arr);
        root.right && deep(root.right,arr);
        arr.push(root.val)
    }
    deep(root,result);
    return result
};
/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了68.78%的用户
 * 内存消耗：37.5 MB, 在所有 JavaScript 提交中击败了6.77%的用户
 */