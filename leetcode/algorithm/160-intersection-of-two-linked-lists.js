/**
 * 160 相交链表
 * 找到两个单链表相交的起始节点
 * 
 * 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
 * 输出：Reference of the node with value = 8
 * 输入解释：相交节点的值为 8 （注意，如果两个列表相交则不能为 0）。从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。
 * 
 * 注意：
 * 如果两个链表没有交点，返回 null.
 * 在返回结果后，两个链表仍须保持原有的结构。
 * 可假定整个链表结构中没有循环。
 * 程序尽量满足 O(n) 时间复杂度，且仅用 O(1) 内存。
 */

 /**
  *  题解思路 1. 哈希表法
  * 
  * 遍历链表A并将每个结点的地址/引用存储在哈希表中，然后检查链表B 中的每个结点b 是否在哈希表中
  */
 /**
  * 题解思路 2. flag 法
  * 
  * 同时遍历 A B链表，并在遍历过的结点上添加条件，如果遍历时遇到已有条件的结点，则表明是相交结点
  * 
  * 备注：此题需要链表保持原有结构~~~
  */
 /**
  * 题解思路 3. 双指针法
  * 
  * 双指针法基于的是简单的数学交换律  a + = b + a;
  * 
  * 两个指针同时遍历A B链表，在两个链表遍历到最后之后 再把指针交换继续从头遍历，这样两个指针就都遍历了 A + B  个节点，走过的路程相同，这样就肯定会在相交节点相遇
  * 
  * A和B两个链表长度可能不同，但是A+B和B+A的长度是相同的，所以遍历A+B和遍历B+A一定是同时结束。 如果A,B相交的话A和B有一段尾巴是相同的，所以两个遍历的指针一定会同时到达交点 如果A,B不相交的话两个指针就会同时到达A+B（B+A）的尾节点
  * 
  */

  /**
   * 题解 3. flag 法
   */
  /**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
 let nodeA = headA
 let nodeB = headB;
 let flag = 0
    while(nodeA || nodeB) {
     if(flag>2) return null
     if (nodeA == nodeB) {
      return nodeA
     }
     if(nodeA && nodeA.next) {
      nodeA = nodeA.next;
     } else {
      nodeA = headB
      flag++
     }
     if(nodeB && nodeB.next) {
      nodeB = nodeB.next;
     } else {
      nodeB = headA
      flag++
     }
    }
    return null 
};
/**
 * 执行用时 :124 ms, 在所有 JavaScript 提交中击败了22.10%的用户
 * 内存消耗 :42.7 MB, 在所有 JavaScript 提交中击败了97.87%的用户
 * 
 * 需优化级
 */