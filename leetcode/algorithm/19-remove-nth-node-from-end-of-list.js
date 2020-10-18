/**
 * 19. 删除链表的倒数第N个节点
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
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
 * 判断各种条件
 * 有点烦
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let node = head;
    const lnobj={};
    let pos = 0
    while(node) {
        lnobj[pos++] = node;
        node = node.next;
    }
    lnobj[pos-1-n] && (lnobj[pos-1-n].next = lnobj[pos-n].next);
    return head;
};

/**
 * 快慢指针，在循环时快指针先走n步，然后在一起循环，快指针到头时，慢指针的位置就是n-1
 */
var removeNthFromEnd = function(head, n) {
    let fast = head, stack = head;
    while(--n){
        fast = fast.next;
    }
    if(!fast.next) return head.next;
    fast = fast.next;
    while(fast && fast.next){
        fast = fast.next;
        stack = stack.next;
    }
    stack.next = stack.next.next;
    return head;
};


 /**
  * 还可以用栈，把所有节点怼到栈里，然后推出n 个节点
  */