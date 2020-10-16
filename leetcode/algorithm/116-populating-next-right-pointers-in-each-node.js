/**
 * 116. 填充每个节点的下一个右侧节点指针
 * 
 * 给定一个完美二叉树，其所有叶子节点都在同一层，每个父节点都有两个子节点。二叉树定义如下：

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
 * 填充它的每个 next 指针，让这个指针指向其下一个右侧节点。如果找不到下一个右侧节点，则将 next 指针设置为 NULL。
 * 初始状态下，所有 next 指针都被设置为 NULL。
 */

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * 左子节点的right 是右子节点,右子节点的下一个右子节点是父节点的next节点的左子节点
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  if (root) {
    console.log(root);
    root.left && (root.left.next = root.right);
    root.right && root.next && (root.right.next = root.next.left);
    if (root.left) {
      connect(root.left);
      connect(root.right);
    }
  }
  return root;
};

/**
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了90.16%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了8.59%的用户
 */
