/**
 * 112. 路径总和
 * 
 * 给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。
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
 * 递归检查
 * 
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if(!root) return false; // 可能会是空节点
    // 是叶子节点并且val 和sum 相等
    if(root.val === sum && root.left === null && root.right === null) {
        return true;
    }
    // 都为空则没有往下走的必要了
    if(root.left === null && root.right === null) return false;
    // 进行下一个判断之前把此次判断的数据清除
    let count = sum - root.val;
    return hasPathSum(root.left,count) || hasPathSum(root.right,count);
};
/**
 * 执行用时：72 ms, 在所有 JavaScript 提交中击败了95.30%的用户
 * 内存消耗：38.5 MB, 在所有 JavaScript 提交中击败了14.29%的用户
 */

 /**
  * 官方题解  广度优先搜索
  * 
  * java 代码
  * 
  * class Solution {
  *     public Boolean hasPathSum(TreeNode root, int sum) {
  *         if(root == null) {
  *             return false;
  *         }
  *         // Queue 是一个先进先出的管道结构
  *         // 这样的话数据的处理就是有可能是处理一个插入两个～～，所以判断条件也是为空的时候停止～
  *         // 那逻辑上其实是和递归很像的一个方案，只是说会延后处理，两个队列的同一个位置保存则节点和将要和sum 对比的数字
  *         Queue<TreeNode> queNode = new LinkedList<TreeNode>();
  *         Queue<Integer> queVal = new LinkedList<Integer>();
  *         queNode.offer(root);
  *         queVal.offer(root.val);
  * 
  *         while(!queNode.isEmpty()) {
  *             TreeNode now = queNode.poll();
  *             int temp = queVal.poll();
  *             if(now.left == null && now.right == null) {
  *                 if(temp == sum) {
  *                     return true;
  *                 }
  *                 continue;
  *             }
  *             // 就算插入两个也能处理
  *             if(now.left != null) {
  *                 queNode.offer(now.left);
  *                 queVal.offer(now.left.val + temp);
  *             }
  *             if(now.right != null) {
  *                 queNode.offer(now.right);
  *                 queVal.offer(now.rigth.val + temp);
  *             }
  *         }
  *         return false;
  *     }
  * }
  */