/**
 * 102. 二叉树的层序遍历
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 思路： 以前做过一个从右侧看二叉树的题，可以参考那道题，递归遍历的时候输入层级
 * @param {TreeNode} root
 * @return {number[][]}
 * 
 * 使用变量标示层级，因为遍历就是中序遍历，这样遍历的节点 变量层级相同，并且是从左到右遍历，这样直接push到相应的二维数组的位置即可
 */
let levelOrder = (root) => {
    let nodearray = []
    let inOrderTraverseNode = (node, level = 0) => {
        if( node !== null ){
            nodearray[level] ? nodearray[level].push(node.val) : nodearray[level] = [node.val]
            level++;
            inOrderTraverseNode(node.left,level)
            inOrderTraverseNode(node.right,level)
          }
    }
    inOrderTraverseNode(root)
    return nodearray;

};

/**
 * 时间复杂度：O(n), 所有节点遍历一遍；
 * 空间复杂度：O(1), 只使用了常量来保存层级
 * 
 * 执行用时 :76 ms, 在所有 JavaScript 提交中击败了34.52%的用户
 * 内存消耗 :35 MB, 在所有 JavaScript 提交中击败了83.33%的用户
 */