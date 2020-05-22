/**
 * 105. 从前序与中序遍历序列构造二叉树
 * 
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 * 
 * 注意:
 * 你可以假设树中没有重复的元素。
 */

/**
 * 思路
 * 
 * 根据中序遍历和前序遍历的遍历顺序即可知道根节点与左右子树，这样递归的处理即可完成构建新树的过程
 * 
 * 前序遍历：
 *      [根节点，[左子树的遍历结果]，[右子树的前序遍历结果]]
 * 中序遍历：
 *      [[左子树的中序遍历结果]，根节点，[右子树的中序遍历结果 ]]
 */


 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 流程：     
 *      1. 用前序遍历方案找的根节点，生成节点，
 *      2. 然后用中序遍历把根节点左右的子数组倒入递归函数，
 *      3. 继续用1 找根节点，然后2 循环
 */
var buildTree = function(preorder, inorder) {
    let inorderMid = null;
    if(!preorder[0]) { // 没有节点返回 null 
        return null;
    }
    // 获取在 中序遍历内的 当前根节点的位置，
    //  从而能获取当前数组的左右子树
    !!inorder.length && inorder.map((e,i)=> {
        if (e === preorder[0]) {
            inorderMid = i;
        }
    })
    // 获取在前序遍历内的 左子树的最后一个值，也是为了分割前序数组
    // !!preorder.length && preorder.map((e,i)=> {
    //     if (e === inorder[inorderMid-1]) {
    //         console.log('preorder',e,i);

    //         preorderMid = i;
    //     }
    // })
    
    return {
        val: preorder[0],
        left: buildTree(preorder.slice(1,inorderMid+1),inorder.slice(0,inorderMid)),
        right: buildTree(preorder.slice(inorderMid+1,preorder.length),inorder.slice(inorderMid+1,inorder.length))
    };
     

};
console.log(buildTree([1,2,3],[3,2,1]));

/**
 * 使用数组copy 花费时间过大，但是预计使用下标会造成参数过多（必须分第二个函数，用闭包的话应该就能规避），条件判断复杂一些（但应该还是比拆分数据要好一些）
 * 
 * 执行用时 :164 ms, 在所有 JavaScript 提交中击败了16.92%的用户
 * 内存消耗 :111.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

/**
 * 改版思路，使用闭包在内部进行递归传输 数组下标，不再分割数组
 */

 /**
  * 官方题解 有缘再见～～
  */