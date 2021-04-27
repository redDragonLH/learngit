/**
 * 938. 二叉搜索树的范围和
 *
 * 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
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
 * 二叉搜索树是一种有序排列的二叉树,所以按照顺序轮询就可以,其实不用按顺序也挺好吧~~~
 * 
 * 深度优先
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  const deep = (root) => {
    let count = 0;
    if (!root) {
      return 0;
    }
    count += deep(root.left);
    if (root.val > low && root.val < high) count += root.val;
    count += deep(root.right);
    return count;
  };
  return deep(root)
};
/**
 * 递归要每次构建栈,增加操作
 * 执行用时：260 ms, 在所有 JavaScript 提交中击败了46.14%的用户
 * 内存消耗：64.8 MB, 在所有 JavaScript 提交中击败了23.64%的用户
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
 * 广度优先
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    let sum = 0;
    const q = [root];
    while (q.length) {
        const node = q.shift();
        if (!node) {
            continue;
        }
        if (node.val > high) {
            q.push(node.left);
        } else if (node.val < low) {
            q.push(node.right);
        } else {
            sum += node.val;
            q.push(node.left);
            q.push(node.right);
        }
    }
    return sum;
};