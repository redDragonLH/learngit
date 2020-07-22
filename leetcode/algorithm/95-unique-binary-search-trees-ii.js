/**
 * 95. 不同的二叉搜索树 II
 * 
 * 给定一个整数 n，生成所有由 1 ... n 为节点所组成的 二叉搜索树 。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
class TreeNode {
    val;
    left;
    right;
    constructor(val) {
        this.val = val;
    }
}
/**
 * 二叉搜索树的性质:左子节点都比根节点小,右节点都比根节点大
 * 
 * 这样的话那么构造出来的二叉树 1-i是左子树,n-i是右子树,这样两边的子树在计算时只是规模减小,逻辑一样
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    
};