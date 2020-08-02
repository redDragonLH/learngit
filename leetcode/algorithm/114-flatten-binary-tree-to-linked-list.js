/**
 * 114. 二叉树展开为链表
 * 
 * 给定一个二叉树，原地将它展开为一个单链表。
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
 * 使用前缀遍历，先把数据提取出来，然后循环放入二叉树内
 * 
 * 前缀遍历会从左到右，从上到下遍历所有二叉树节点，正好与当前问题顺序一样
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    let list = [];
    preorderTraversal(root,list)
    let prev = root;
    for (let i = 1; i < array.length; i++) {
        prev.right = list[i];
        prev.left = null;
        prev = prev.right
    }
};
const preorderTraversal  = (root,list)=> {
    if(root) {
        list.push(root);
        preorderTraversal(root.left,list)
        preorderTraversal(root.right,list)
    }
}

/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了22.09%的用户
 * 内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了53.85%的用户
 */

/**
  * 官方题解 ： 寻找前驱节点
  * 
  * 对于当前节点，如果其左子节点不为空，则在其左子树中找到最右边的节点，作为前驱节点，
  * 将当前节点的右子节点赋给前驱节点的右子节点，然后将当前节点的左子节点赋给当前节点的右子节点，
  * 并将当前节点的左子节点设为空。对当前节点处理结束后，继续处理链表中的下一个节点，直到所有节点都处理结束
  * 
  */

var flatten = function (root) {
    let curr = root;
    while (curr !== null) {
        if(curr.left !== null) { // 因为要把curr 的right 放到 left的最右侧节点，如果没有就不用放~
            const next = curr.left;
            let pardecessor = next;
            while (pardecessor.right !== null) {
                pardecessor = pardecessor.right;
            }
            pardecessor.right = curr.right;
            curr.left = null;
            curr.right = next;
        }
        curr = curr.right;
    }
}