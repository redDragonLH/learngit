/**
 * 86. 分隔链表
 * 
 * 给你一个链表和一个特定值 x ，请你对链表进行分隔，使得所有小于 x 的节点都出现在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    const bigger = new ListNode(0)
    const smaller = new ListNode(0)

    const smallerLast = deep(head,x,bigger,smaller);
    smallerLast.next = bigger.next;
    return smaller.next;
};
const deep = (head,x,bigger,smaller)=> {
    if(!head){
        bigger.next =null;
        smaller.next =null;
        return smaller;
    }
    if(head.val < x) {
        // smaller.next = new ListNode(head.val);
        smaller.next = head
        return deep(head.next,x,bigger,smaller.next)
    }else {
        // bigger.next = new ListNode(head.val);
        bigger.next = head
        return deep(head.next,x,bigger.next,smaller)
    }
}

/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了83.85%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了76.18%的用户
 */