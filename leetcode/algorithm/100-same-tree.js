/**
 * 100 相同的树
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  let q1q1 = true;
  if (p === q) return true;

  const preOrderTraverseNode = function(pnode, qnode) {
    if (pnode !== null && qnode !== null) {
      if (pnode.val !== qnode.val) {
        q1q1 = false;
      }
      preOrderTraverseNode(pnode.left, qnode.left);
      preOrderTraverseNode(pnode.right, qnode.right);
    } else if ((pnode && qnode === null) || (pnode === null && qnode)) {
      q1q1 = false;
    }
  };

  preOrderTraverseNode(p, q);
  return q1q1;
};

/**
 * 迭代法
 * 
 * 从根开始，每次迭代将当前结点从双向队列弹出，然后，判断
 * 
 * * p 和 q 不是等于none
 * * p.val 等于 q.val
 *  
 * 若以上均满足，则压入子节点
 * 
 * java 代码
 * 
 * class Solution {
 *    public boolean check(TreeNode p,TreeNode q) {
 *      // p and q are null
 *      if(p == null && q == null) return true;
 *      // one of p and q is null
 *      if(q == null || p == null) return false;
 *      if(p.val !== q.val) return false;
 *      return true;
 *    }
 *    public boolean isSameTree(TreeNode p, TreeNode q) {
 *      if(p == null && q == null) return true;
 *      if(!check(p,q)) return false;
 * 
 *      // init depues
 *      ArrayDeque<TreeNode> deqP = new ArrayDeque<TreeNode>(); // 声明 双端队列
 *      ArrayDeque<TreeNode> deqQ = new ArrayDeque<TreeNode>();
 * 
 *      deqP.addLast(p);
 *      deqQ.addLast(q);
 * 
 *      while (!deqP.isEmpty()){
 *        p = deqP.removeFirst();
 *        q = deqQ.removeFirst();
 * 
 *        if(!check(p,q)) return false;
 *        if(p != null) {
 *           // in Java nulls are not allowed in Deque
 *           if(!check(p.left,q.left)) return false;
 *           if(p.left != null) {
 *             deqP.addLast(p.left);
 *             depQ.addLast(q.left); 
 *           }
 *           if(!check(p.right,q.right)) return false;
 *           if(p.right != null) {
 *              deqP.addLast(p.right);
 *              deqQ.addLast(q.right);
 *            }
 *        }
 *      }
 *      return true;
 *    }
 * }
 */

 /**
  * 优秀题解摘抄
  * 
  * 运行时间最短
  */
 var isSameTree = function(p, q) {
  if (p === null && q === null) return true; // 同时为空则为 true
  if (p === null || q === null) return false; // 只有一个为空则为false
  return (p.val === q.val) // return返回 判断值 与 递归内的计算
      && isSameTree(p.left, q.left)
      && isSameTree(p.right, q.right)
};
/**
 * 备注： 
 * 
 * 我想不到的最优雅的代码~~
 */