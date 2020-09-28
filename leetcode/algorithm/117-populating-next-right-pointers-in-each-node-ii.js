/**
 * 117. 填充每个节点的下一个右侧节点指针 II
 * 
 * 给定一个二叉树
 * 
 *    struct Node {
 *      int val;
 *      Node *left;
 *      Node *right;
 *      Node *next;
 *     }
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
 * 失败,逻辑考虑不周
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) return root;
    let arr = [root];
    let count = 1;
    for (let i = 0; i < count; i++) {
        arr[i-1] && (arr[i].next = arr[i-1]);
        arr[i].right && arr.push(arr[i].right);
        arr[i].left && arr.push(arr[i].left);
    }
    return root;
};
/**
 * 官方题解,递归解法
 */
var connect = function(root) {
    if (root === null) {
        return null;
    }
    const queue = [root];
    while (queue.length) { // 得是两层循环,有一个是否继续循环的判断,一个处理数据的循环
        const n = queue.length;
        let last = null;
        for (let i = 1; i <= n; ++i) { // 处理数据循环
            let f = queue.shift();
            if (f.left !== null) {
                queue.push(f.left);
            }
            if (f.right !== null) {
                queue.push(f.right);
            }
            // 为啥是不等于1呢
            // 起始就是1,也就是因为第一个的last是空的没法设置
            if (i !== 1) {
                last.next = f;
            }
            last = f;
        }
    }
    return root;
};