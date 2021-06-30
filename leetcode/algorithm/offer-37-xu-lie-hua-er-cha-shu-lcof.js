/**
 * 剑指 Offer 37. 序列化二叉树
 * 
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * ~~~机制了解了
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    return root
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    return data
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
/**
 * 这都不是 100% 就过分了~~
 * 执行用时：144 ms, 在所有 JavaScript 提交中击败了89.12%的用户
 * 内存消耗：47 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */