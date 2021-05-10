/**
 * 872. 叶子相似的树
 * 请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。
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
 * 从根节点遍历,但是可能位置不一样,但是顺序一样~~,这样的话一边遍历一边对比逻辑就会比较复杂,
 * 要有滞后性,如果一个节点为空那么就先跳过
 *
 * 不对,判断的是最外层的叶子节点,还要过滤内部节点,而且这样两棵变动就更复杂,对两棵树的遍历集成到一起就更复杂,意义也就不大
 *
 * 遍历的顺序名称是由根节点的位置决定的
 *
 * 前序遍历: 根节点 -> 左子树 -> 右子树
 * 中序遍历: 左子树 -> 根节点 -> 右子树
 * 后序遍历: 左子树 -> 右子树 -> 根节点
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  const deep = (root) => {
    let str = "";
    if (!root) {
      return str;
    }
    if (!root.left && !root.right) {
      str += '.'+root.val;
    }
    str += deep(root.left);

    str += deep(root.right);

    return str;
  };
  return deep(root1) === deep(root2);
};

/**
 * [3,5,1,6,2,9,8,null,null,7,14]
 * [3,5,1,6,71,4,2,null,null,null,null,null,null,9,8]
 * 
 * 实例失败
 * 
 * console 671498 671498,难不成是 7,14和71,4的问题~~也不对啊,如果是这个那谁都过不了吧
 * 果然是714的问题,那给每个加个分隔符吧
 * 数组的 tostring 会把分隔符留着,这样不一样的就暴露了
 * 
 * 这样的话把val相加得到最后结果的方案估计也是有问题的喽
 */
/**
 * 
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了51.16%的用户
 * 内存消耗：39.8 MB, 在所有 JavaScript 提交中击败了21.40%的用户
 */

/**
 * 官方题解: 深度优先搜索
 */
 var leafSimilar = function(root1, root2) {
    
    const seq1 = [];
    if (root1) {
        dfs(root1, seq1);
    }

    const seq2 = [];
    if (root2) {
        dfs(root2, seq2);
    }
    return seq1.toString() === seq2.toString();
};

const dfs = (node, seq) => {
    if (!node.left && !node.right) {
        seq.push(node.val);
    } else {
        if (node.left) {
            dfs(node.left, seq);
        }
        if (node.right) {
            dfs(node.right, seq);
        }
    }
}