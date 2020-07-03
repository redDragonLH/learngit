/**
 * 108. 将有序数组转换为二叉搜索树
 * 
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * 关键词： 升序排列，有序数组，平衡二叉搜索树
 * 
 * 关键是平衡二叉树，左右子树高度不超过1，这说明根节点应该是数组中的中间元素，
 * 然后节点的规律是根节点大于左子节点，小于右子节点，这也可以使用二分法实现
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const toTree = (nums,start, end) => {
        if (end < start) return null;
        let mid = start + parseInt((end - start)/2);
        let head = new TreeNode(nums[mid]);
        head.left = toTree(nums,start,mid-1)
        head.right = toTree(nums,mid+1,end)
        return head;
    }

    return toTree(nums,0,nums.length-1)
};
console.log(sortedArrayToBST([-10,-3,0,5,9]));

/**
 * 测试用例并不是唯一答案～～
 * 
 * 执行用时：172 ms, 在所有 JavaScript 提交中击败了5.63%的用户
 * 内存消耗：45.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */