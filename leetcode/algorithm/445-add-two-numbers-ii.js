/**
 * 两数之和 ii
 * 
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 * 进阶：
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 * 
 * 注意： 不能把所有数字拿出来拼接到一起然后转数字相加再转字符串，因为 肯定会遇到bigint也无法解决的大数
 */
/**
 * 解： 栈处理法
 * 把两个链表的数字push到两个栈内，然后再从栈内挨个拿出并处理并同时转为链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 先把链表内的数据通过循环放到 栈中，
 * 然后再通过循环这两个栈使数据相加，并转换成链表
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * PS：代码写的有点烂
 */
var addTwoNumbers = function(l1, l2) {
    let l1Stock = [];
    let l2Stock = [];
    let l1h = l1;
    let l2h = l2;
    while( (l1h && !Number.isNaN(l1h.val)) || (l2h && !Number.isNaN(l2h.val))) { // 一次循环两个链表
        if(l1h && !Number.isNaN(l1h.val)) {
            l1Stock.unshift(l1h.val);
            l1h = l1h.next;
        }
        if(l2h && !Number.isNaN(l2h.val)) {
            l2Stock.unshift(l2h.val);
            l2h = l2h.next;
        }
    }
    
    let length = l1Stock.length > l2Stock.length ? l1Stock.length : l2Stock.length; // for 循环必须获取循环的最大长度，while 循环的话应该就不用了
    let prve = JSON.parse(JSON.stringify(linkNode)) // copy 问题处理，这是上一个节点的代表，在循环中生成新一个节点后把新节点赋给 它的 next，然后重新用 tailNode 生成新节点
    tailNode = JSON.parse(JSON.stringify(linkNode))
    let jin = 0;
    for (let i = 0; i < length; i++) { // 这用while 应该会好看一点
        if((l1Stock.length>0 || l2Stock.length>0 ) || jin){ // 判断是否需要计算，不管是 栈内有数据还是进位有数据，都要计算
            let l1i = l1Stock.shift() || 0;
            let l2i = l2Stock.shift() || 0;
            tailNode.val = ((l1i + l2i + jin) % 10); // 余数 // 生成新节点

            prve.next = tailNode; // 交换位置，使之tailNode 继续加入运算
            tailNode = JSON.parse(JSON.stringify(prve)); // prve 本身的 val 为空，所以交换给tailNode，下次循环继续运算
            prve =JSON.parse(JSON.stringify(linkNode)); // prve 重新赋值为空节点，配合下次循环
            jin = Math.floor((l1i + l2i+ jin) / 10) // 确认是否有进位
        }
    }
    if(jin) { // 有进位则生成一个新节点
        return {
            val: 1,
            next: tailNode.next // 因为循环时的计算问题，tailNode head 节点的val会一直为空
        }
    }
    return tailNode.next
};
let linkNode = {
    val: 0,
    next: null
}
let linked = (array) => {
    let head = JSON.parse(JSON.stringify(linkNode));
    head.val = array[0]
    let linshi = head
    array.map((e, i)=> {
        if (i !==0) {
            linshi.next = JSON.parse(JSON.stringify(linkNode));
            linshi.next.val = e;
            linshi =  linshi.next;
        }
    })
    return head;
}

// console.log(linked([7,2,4,3]));
// console.log(addTwoNumbers(linked([1]),linked([9,9])));
/**
 * 时间复杂度： O(max(n1,n2)),循环了两次，去掉常量（O(2n)）
 * 空间复杂度： O(n+m),有两个栈和6个常量（O(n+m+6)）
 * 
 * 执行用时 :268 ms, 在所有 JavaScript 提交中击败了6.17%的用户
 * 内存消耗 :42.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

 /**
  * 官方题解代码： 思路一样，代码精简
  */
 /**
  * python 转 java
  * 
  *class Soluton {
      public ListNode addTwoNumbers(ListNode l1,ListNode l2) {
        Stack<Integer> s1 = new Stack<>();
        Stack<Integer> s2 = new Stack<>();

        while(l1 != null || l2 != null) {
            l1 != null && s1.push(l1.val);
            l1 != null && l1 = l1.next;

            l2 != null && s2.push(l2.val);
            l2 != null && l2 = l2.next;
        }

        ListNode res = null;
        int c = 0;

        while(!s1.isEmpty() || !s2.isEmpty() || c > 0) {
            int sum = (s1.isEmpty()? 0 : s1.pop() + s2.isEmpty() ? 0 : s2.pop()) + c;
            ListNode n = new ListNode(sum % 10);
            c = sum /10
            n.next = res;
            res = n;
        }
        return res;
      }
  }
  */