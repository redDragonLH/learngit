/**
 * 96. 不同的二叉搜索树
 * 
 * 给定一个整数 n，求以 1 ... n 为节点组成的二叉搜索树有多少种？
 */

/**
 * 二叉搜索树：
 *      左子节点总是小于它的根节点
 *      右子节点总是大于它的根节点
 * 
 * 思路：
 *      给定一个有序序列，为了构建出一颗二叉树，可以遍历每个数字 i，将该数字作为树根，将1-（i-1）序列作为左子树，将（i+1）-n 序列作为右子树
 * 然后可以按照同样的方式递归构建左右子树
 * 
 * 
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    let G = new Array(n + 1).fill(0);
    G[0] = 1;
    G[1] = 1;

    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j <= i; ++j) {
            G[i] += G[j - 1] * G[i - j];
        }
    }
    return G[n];
};
console.log(numTrees(3));