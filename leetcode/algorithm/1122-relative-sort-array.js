/**
 * 1122. 数组的相对排序
 * 
 * 给你两个数组，arr1 和 arr2，
 * arr2 中的元素各不相同
 * arr2 中的每个元素都出现在 arr1 中
 * 对 arr1 中的元素进行排序，使 arr1 中项的相对顺序和 arr2 中的相对顺序相同。未在 arr2 中出现过的元素需要按照升序放在 arr1 的末尾。
 */

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    let upper = Math.max(...arr1)+1;
    let arr = new Array(upper).fill(0);
    for (let i = 0; i < arr1.length; i++) {
        arr[arr1[i]]++;
        
    }
    let pos = 0;
    for (let i = 0; i < arr2.length; i++) {
        let count = arr[arr2[i]]
        for (let j = pos; j < count+pos; j++) {
            arr1[j]=arr2[i]
        }
        pos+=count
        arr[arr2[i]]=0
    }
    for (let i = 0; i < upper; i++) {
        let count = arr[i]
        if(count) {
            for (let j = pos; j < count+pos; j++) {
                arr1[j]=i
            }
            pos+=count
        }
    }
    return arr1;
};
/**
 * 计数排序代码垃圾版
 * 
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了69.55%的用户
 * 内存消耗：38 MB, 在所有 JavaScript 提交中击败了48.72%的用户
 */