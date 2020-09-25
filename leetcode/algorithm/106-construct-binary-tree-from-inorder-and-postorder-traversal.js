/**
 * 106. 从中序与后序遍历序列构造二叉树
 * 
 * 根据一棵树的中序遍历与后序遍历构造二叉树。
 * 注意:
 *    你可以假设树中没有重复的元素。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 后序遍历可以确定根节点的位置(最后一个)
 * 然后用找到的根节点把中序遍历分为左右两部分,然后继续递归此逻辑就能构建成二叉树
 * 
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    let post_idx;
    const idx_map = new Map();
    const helper = (in_left, in_right) => {
        // 如果这里没有节点构造二叉树了，就结束
        if (in_left > in_right) {
            return null;
        }

        // 选择 post_idx 位置的元素作为当前子树根节点
        const root_val = postorder[post_idx];
        const root = new TreeNode(root_val);

        // 根据 root 所在位置分成左右两棵子树
        const index = idx_map.get(root_val);

        // 下标减一
        post_idx--;
        // 构造右子树
        root.right = helper(index + 1, in_right);
        // 构造左子树
        root.left = helper(in_left, index - 1);
        return root;
    }

    // 从后序遍历的最后一个元素开始
    post_idx = postorder.length - 1;

    // 建立（元素，下标）键值对的哈希表
    let idx = 0;
    inorder.forEach((val, idx) => {
        idx_map.set(val, idx);
    });
    return helper(0, inorder.length - 1);
};