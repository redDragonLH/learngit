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
 */
const addTwoNumbers = function(l1, l2) {
   let compList = (l1,l2,index) => {
      if(l1 && l2){
         let num = Number(l1.val) + Number( l2.val) + index;
         return {
            val: num % 10,
            next: compList(l1.next,l2.next, parseInt(num / 10))
         }
      } else if ((l1 || l2) && (index > 0)) {
         let num = (l1 ? l1.val : l2.val) + index;
         return {
            val: num % 10,
            next: compList(l1?l1.next: null,l2?l2.next:null, parseInt(num / 10))
         }
      } else if(!(l1 || l2) && (index > 0)) {
         return {
            val: index,
            next: null
         }
      } else if((l1 || l2) && (index === 0)) {
         return l1 ? l1 : l2;
      }
   }
return compList(l1, l2,0);
      
};

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
addTwoNumbers(setList(l1),setList(l2))