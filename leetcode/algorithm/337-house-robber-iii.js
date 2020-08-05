/**
 * 337. 打家劫舍 III
 *
 * 在上次打劫完一条街道之后和一圈房屋后，小偷又发现了一个新的可行窃的地区。这个地区只有一个入口，我们称之为“根”。
 * 除了“根”之外，每栋房子有且只有一个“父“房子与之相连。一番侦察之后，聪明的小偷意识到“这个地方的所有房屋的排列类似于一棵二叉树”。
 * 如果两个直接相连的房子在同一天晚上被打劫，房屋将自动报警。
 *
 * 计算在不触动警报的情况下，小偷一晚能够盗取的最高金额。
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
var rob = function (root) {};

/**
 * 暴力递归法
 * 
 * 也就是每个节点和相隔的孙节点以及 直接的子节点两个哪个大留哪个
 * 
 * 递归都是从最开始输入,从最后开始计算
 * 
 * 树这边还是理解的不太清楚,想象力不够
 * 
 * 没有尾递归优化
 */
var robViolentRecursion = function (root) {
    if (root == null) return 0;
    let  money = root.val;
    // 获取隔代节点
    if (root.left != null) {
        money += (rob(root.left.left) + rob(root.left.right));
    }

    if (root.right != null) {
        money += (rob(root.right.left) + rob(root.right.right));
    }

    return Math.max(money, rob(root.left) + rob(root.right));
};

/**
 * 记忆化 - 解决重复子问题
 * 
 * 上一解法在计算时 节点在最差情况下会计算三遍, 父节点,子节点,孙节点,这种情况下可以考虑缓存下数据,防止重复计算
 * 
 * 
 */

 var robRecursionMemoization = function (root) {
    let memo = new Map(); // 使用Map保存已经计算过的数据 // 以空间换时间
    return robInternal(root, memo);

 };
 const robInternal = (root, memo) => {
    if (root == null) return 0;
    if (memo.has(root)) return memo.get(root);
    let money = root.val;
    if (root.left != null) {
        money += (robInternal(root.left.left, memo) + robInternal(root.left.right, memo));
    }
    if (root.right != null) {
        money += (robInternal(root.right.left, memo) + robInternal(root.right.right, memo));
    }
    let result = Math.max(money, robInternal(root.left, memo) + robInternal(root.right, memo));
    memo.set(root, result);
    return result;
 }

 /**
  * 解法三 
  * 感觉是动态规划,都是递归的底子,或者树形数据结构也就是递归或者循环方便点
  * 
  */

 var rob = function (root) {
    let result = robInternal(root);
    return Math.max(result[0], result[1]);
}

const robInternal = (root) =>{
    if (root == null) return [0,0];
    let result = [];

    let left = robInternal(root.left);
    let right = robInternal(root.right);

    result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    result[1] = left[0] + right[0] + root.val;

    return result;
}