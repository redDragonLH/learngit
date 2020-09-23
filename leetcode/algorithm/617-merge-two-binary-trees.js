/**
 * 617. 合并二叉树
 * 
 * 给定两个二叉树，想象当你将它们中的一个覆盖到另一个上时，两个二叉树的一些节点便会重叠。
 * 你需要将他们合并为一个新的二叉树。合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 NULL 的节点将直接作为新二叉树的节点。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    merge(t1,t2)
    return t1
};
const merge =(t1,t2)=> {

    if(t1.left && t2.left) {
        merge(t1.left, t2.left)
    }
    if(t1.right && t2.right) {
        merge(t1.right, t2.right)
    }
    if(!t1.left && t2.left) {
        t1.left = t2.left
    }
    if(!t1.right && t2.right) {
        t1.right = t2.right
    }
    t1.val += t2.val;
}
/**
 * 执行用时：136 ms, 在所有 JavaScript 提交中击败了30.06%的用户
 * 内存消耗：45 MB, 在所有 JavaScript 提交中击败了17.50%的用户
 */

 /**
  * 精简高效率写法版
  */
 var mergeTrees = function(t1, t2) {
    if(t1 && t2){ // 当前的事当前做
        t1.val += t2.val;
        t1.left = mergeTrees(t1.left,t2.left); // 重组树的较好方案,在返回时重新获取
        t1.right = mergeTrees(t1.right,t2.right);
    } 
    return t1 || t2;
};