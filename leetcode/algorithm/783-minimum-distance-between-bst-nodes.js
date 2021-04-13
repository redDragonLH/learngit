/**
 * 783. 二叉搜索树节点最小距离
 *
 * 给你一个二叉搜索树的根节点 root ，返回 树中任意两不同节点值之间的最小差值 。
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
 * 二叉搜索树~~~有序排列,所以最小距离肯定在相邻两点
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {
  let min = Number.MAX_SAFE_INTEGER;
  const deep = (pre, node) => {
    if (!node) return false;
    deep(root.val, node.left);
    min = Math.min(min, Math.abs(root.val - pre));
    deep(root.val, node.right);
  };
  deep(min, root);
  return min;
};

/**
 * 官方题解
 */
var minDiffInBST = function (root) {
  let ans = Number.MAX_SAFE_INTEGER,
    pre = -1;
  const dfs = (root) => {
    if (root === null) {
      return;
    }
    dfs(root.left);
    if (pre == -1) {
      pre = root.val;
    } else {
      ans = Math.min(ans, root.val - pre);
      pre = root.val;
    }
    dfs(root.right);
  };
  dfs(root);
  return ans;
};
