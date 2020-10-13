/**
 * 24. 两两交换链表中的节点
 * 
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 这题为什么是中等
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if(!head || !head.next) return head;
    let result = head.next;
    let curr = head;
    let prev
    while(curr && curr.next) {
        if(curr.next) {
            let temp  = curr;
            curr = curr.next;
            temp.next = curr.next
            curr.next = temp;
            !!prev && (prev.next = curr)
        }
        prev = curr.next
        curr = curr.next.next
    }

    return result;
};
/**
 * 这速度惨了点
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了7.18%的用户
 * 内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了8.68%的用户
 */

/**
 * 官方递归速度就很快
 * 自己的迭代题解哪里有问题呢?
 *  1. 赋值操作过多
 *  2. 变量使用过多
 */
var swapPairs = function(head) {
    if (head === null|| head.next === null) {
        return head;
    }
    // 实在是太简练了
    const newHead = head.next;
    head.next = swapPairs(newHead.next);
    newHead.next = head;
    return newHead;
};
