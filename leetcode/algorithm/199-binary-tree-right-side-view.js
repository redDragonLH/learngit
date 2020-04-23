/**
 * 199. 二叉树的右视图
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 肯定会出现右子树半道断了的问题，必须检查当前层从右向左检查
 * 
 * 思路： 从右向左看，每层必能看到一个数字，但是不一定是在右子树，右子树可能会在中间断开，这样看到的数字就可能是在左子树，
 *      这样的话其实还是要遍历所有的节点，找到需要展示的节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let array = []; // 用数组保存每层能看到的节点，而且可以用下标去代表当前层，遍历当前层级，如果数组对应层级下标没有数据，则填充
    let view =(node,i,p) => { // 递归
        if(!node)return false;
        typeof array[i] !== 'number' ? (array[i] = node.val) : '' // 当前下标没有数据
        i = i+1 // 下一层级下标
        view(node.right,i);
        view(node.left,i)
    };
    view(root,0);
    return array;
};
/**
 * 执行用时 :60 ms, 在所有 JavaScript 提交中击败了95.81%的用户
 * 内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */