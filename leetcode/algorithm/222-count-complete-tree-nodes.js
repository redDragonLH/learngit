/**
 * 222. 完全二叉树的节点个数
 * 
 * 给出一个完全二叉树，求出该树的节点个数。
 * 
 * 说明：
 * 完全二叉树的定义如下：在完全二叉树中，除了最底层节点可能没填满外，其余每层节点数都达到最大值，并且最下面一层的节点都集中在该层最左边的若干位置。若最底层为第 h 层，则该层包含 1~ 2h 个节点。
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
var countNodes = function(root) {
    let num = 0;
    const getNode=(root)=> {
        if(!root) {return false;}
        num++
        getNode(root.left);
        getNode(root.right)
    }
    getNode(root)
    return num;
};

/**
 * 
 * 最直观的一种方式
 * 但是h层往上的节点不需要循环的
 * 
 * 执行用时：136 ms, 在所有 JavaScript 提交中击败了34.94%的用户
 * 内存消耗：57 MB, 在所有 JavaScript 提交中击败了5.18%的用户
 */