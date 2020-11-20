/**
 * 147. 对链表进行插入排序
 * 
 * 对链表进行插入排序。
 * 
 * 插入排序算法：
 *  插入排序是迭代的，每次只移动一个元素，直到所有元素可以形成一个有序的输出列表。
 *  每次迭代中，插入排序只从输入数据中移除一个待排序的元素，找到它在序列中适当的位置，并将其插入。
 *  重复直到所有输入数据插入完为止。
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {

    let next = head.next;
    let pre = head;
    while (next!==null){
        if(pre.val < next.val) {
            next = next.next;
            pre = pre.next;
        }else {
            let h = head;
            let subprev = null
            while(h.val < next.val ) {
                h = h.next;
                subprev = h;
            }
            pre.next = next.next;
            if(subprev) {
                subprev.next = next;
                next.next = h;
            }else {
                next.next=head;
                head=next;
            }
            next = pre.next;

        }
    }
        console.log('head',head)

};
/**
 * 循环到最后一个元素会有循环
 */


 /**
  * 官方题解
  * 
  * 也只能从头找插入的位置,要是从后往前得加prev节点
  * 
  * 我的为啥会有环
  * 
  * 我的是在当前元素 和前一个,这种看来还是比较麻烦,而且容易出问题
  */
 var insertionSortList = function(head) {
    if (head === null) {
        return head;
    }
    const dummyHead = new ListNode(0); // 定义一个空白的节点
    dummyHead.next = head; // 把head 放到空节点后面
    let lastSorted = head, curr = head.next;
    while (curr !== null) { // 如果next 不为空则继续
        if (lastSorted.val <= curr.val) {
            lastSorted = lastSorted.next; // 继续
        } else {
            let prev = dummyHead;// 找到头
            while (prev.next.val <= curr.val) { // 找到位置
                prev = prev.next;
            }
            // 这里比较重要
            lastSorted.next = curr.next;// 先更新为下一个
            curr.next = prev.next; // curr 归位
            prev.next = curr;
        }
        curr = lastSorted.next; // 找到新的 curr
    }
    return dummyHead.next;
};