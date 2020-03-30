/**
 * 83. 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 *
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (!head) return head; // 为空直接返回
  let node = head; // 返回头节点，所以不能直接操作
  while (node) {
    if (node.next === null) return headl; // 最后一个直接返回
    if (node.val === node.next.val) {
      //
      node.next = node.next.next; // 删除下一个节点之后继续循环，不进到下一个
    } else {
      node = node.next; // 不相同则进入到下一个
    }
  }
};

/**
 * java 代码 （链表处理方法）再括号（和js一样~）
 * 
 * public ListNode deleteDuplicates(ListNode head) {
 *    ListNode current = head;
 *    while(current !=null && current.next != null) {
 *      if(current.next.val == current.val) {
 *        current.next = current.next.next;
 *      } else {
 *        current = current.next;
 *      }
 *    }
 *    return head;
 * }
 */
