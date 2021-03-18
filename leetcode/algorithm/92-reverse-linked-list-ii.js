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