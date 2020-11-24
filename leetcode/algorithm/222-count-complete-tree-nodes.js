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

var countNodes = function(root) {
    if(!root) return 0;
    return countNodes(root.left)+countNodes(root.right)+1;
};
/**
 * 
 * 优化版,优化还挺多
 * 
 * 执行用时：120 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：57.1 MB, 在所有 JavaScript 提交中击败了5.18%的用户
 */

 /**
  * 官方题解
  * 
  * 二分查找
  */
const exists = (root, level, k) => {
    let bits = 1 << (level - 1);
    let node = root;
    while (node !== null && bits > 0) {
        if (!(bits & k)) {
            node = node.left;
        } else {
            node = node.right;
        }
        bits >>= 1;
    }
    return node !== null;
}

var countNodes = function(root) {
    if (root === null) {
        return 0;
    }
    let level = 0;
    let node = root;
    while (node.left !== null) {
        level++;
        node = node.left;
    }
    let low = 1 << level, high = (1 << (level + 1)) - 1;
    while (low < high) {
        const mid = Math.floor((high - low + 1) / 2) + low;
        if (exists(root, level, mid)) {
            low = mid;
        } else {
            high = mid - 1;
        }
    }
    return low;
};