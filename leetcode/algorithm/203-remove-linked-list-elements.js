/**
 * 203. 移除链表元素
 * 
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 链表处理的一个注意点是头结点，
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    let link = { next: head }
    let node = link
    while (node) {
        if (node.next && node.next.val === val) {
            //  在删除next 节点之后 next 节点已经是个新节点了，所以这个新节点必须进入循环进行判断
            node.next = node.next.next
        } else {
            node = node.next
        }
    }
    return link.next
};
/**
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了93.13%的用户
 * 内存消耗：42.7 MB, 在所有 JavaScript 提交中击败了20.80%的用户
 */