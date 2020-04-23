/**
 * 199. 二叉树的右视图
 * 给定一棵二叉树，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 肯定会出现右子树半道断了的问题，必须检查当前层从右向左检查
 * 
 * 思路： 从右向左看，每层必能看到一个数字，但是不一定是在右子树，右子树可能会在中间断开，这样看到的数字就可能是在左子树，
 *      这样的话其实还是要遍历所有的节点，找到需要展示的节点
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    let array = []; // 用数组保存每层能看到的节点，而且可以用下标去代表当前层，遍历当前层级，如果数组对应层级下标没有数据，则填充
    let view =(node,i,p) => { // 递归
        if(!node)return false;
        typeof array[i] !== 'number' ? (array[i] = node.val) : '' // 当前下标没有数据
        i = i+1 // 下一层级下标
        view(node.right,i);
        view(node.left,i)
    };
    view(root,0);
    return array;
};
/**
 * 执行用时 :60 ms, 在所有 JavaScript 提交中击败了95.81%的用户
 * 内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

 /**
  * 题解： 深度优先搜索
  * 深度优先搜索： 从定点开始，沿着一条路走到头，如果不能到达目标解，则返回上一个节点，从另一条路继续向下走
  * 
  * 我们对树进行深度优先搜索，在搜索过程中，我们总是先访问右子树。那么对于每一层来说，我们在这层见到的第一个结点一定是最右边的结点。
  * 
  * 算法
  * 这样一来，我们可以存储在每个深度访问的第一个结点，一旦我们知道了树的层数，就可以得到最终的结果数组。
  */

/**
 * 方法二：广度优先搜索
 * 广度优先搜索：从根节点开始，沿着树的宽度遍历树的节点。如果所有节点均被访问，则算法中止
 * 
 * 思路
 * 
 * 我们可以对二叉树进行层次遍历，那么对于每层来说，最右边的结点一定是最后被遍历到的。二叉树的层次遍历可以用广度优先搜索实现。
 * 
 * 算法
 * 执行广度优先搜索，左结点排在右结点之前，这样，我们对每一层都从左到右访问。因此，只保留每个深度最后访问的结点，我们就可以在遍历完整棵树后得到每个深度最右的结点。除了将栈改成队列，并去除了rightmost_value_at_depth之前的检查外，算法没有别的改动。
 */
/**
 * Java 代码
 * 
 * class Solution {
 *  public List<Integer> rightSideView(TreeNode root) {
 *    Map<Integer, Integer> rightmostValueAtDepth = new HashMap<Integer,Integer>();
 *    int max_depth = -1;
 *    Queue<TreeNode> nodeQueue = new LinkedLIst<TreeNode>();
 *    Queue<Integer> depthQueue = new LinkedList<Integer>();
 *    nodeQueue.add(root);
 *    depthQueue.add(0);
 * 
 *    while (！nodeQueue.isEmpty()) {
 *        TreeNode node = nodeQueue.remove();
 *        int depth = depthQUeue.remove();
 *        
 *        if (node != null) {
 *          // 维护二叉树最大深度
 *          max_depth = Math.max(max_depth,depth);
 *          // 由于每一层最后一个访问到的节点才是我们要的答案，因此不断更新对应深度的信息即可
 *          rightmostValueAtDepth.put(depth, node.val);
 * 
 *          nodeQueue.add(node,left);
 *          nodeQueue.add(node.right);
 *          depthQueue.add(depth + 1);
 *          depthQueue.add(depth + 1)
 *        }
 *    }
 *    List<Integer> rightView = new ArrayList<Integer>();
 *    for (int depth = 0;depth <= max_depth;depth++) {
 *      rghtView.add(rightmostValueAtDepth.get(depth));
 *    }
 *    return rightView;
 *  }
 * }
 */