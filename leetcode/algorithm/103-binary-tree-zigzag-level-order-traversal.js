/**
 * 103. 二叉树的锯齿形层序遍历
 * 
 * 给定一个二叉树，返回其节点值的锯齿形层序遍历。（即先从左往右，再从右往左进行下一层遍历，以此类推，层与层之间交替进行）。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 使用序号标记位置与奇偶吗
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const arr = []
    if(!root) return arr;
    deep(root,0,arr)
    return arr
};
const deep = (root,pos,arr)=> {
    const parity = pos%2;
    if(!arr[pos]){
        arr[pos]=[];
    };
    !parity ? arr[pos].push(root.val) : arr[pos].unshift(root.val);
    root.left && deep(root.left, pos+1, arr);
    root.right && deep(root.right, pos+1, arr);
}
/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了82.03%的用户
 * 内存消耗：40 MB, 在所有 JavaScript 提交中击败了5.00%的用户
 */
/**
 * 官方题解也就这样了
 * 
 */