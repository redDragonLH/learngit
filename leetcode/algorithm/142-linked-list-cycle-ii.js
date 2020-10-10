/**
 * 142. 环形链表 II
 * 
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环
 * 说明：不允许修改给定的链表。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 哈希表就要用到额外空间
 * 
 * 快慢针及数学分析法
 * 
 * 只要有环,快慢针就肯定会在环中相遇
 * 
 * 那么设链表中环外的部分长度为 a ,慢指针进入环后,又走了 b ,的距离与快指针相遇,这时,快指针已经走完了环的 n 圈
 * ,因此快指针走过的总距离为 a + n(b+c) + b = a + (n + 1)b + nc
 * 
 * 根据题意,任意时刻,快指针走过的距离都为慢指针的两倍,所以:
 *  
 *      a + (n + 1)b + nc = 2(a + b) ==> a = c + (n - 1)(b + c)
 * 
 * 从 a = c + (n-1)(b + c) 的等量关系推导,从相遇点到入环点的距离加上 n - 1圈的环长,恰好等于从链表头到入环点的距离
 * 这样的话如果在快慢针相遇时我们可以知道, 再走c段+ (n-1)(b+c)段就是 a的距离,也就是起始到入环点的距离
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    let slow = head, fast = head;
    while (fast !== null) {
        slow = slow.next;
        if (fast.next !== null) {
            fast = fast.next.next;
        } else {
            return null;
        }
        if (fast === slow) {
            let ptr = head;
            while (ptr !== slow) {
                ptr = ptr.next;
                slow = slow.next;
            }
            return ptr;
        }
    }
    return null;
};