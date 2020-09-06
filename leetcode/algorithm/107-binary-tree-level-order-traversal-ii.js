/**
 * 107. 二叉树的层次遍历 II
 * 
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 这肯定就是广度优先搜索了
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    let result = []
    if(!root) return result;

    let queue = [root];
    while(queue.length){
        const levelSize = queue.length;
        let floorArr = [];
        for (let i = 0; i < levelSize; i++) { // 无所谓queue 里面的具体数据，
            let node = queue.shift()
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
            floorArr.push(node.val);
        }
        result.unshift(floorArr);
    }
    return result;
};

/**
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了75.40%的用户
 * 内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了5.19%的用户
 */