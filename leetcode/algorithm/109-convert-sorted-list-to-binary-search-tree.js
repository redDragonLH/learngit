/**
 * 109. 有序链表转换二叉搜索树
 *
 * 给定一个单链表，其中的元素按升序排序，将其转换为高度平衡的二叉搜索树。
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
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
 * 左子树小于父节点,右子树大于父节点,树的左右子树高度不超过1
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  let list = [];
  while (head) {
    list.push(head.val);
    head = head.next;
  }

  let mid = list[list.length >> 1];
  let root = new TreeNode(mid);
  creatTree(root, list, 0, mid - 1, "left");
  creatTree(root, list, mid + 1, list.length, "right");
  return root;
};
const creatTree = (root, list, start, end, pos) => {
  let mid = list[(end + start) >> 1];
  root[pos] = new TreeNode(mid);
  creatTree(root, list, start, mid - 1, "left");
  creatTree(root, list, mid + 1, end, "right");
};
/**
 * 生成了就行~~,和测试用例差了十万八千里
 *
 * 执行用时：252 ms, 在所有 JavaScript 提交中击败了6.12%的用户
 * 内存消耗：49.3 MB, 在所有 JavaScript 提交中击败了5.06%的用户
 */

/**
 * 官方题解: 分治
 */

/**
 * java 题解
 *
 * class Solution {
 *      public TreeNode sortedListToBST(ListNode head) {
 *          return buildTree(head,null);
 *      }
 *      public TreeNode buildTree(ListNode left,ListNode right) {
 *          if(left == right) {
 *              return null;
 *          }
 *          ListNode mid = getMedian(left,right);
 *          TreeNode root = new TreeNode(mid.val);
 *          root.left = buildTree(left,mid);
 *          root.right = buildTree(mid.next,right);
 *          return root;
 *      }
 *      public ListNode getMedian(ListNode left,ListNode right) {
 *          ListNode fast = left;
 *          ListNode slow = left;
 *          while(fast != right && fast.next != right) {
 *              fast = fast.next;
 *              fast = fast.next;
 *              slow = slow.net;
 *          }
 *          return slow;
 *      }
 * }
 */

/**
 * 官方题解: 分治加中序遍历优化
 */

/**
 * java 代码
 * 
 * class Solution {
 *      ListNode globaHead;
 * 
 *      public TreeNode sortListToBST(ListNode head) {
 *          globaHead = head;
 *          int length = getLength(head);
 *          return buildTree(0,length - 1);
 *      }
 * 
 *     public int getLength (ListNode head) {
 *          int ret = 0;
 *          while (head != null) {
 *              ++ret;
 *              head = head.next;
 *          }
 *          return ret;
 *      }
 *      
 *      public TreeNode buildTree(int left,int right){
 *          if( left > right) {
 *              return null;
 *          }
 *          int mid = (left + right + 1) /2;
 *          TreeNode root = new TreeNode();
 *          root.left = buildTree(left,mid - 1); // 位置很重要~
 *          root.val= globalHead.val();
 *          globalHead = globalHead.next;
 *          root.right = buildTree(mid + 1,right);
 *          return root;
 *      }
 * }
 */

