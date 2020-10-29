/**
 * 129. 求根到叶子节点数字之和
 * 
 * 给定一个二叉树，它的每个结点都存放一个 0-9 的数字，每条从根到叶子节点的路径都代表一个数字。
 * 例如，从根到叶子节点路径 1->2->3 代表数字 123。
 * 计算从根到叶子节点生成的所有数字之和。
 * 说明: 叶子节点是指没有子节点的节点。
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
 * @return {number}
 */
var sumNumbers = function(root) {
    const arr = []
    const deep = (root,str,arr) => {
        if(!root) arr.push(Number(str));
        str+=root.val;
        deep(root.left,str,arr)
        deep(root.right,str,arr)
    }
    deep(root,'',arr);
    console.log(arr);
};
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了89.80%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了7.29%的用户
 */