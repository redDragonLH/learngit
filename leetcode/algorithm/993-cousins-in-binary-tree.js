/**
 * 993. 二叉树的堂兄弟节点
 *
 * 在二叉树中，根节点位于深度 0 处，每个深度为 k 的节点的子节点位于深度 k+1 处。
 * 如果二叉树的两个节点深度相同，但 父节点不同 ，则它们是一对堂兄弟节点。
 * 我们给出了具有唯一值的二叉树的根节点 root ，以及树中两个不同节点的值 x 和 y 。
 * 只有与值 x 和 y 对应的节点是堂兄弟节点时，才返回 true 。否则，返回 false。
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
 * 暴力解法,但是还有个两个节点不能是同父节点的限制,还得加判断逻辑,比较麻烦
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function (root, x, y) {
    let deepArr = [-1, -2];
    const indeep = (root, deep, prev) => {
        if (!root) return false;
        deep++;
        if (root.val === x) {
            deepArr[0] = deep;
        } else if (root.val === y) {
            deepArr[1] = deep;
        }
        if (
            (root.left && (root.left.val === x || root.left.val === y)) &&
            (root.right && (root.right.val === x || root.right.val === y))
        )
            return false;
        indeep(root.left, deep);
        indeep(root.right, deep);
    };
    indeep(root, 0);
    return deepArr[0] === deepArr[1];
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了34.67%的用户
 * 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了14.66%的用户
 */