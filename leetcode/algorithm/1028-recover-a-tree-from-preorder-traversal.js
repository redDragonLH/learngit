/**
 * 1028. 从先序遍历还原二叉树
 * 
 * 我们从二叉树的根节点 root 开始进行深度优先搜索。
 * 在遍历中的每个节点处，我们输出 D 条短划线（其中 D 是该节点的深度），然后输出该节点的值。（如果节点的深度为 D，则其直接子节点的深度为 D + 1。根节点的深度为 0）。
 * 如果节点只有一个子节点，那么保证该子节点为左子节点。
 * 给出遍历输出 S，还原树并返回其根节点 root。
 * 
 * 例：
 * 输入："1-2--3--4-5--6--7"
 * 输出：[1,2,5,3,4,6,7]
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * 失败～～
 * 
 * 最好是递归，这样一条枝到头了还能往上走
 * 但是得轮询有多深，这里应该必须用循环
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
 
};
const fun = (root, pos, S,deep,prentDeep) => {
    if(pos > S.length) return false;
    let deep = 0;
    for (let i = pos; i < S.length; i++) {
        if(S.charAt(i) !== '-') break;
        deep++;
    }
    let node = new TreeNode(S.charAt(pos-1));
    if(prentDeep - deep === 1){
        root.left? root.right = node : root.left= node;
        fun(root.right || root.left,)
    }
    return node 
}

/**
 * 官方题解： 迭代
 * 
 * 思路
 * 
 *      每次从字符串s中取出一个节点的值以及它的深度信息：
 *          1. 首选取若干字符 - ，直到遇到非 - 字符位置。通过 - 的个数，我们就可以知道当前节点的深度信息
 *          2. 再读取若干个数字，直到遇到非数字或者字符串的结尾。通过这些数字，我们就可以知道当前节点的值
 *      得到这些信息之后，就需要考虑将当前节点放在何处。记当前节点为 T，上一个节点为S，那么实际上只有两种情况】
 *          1. T是S的左子节点
 *          2. T是根节点到S这一条路径上（不包括S）某一节点的右子节点
 * 
 *      这是因为先序遍历本身的性质。在先序遍历中，我们是通过「根 — 左 — 右」的顺序访问每一个节点的。
 * 想一想先序遍历的递归 + 回溯方法，对于在先序遍历中任意的两个相邻的节点 S 和 T，
 * 要么 T 就是 S 的左子节点（对应上面的第一种情况），要么在遍历到 S 之后发现 S 是个叶节点，
 * 于是回溯到之前的某个节点，并开始递归地遍历其右子节点（对应上面的第二种情况）。
 * 这样以来，我们按照顺序维护从根节点到当前节点的路径上的所有节点，就可以方便地处理这两种情况。
 * 仔细想一想，这实际上就是使用递归 + 回溯的方法遍历一棵树时，栈中的所有节点，也就是可以回溯到的节点。
 * 因此我们只需要使用一个栈来模拟递归 + 回溯即可。
 * 
 *          回到上面的分析，当我们得到当前节点的值以及深度信息之后，
 * 我们可以发现：如果 T 是 S 的左子节点，那么 T 的深度恰好比 S 的深度大 1；
 * 在其它的情况下，T 是栈中某个节点（不包括 S）的右子节点，那么我们将栈顶的节点不断地出栈，
 * 直到 T 的深度恰好比栈顶节点的深度大 11，此时我们就找到了 T 的双亲节点。
 * 
 * java 代码
 * 
 * class Solution {
 *      public TreeNode recoerFromPreorder(String S) {
 *          Deque<TreeNode> path = new LinkedList<TreeNode>();
 *          int pos = 0;
 *          while(pos<S.length()) {
 *              int level = 0;
 *              while(S.charAt(pos) == '-') {
 *                  ++level;
 *                  ++pos;
 *              }
 *              int value = 0;
 *              while(pos < S.length() && Character.isDigit(S.charAt(pos))) {
 *                  value = value * 10 + (S.charAt(pos) - '0');
 *                  ++pos;
 *              }
 *              TreeNode node = new TreeNode(value);
 *              if(level == path.size()) {
 *                  if(!path.isEmpty()) {
 *                      path.peek().left = node;
 *                  }
 *              } else {
 *                  while(level == path.size()) {
 *                      path.pop();
 *                  }
 *                  path.peek().right = node;
 *              }
 *              path.push(node);
 *          }
 *          while(path.size() > 1) {
 *              path.pop();
 *          }
 *          return path.peek();
 *      }
 * }
 */