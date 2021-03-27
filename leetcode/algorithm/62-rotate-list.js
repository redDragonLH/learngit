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

/**
 * 官方题解： 闭合为环
 * 
 * 就是把这个链表闭合成为一个环，这个过程中肯定知道了链表的长度，
 * 然后再循环链表长度-k 个距离，这个节点就是旋转k个节点之后的头节点
 */
 var rotateRight = function(head, k) {
    if (k === 0 || !head || !head.next) {
        return head;
    }
    let n = 1;
    let cur = head;
    while (cur.next) {
        cur = cur.next;
        n++;
    }

    let add = n - k % n;
    if (add === n) {
        return head;
    }

    cur.next = head;
    while (add) {
        cur = cur.next;
        add--;
    }

    const ret = cur.next;
    cur.next = null;
    return ret;
};