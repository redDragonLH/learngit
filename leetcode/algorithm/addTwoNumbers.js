/**
 * 题目：
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 
 * 例子：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */
/**
 * 我的解法：
 * 
 * 备注： 递归会比循环要慢，应该是创建函数耗费了不少时间
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
   this.val = val;
   this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * 
 * 链表用递归处理
 */
const addTwoNumbers = function(l1, l2) {
   // 计算方法
   /**
    * 
    * @param {object | null} l1 结点
    * @param {object | null} l2 结点
    * @param {number} index 进位的数字
    */
   let compList = (l1,l2,index) => {
      if(l1 && l2){ // 如果两个链表的结点都存在，则进入
         let num = Number(l1.val) + Number( l2.val) + index;
         return {
            val: num % 10,
            next: compList(l1.next,l2.next, parseInt(num / 10)) // 递归处理剩下的结点
         }
      } else if ((l1 || l2) && (index > 0)) { // 只有一个链表有结点但是进位还有 
         let num = (l1 ? l1.val : l2.val) + index;
         return {
            val: num % 10,
            next: compList(l1?l1.next: null,l2?l2.next:null, parseInt(num / 10))
         }
      } else if(!(l1 || l2) && (index > 0)) { // 所有节点都没有了，但是有进位，通常出现在两个链表长度一样而且最后一位相加大于10的情况
         return { // 返回根节点
            val: index,
            next: null
         }
      } else if((l1 || l2) && (index === 0)) { //  一个链表已经没有节点而且没有进位了
         return l1 ? l1 : l2;
      }
   }
return compList(l1, l2,0);
      
};
/**
 * 生成链表
 * @param {*} num 
 */
function setList(num){ 
 if(num.length > 1){
  return {
   val: num.pop(),
   next: setList(num)
  }
 }else {
  return {
   val: num.pop(),
   next: null
  }
 }
}
/**
 * 返回所有链表数据
 * @param {object} list 
 */
function getVal(list){
 if(list.next){
  return ''+ getVal(list.next) + list.val
 }
 return '' + list.val
}
let l1= [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let l2 = [5,6,4]

// console.log(addTwoNumbers(setList(l1),setList(l2)));
// setList(1000000000000000000000000000001)
// addTwoNumbers(setList(l1),setList(l2))
/**
 * 其他思路：1、初等数学  ps:？？？
 * 
 * 流程：
 * 1. 将当前节点初始化未返回列表的哑节点
 * 2. 将进位carry 初始化未0
 * 3. 将p喝q分别初始化为列表 l1和 l2 的头部
 * 4. 遍历列表 l1 和 l2 直至到达它们的尾端
 *    4.1 将 x 设为节点 p 的值。 如果 p 已经到达 l1 的末尾，则将其值设置为0.
 *    4.2 将y 设为 q的值。如果q已经达到 l2 的末尾。则将其值设置为 0
 *    4.3 设定 sum = x + y + carry
 *    4.4 更新进位的值 carry = sum /10
 *    4.5 创建一个数值为（sum mod 10）的新节点，并将其设置为当前结点的下一个结点，然后将当前节点前进到下一个节点
 *    4.6 同时，将 p 和q 前进到下一个结点
 * 5. 检查 carry = 1 是否成立，如果成立，则向返回列表追加一个含有数字1 的新节点
 * 6. 返回哑节点的下一个结点
 * 
 * 复杂度分析:
 * 
 * * 时间复杂度： O(max(m,n)),假设 m 和 n 分别表示 l1 和 l2 的长度，上面的算法最多重复 max(m,n)次
 * * 空间复杂度： O(max(m,n)),新列表的长度最多为 max(m,n)+1 
 */

 /**
  * 思路1 java 代码
  * 
  * public ListNode addTwoNumbers(listNode l1, ListNode l2) {
  *   ListNode dummyHead = new ListNode(0);
  *   ListNode p = l1,q = l2, curr = dummyHead;
  *   int cary = 0;
  *   while (p != null || q != null) { // 循环链表
  *      int x = (p != null) ? p.val : 0;
  *      int y = (q != null) ? q.val : 0;
  *      int sum = carry + x + y;
  *      carry.next = new ListNode(sum % 10);
  *      curr = curr.next;
  *      if (p != null) p = p.next;
  *      if (q != null) q = q.next;
  *   }
  *   if (carry > 0) {
  *      curr.next = new ListNode(carry);
  *   }
  *   return dummyHead.next;
  * }
  * 
  * // 基本也就是 我循环的非递归版，看来递归还是慢
  */

  /**
   * 思路2 java代码
   * 
   * class Solution {
   *  public ListNode pre = new ListNode(0);
   *  ListNode pre = new ListNode(0);
   *  ListNode cur = pre;
   *  int carry = 0;
   *  while(l1 != null || l2 != null) {
   *     int x = l1 == null ? 0 : l1.val;
   *     int y = l2 == null ? 0 : l2.val;
   *     int sum = x + y + carry;
   *     carry = sum / 10;
   *     sum = sum % 10;
   *     cur.next = new ListNode(sum);
   *     
   *     cur = cur.next;
   *     if (l1 != null) {
   *        l1 = l1.next;
   *     }
   *     if (l2 != null) {
   *        l2 = l2.next;
   *     }
   *     if (carry == 1) {
   *        cur.next = new ListNode(carry);
   *     }
   *     return pre.next;
   *  }
   * }
   */