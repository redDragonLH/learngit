/**
 * 530. 二叉搜索树的最小绝对差
 *
 * 给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 
 * 二叉搜索树可以看成一个升序数组,
 * 二叉搜索树中序遍历得到的值序列是递增有序的
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
    let ans = Number.MAX_SAFE_INTEGER, pre = -1;
    const dfs = (root) => { // 中序遍历:左->根-> 右
        if (root === null) {
            return;
        }
        dfs(root.left); // 首先进行左子树的深入,到底之后在进行回溯,处理数据
        if (pre == -1) {// 当前节点进行差的对比
            pre = root.val;
        } else {
            ans = Math.min(ans, root.val - pre);
            pre = root.val;
        }
        dfs(root.right);
    }
    dfs(root);
    return ans;
};