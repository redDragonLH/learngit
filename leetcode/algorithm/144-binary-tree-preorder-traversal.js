/**
 * 144. 二叉树的前序遍历
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 *
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
 * 前中后
 * 前序:中左右
 * 中序:左中右
 * 后序:左右中
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root, result = []) {
  if (!root) return result;
  const preOrder = (root) => {
    if (root == null) return;
    result.push(root.val);
    preOrder(root.left);
    preOrder(root.right);
  };
  preOrder(root);
  return result;
};

/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了67.73%的用户
 * 内存消耗：37.8 MB, 在所有 JavaScript 提交中击败了15.57%的用户
 */
