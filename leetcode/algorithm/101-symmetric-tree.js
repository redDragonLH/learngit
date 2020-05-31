/**
 * 101。 镜像对称二叉树
 * 
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
 * @return {boolean}
 */
var arrToTree = require('../../dataStructure/arrayToTree');
var Tree = require('../../dataStructure/BinaryTree');
// console.log(Tree);

// Tree.preOrderTraverseNode(arrToTree([1,2,3,4,5,6]))
var isSymmetric = function(root) {
    if(!root)return true;
    return compare(root.left,root.right)
};
const compare = (left,right)=> {
    if(left === null && right === null) return true
    if(left && right === null || left === null && right) return false
    if(left.val == right.val) {
        return compare(left.left,right.right) && compare(left.right,right.left)
    }
    return false;
}
console.log(isSymmetric(arrToTree([1,2,2,3,4,4,3])))
/**
 * 执行用时 :80 ms, 在所有 JavaScript 提交中击败了42.66%的用户
 * 内存消耗 :36.8 MB, 在所有 JavaScript 提交中击败了10.00%的用户
 */