/**
 * 110. 平衡二叉树
 *
 * 给定一个二叉树，判断它是否是高度平衡的二叉树。
 *
 * 本题中，一棵高度平衡二叉树定义为：
 *      一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 根节点每次都要过一遍,浪费太过严重
 * 
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    if (root == null) {
        return true;
    } else {
        // 这个节点的子节点绝对值小于等于1则进行子节点的判断
        return Math.abs(height(root.left) - height(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
    }
};
const height = (root) => {
    if (root == null) {
        return 0;
    } else {
        return Math.max(height(root.left), height(root.right)) + 1;
    }
}

/**
 * 执行用时：108 ms, 在所有 JavaScript 提交中击败了24.67%的用户
 * 内存消耗：42.8 MB, 在所有 JavaScript 提交中击败了28.97%的用户
 */

 /**
  * 官方题解 自底向上递归
  * 
  * 就是先深入到最底层节点,从最底层节点开始计算,和我的失败品的思路一样
  */
 
/**
 * java 代码
 * 
 * class Solution {
 *  public boolean isBalanced(TreeNode root) {
 *      return height(root) >=0;
 *  }
 *  public int height (root) {
 *      if(root == null) {
 *          return 0;
 *      }
 *      int leftHeight = height(root.left);
 *      int rightHeight = height(root.right);
 *      if(leftHeight == -1 || rightHeight == -1 || Math.abs(leftHeight - rightHeight) > 1) {
 *          return -1;
 *      } else {
 *          return Math.max(leftHeight, rightHeight) +1;
 *      }
 *  }
 * }
 */

/**
 * 执行用时：1 ms, 在所有 Java 提交中击败了99.76%的用户
 * 内存消耗：39.7 MB, 在所有 Java 提交中击败了81.13%的用户
 */