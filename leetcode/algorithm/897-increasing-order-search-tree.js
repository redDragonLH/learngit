/**
 * 897. 递增顺序搜索树
 *
 * 给你一棵二叉搜索树，请你 按中序遍历 将其重新排列为一棵递增顺序搜索树，使树中最左边的节点成为树的根节点，并且每个节点没有左子节点，只有一个右子节点。
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
 * 中序遍历:左节点,根节点,右节点
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function (root) {
  const res = [];
  inorder(root, res);

  const dummyNode = new TreeNode(-1);
  let currNode = dummyNode;
  for (const value of res) {
    currNode.right = new TreeNode(value);
    currNode = currNode.right;
  }
  return dummyNode.right;
};
/**
 * 预先处理为顺序数组格式
 * @param {*} node 
 * @param {*} res 
 * @returns 
 */
const inorder = (node, res) => {
  if (!node) {
    return;
  }
  inorder(node.left, res);
  res.push(node.val);
  inorder(node.right, res);
};
