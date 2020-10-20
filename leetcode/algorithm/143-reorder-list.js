/**
 * 143. 重排链表
 * 给定一个单链表 L：L0→L1→…→Ln-1→Ln ，
 * 将其重新排列后变为： L0→Ln→L1→Ln-1→L2→Ln-2→…
 * 你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 懒
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let start = head;
  let mid = head;
  let result = head;
  while (start.next) {
    start = start.next.next;
    mid = mid.next;
  }
  const reverse = (head) => {
      if(!head.next) {
        return head
      }
    let list = reverse(head.next);
    list.next = head;
    return list;
  };
  mid = reverse(mid.next);
  result 
};

/**
 * 第三方题解
 */
var reorderList = function(head) {
    if(!head) return null;
    let tempHead = head;
    let arr = [];
    while(tempHead){
        arr.push(tempHead);
        tempHead = tempHead.next;
    }
    //原链表第一个节点不变，依次先加入 最右边节点，最左边节点（加入后移除 left right位置模拟）
    let left = 1;
    let right = arr.length - 1;
    while(left<=right){
        //如果left===right 节点时的最后next指向自己，最后有节点置空可以排除影响
        //例子：1->4->2->3->3 最后置空 3->null，因为两个节点是同一个地址结果变成1->4->2->3->null
        //也可以 用if(right<left)排除重复添加

        //先加右边节点
        head.next = arr[right];
        right--;
        head = head.next;
        //再加左边节点
        head.next = arr[left];
        left++;
        head = head.next; 
    }
    //最后一个节点置空，避免出现环
    head.next = null;
};