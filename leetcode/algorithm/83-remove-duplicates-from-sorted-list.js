/**
 * 83. 删除排序链表中的重复元素 (改名了)
 * 
 * 存在一个按升序排列的链表，给你这个链表的头节点 head ，请你删除所有重复的元素，使每个元素 只出现一次 。
 * 返回同样按升序排列的结果链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 这个更简单
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {

    if(!head) return head;
    head = new ListNode(-1,head)
    let next = head.next;
    while(next.next) {
        if(next.val === next.next.val) {
            next.next = next.next.next
        }else{
            next = next.next
        }
    }
    return head.next;
};
/**
 * 效率吊差
 * 
 * 执行用时：112 ms, 在所有 JavaScript 提交中击败了16.94%的用户
 * 内存消耗：39.7 MB, 在所有 JavaScript 提交中击败了38.68%的用户
 */