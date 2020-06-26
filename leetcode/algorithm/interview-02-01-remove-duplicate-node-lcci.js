/**
 * 面试题 02.01. 移除重复节点
 * 
 * 编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 逻辑上最简单还是 hash 表映射方案
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeDuplicateNodes = function(head) {
    if(!head)return head
    let map = new Map();
    map.set(head.val,1)
    let next = head.next;
    let prev = head
    while(next) {
        if(map.has(next.val)) {
            next = next.next;
            prev.next = next;
            continue;
        }else {
            map.set(next.val,1)
            prev = next;
            next = next.next;
        }
    }
    return head
};

/**
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了95.60%的用户
 * 内存消耗：41.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */