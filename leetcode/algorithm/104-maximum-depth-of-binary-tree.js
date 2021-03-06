/**
 * 104. 二叉树的最大深度
 *
 * 给定一个二叉树，找出其最大深度。
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 说明: 叶子节点是指没有子节点的节点。
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
 * @return {number}
 */
var maxDepth = function (root, deep = 0) {
  if (!root) return deep;
  return Math.max(
    maxDepth(root.left, deep + 1),
    maxDepth(root.right, deep + 1)
  );
};
/**
 * 效率好多了
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了53.46%的用户
 * 内存消耗：40.9 MB, 在所有 JavaScript 提交中击败了8.33%的用户
 */

/**
 class Solution {
    public int maxDepth(TreeNode root) {
        return deepCount(root,0);
    }
    public int deepCount(TreeNode root,int deep) {
        if(root== null){return deep;}
        return Math.max(deepCount(root.left,deep+1),deepCount(root.right,deep+1));
    }
}
 */
/**
 * 执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
 * 内存消耗：39 MB, 在所有 Java 提交中击败了36.78%的用户
 */

/**
  * 题解方案: 深度优先遍历
  * 
    class Solution {
        public int maxDepth(TreeNode root) {
            if (root == null) {
                return 0;
            }
            Queue<TreeNode> queue = new LinkedList<TreeNode>();
            queue.offer(root);
            int ans = 0;
            while (!queue.isEmpty()) {
                int size = queue.size();
                while (size > 0) {
                    TreeNode node = queue.poll();
                    if (node.left != null) {
                        queue.offer(node.left);
                    }
                    if (node.right != null) {
                        queue.offer(node.right);
                    }
                    size--;
                }
                ans++;
            }
            return ans;
        }
    }

  */
