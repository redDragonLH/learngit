/**
 * 92. 反转链表 II
 * 
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 * 
 * 说明:
 *      1 ≤ m ≤ n ≤ 链表长度。
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
 * 一趟扫描,那就得在保留现场,比如start 和 end 的位置引用,剩下的就好说了
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    if(left === right) return head;

    let pos = 1;
    let next = head;
    // 保留现场所用的变量
    let leftNode = left === pos ? head: null;
    let reverse = {next: null};
    let tail = null;
    while(pos <= right){
        if(left !== 1 && pos === left-1 ){
            // left 断开点,无需处理那边
            leftNode=next;
        }
        if(pos >= left && pos <= right){
            next && (node = new ListNode(next.val,reverse.next));
            // 头部变尾部,保留断点,不是头部都必须保留位置,否则找不到~~
            if( pos === left ) tail = node;
            reverse.next = node;
        }
        // right 断开点,无需处理那边
        next = next.next;
        pos++;
    }
    leftNode.next = reverse.next;
    tail.next = next;
    return left === 1 ? leftNode.next:head;
};

/**
 * 代码有点乱,特例太多,好歹速度还行
 * 
 * 执行用时：76 ms, 在所有 JavaScript 提交中击败了90.64%的用户
 * 内存消耗：38 MB, 在所有 JavaScript 提交中击败了46.96%的用户
 */

/**
 * 递归方案
 * 
 * 纠结于递归代码的细节会无法让人看清整个代码的整体所表达的意义,知其然,不知其所以然
 */

/**
 * 递归整个链表
 */
function reverse( head) {
    if (head.next == null) return head;
    let last = reverse(head.next); // 返回的已经是一个链表了
    // last.next = head // 使用这段代码还是有问题,那到底是哪里理解有问题,应该是在返回过程中已经变了
    // 必须是当前交换位置,last 链表的顺序已经变了, 当前head 的next就是last的最后一个node
    head.next.next = head;
    // 断掉 last 与 head 的连接,并且head 也是最后一个节点了
    head.next = null;
    // 这样就交换了head 与 head.next 
    return last;
}

/**
 * 递归前n个节点
 * 
 */
let successor = null; // 后驱节点

// 反转以 head 为起点的 n 个节点，返回新的头结点
function reverseN( head, n) {
    if (n == 1) { 
        // 记录第 n + 1 个节点
        successor = head.next;
        return head;
    }
    // 以 head.next 为起点，需要反转前 n - 1 个节点
    let last = reverseN(head.next, n - 1);

    head.next.next = head;
    // 让反转之后的 head 节点和后面的节点连起来
    head.next = successor;
    return last;
}    

/**
 * 反转链表的一部分
 */
function reverseBetween( head, m, n) {
    // base case
    if (m == 1) {
        return reverseN(head, n);
    }
    // 前进到反转的起点触发 base case
    head.next = reverseBetween(head.next, m - 1, n - 1);
    return head;
}