/**
 * 112. 路径总和
 * 
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
 * 说明: 叶子节点是指没有子节点的节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 递归检查
 * 
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false; // 可能会是空节点
    // 是叶子节点并且val 和sum 相等
    if(root.val === sum && root.left === null && root.right === null) {
        return true;
    }
    // 都为空则没有往下走的必要了
    if(root.left === null && root.right === null) return false;
    // 进行下一个判断之前把此次判断的数据清除
    let count = sum - root.val;
    return hasPathSum(root.left,count) || hasPathSum(root.right,count);
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了95.30%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */