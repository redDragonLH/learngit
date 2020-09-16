/**
 * 226. 翻转二叉树
 *
 * 翻转一棵二叉树。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  bfs(root);
  return root;
};
const bfs = (root) => {
  if (!root) return;
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  bfs(root.left);
  bfs(root.right);
};

/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了21.17%的用户
 * 内存消耗：37.1 MB, 在所有 JavaScript 提交中击败了42.64%的用户
 */