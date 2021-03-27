/**
 * 61. 旋转链表
 * 
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
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
 * 直接思路就是循环一遍数据，把每个节点保存在数组里，然后选择后边的k个
 * 
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
 var rotateRight = function (head, k) {
    if(!head) return head
    head = new ListNode(-1, head);
    let next = head
    const arr = [];
    while (next.next) {
        arr.push(next.next);
        next = next.next;
    }
    let arrLen = arr.length;
    if(arrLen === k || arrLen === 1) return head.next
    if(arrLen < k) k = k%arrLen; // 必須用求餘，要不然超出太多了
    while (k !== 0) {
        let last = arr.pop();
        last.next = head.next
        head.next = last;
        k--;
    }
    arr.length && (arr[arr.length - 1].next = null)
    return head.next
};