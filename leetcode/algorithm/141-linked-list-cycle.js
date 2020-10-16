/**
 * 141. 环形链表
 * 给定一个链表，判断链表中是否有环。
 *
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 描述有一些是误导，虽然程序不会出现错误，但是会增加运行时间与内存
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  if (head.check) {
    return head.check;
  } else {
    head.check = true;
    return hasCycle(head.next);
  }
};
/**
 * 时间复杂度 O(n),只循环一次
 * 空间复杂度 O(n)， 每个结点增加一个元素
 *
 * 执行用时 :64 ms, 在所有 JavaScript 提交中击败了99.09%的用户
 * 内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了31.09%的用户
 *
 * 应该使用尾递归优化
 */
/**
 * 快慢针方法
 *
 * 快针比慢针每次多走一步，如果没有环，快针将很快到达尾部，如果有环，快慢针最终会相等
 */
/**
 * 哈希表方法
 *
 * 空间复杂度会上升
 */
/**
 * 失败尝试
 */
// var hasCycle = function(head, status) {
//  console.log(status);

//  if(!head || !head.next) return false;
//  if(head.check) {
//   return head.check
//  } else {
//   head.check = true;
//   return hasCycle(head.next, (head.check ? false : head.check== true))
//  }
// };
/**
 * 空间使用量低和时间使用量低的的题解基本为破坏性的算法
 *
 * 空间使用量低的主要是操作 node.val 使val 设置为已知并无法重复数据,然后判断
 *
 * 时间使用量低的为 使用快慢针变种,每次判断后去掉next 使head.next = head.next.next 继续判断,最后 head.next == head 则为有环
 */

/**
 * 快慢针方法
 * 速度有点慢啊~~
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) {
    return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

/**
 * 执行用时：92 ms, 在所有 JavaScript 提交中击败了68.23%的用户
 * 内存消耗：39.6 MB, 在所有 JavaScript 提交中击败了70.77%的用户
 */