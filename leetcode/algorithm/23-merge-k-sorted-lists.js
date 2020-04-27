/**
 * 23 合并K个排序链表
 * 
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let link = {};
    let tail = {};
    let heads = {};
    lists.map((e, i) => {
        heads[i] = e;
    })
    let keys = Object.keys(heads);
    while (isWhile(heads,keys)) {
        for (let i = 0; i < keys.length; i++) {
            let lin = heads[keys[i]];
            if(!lin) {
                continue
            }
            if(!link.val) {
                link = lin;
                tail = lin;
                continue;
            }
            if(tail.val < lin.val) {
                tail.next = lin;
                tail = lin;
            } else {
                inset(link,lin);
            }
            heads[keys[i]] = heads[keys[i]].next;
        }
    }
    return link;
};
const inset = (links,link) => {
    let pos = links;
    while(pos) {
        if(pos.val > link.val) {
            let next = pos.next.next
            pos.next = link;
            link.next = next;
            break;
        }
        pos = pos.next;
    }
}
const isWhile = (links,keys) =>{
    for (let i = 0; i < keys.length; i++) {
        if(links[keys[i]]) {
            return true;
        }
    }
    return false;
}