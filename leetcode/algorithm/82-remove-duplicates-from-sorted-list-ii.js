/**
 * 82. 删除排序链表中的重复元素 II
 *
 * 给定一个排序链表，删除所有含有重复数字的节点，只保留原始链表中 没有重复出现 的数字。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 *
 * 用循环就是麻烦,有好多细节要处理
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  // 自定义一个头,要不然最开始是重复的就摸不着头脑了
  head = new ListNode(-1, head);
  // 第一个是自定义,没必要处理
  let next = head.next;
  let prev = head;
  while (next?.next) {
    if (next.val === next.next.val) {
      while (next.val === next.next?.val) {
        next = next.next;
      }
      prev.next = next.next;
      // 这边不能 prev=next,因为删除prev后边的相同元素了,所以prev仍旧是原来的
    } else {
      prev = next;
    }
    next = next.next;
  }
  return head.next;
};

/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了67.40%的用户
 * 内存消耗：39.5 MB, 在所有 JavaScript 提交中击败了56.17%的用户
 */