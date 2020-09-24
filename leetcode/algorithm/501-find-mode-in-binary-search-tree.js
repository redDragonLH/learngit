/**
 * 501. 二叉搜索树中的众数
 * 
 * 给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。
 * 假定 BST 有如下定义：
 *  结点左子树中所含结点的值小于等于当前结点的值
 *  结点右子树中所含结点的值大于等于当前结点的值
 *  左子树和右子树都是二叉搜索树
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if(!root) return [];
    const obj = {};
    deep(root,obj);
    let key = Object.keys(obj);
    let result = [key[0]];
    let temp = obj[key[0]]
    for (let i = 1; i < key.length; i++) {
        if(temp < obj[key[i]]) {
            temp= obj[key[i]];
            result = [key[i]]
        }else if(temp === obj[key[i]]) {
            result.push(key[i])
        }
    }
    return result;
};
const deep =(root,obj)=> {
    if(!root) return false;
    obj[root.val] ? obj[root.val]++: obj[root.val] = 1;
    deep (root.left,obj)
    deep (root.right,obj)
}

/**
 * 比较啰嗦,有些代码可以省,
 * 
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了23.48%的用户
 * 内存消耗：44.9 MB, 在所有 JavaScript 提交中击败了40.46%的用户
 */

 /**
  * 空间复杂度 O(1) 的算法
  * 
  * 一棵 BST 的中序遍历序列是一个递增的有序序列,依据这个性质,使用中序遍历会把相同的数字连接到一起,那么在计算的时候就可以在顺序处理中处理完一个数字,不担心乱序影响正确性
  */
 var findMode = function(root) {
    let base = 0, count = 0, maxCount = 0;
    let answer = [];

    const update = (x) => {
        if (x === base) {
            ++count;
        } else {
            count = 1;
            base = x;
        }
        if (count === maxCount) {
            answer.push(base);
        }
        if (count > maxCount) {
            maxCount = count;
            answer = [base];
        }
    }

    let cur = root, pre = null;
    while (cur !== null) {
        if (cur.left === null) {
            update(cur.val);
            cur = cur.right;
            continue;
        }
        pre = cur.left;
        while (pre.right !== null && pre.right !== cur) {
            pre = pre.right;
        }
        if (pre.right === null) {
            pre.right = cur;
            cur = cur.left;
        } else {
            pre.right = null;
            update(cur.val);
            cur = cur.right;
        }
    }
    return answer;
};