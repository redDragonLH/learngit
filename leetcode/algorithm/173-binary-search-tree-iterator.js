/**
 * 173. 二叉搜索树迭代器
 * 
 * 实现一个二叉搜索树迭代器类BSTIterator ，表示一个按中序遍历二叉搜索树（BST）的迭代器：
 *  * BSTIterator(TreeNode root) 初始化 BSTIterator 类的一个对象。BST 的根节点 root 会作为构造函数的一部分给出。指针应初始化为一个不存在于 BST 中的数字，且该数字小于 BST 中的任何元素。
 *  * boolean hasNext() 如果向指针右侧遍历存在数字，则返回 true ；否则返回 false 。
 *  * int next()将指针向右移动，然后返回指针处的数字。
 * 
 * 注意，指针初始化为一个不存在于 BST 中的数字，所以对 next() 的首次调用将返回 BST 中的最小元素。
 * 
 * 你可以假设 next() 调用总是有效的，也就是说，当调用 next() 时，BST 的中序遍历中至少存在一个下一个数字。
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
 *  前序遍历： 根节点 -> 左子树 -> 右子树
 *  中序遍历： 左子树 -> 根节点 -> 右子树
 *  后序遍历： 左子树 -> 右子树 -> 根节点
 */

/**
 * 第一个解法仍然是预处理，初始化时就把二叉树进行中序遍历保存到数组中
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {

};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {

};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {

};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

/**
 * 解法二 栈迭代
 */
var BSTIterator = function (root) {
    this.cur = root;
    this.stack = [];
};

BSTIterator.prototype.next = function () {
    // 应该和中序遍历有关
    // 迭代版中序遍历
    while (this.cur) {
        // 把当前左子树都怼到栈里直到当前这条线左子树都放进去
        this.stack.push(this.cur);
        this.cur = this.cur.left;
    }
    // 到这里时已经是二叉树一条线的叶子节点上，所以获取数据后就把cur置为 右节点（中序遍历）
    this.cur = this.stack.pop();
    const ret = this.cur.val;
    this.cur = this.cur.right;
    return ret;
};

BSTIterator.prototype.hasNext = function () {
    return this.cur !== null || this.stack.length;
};