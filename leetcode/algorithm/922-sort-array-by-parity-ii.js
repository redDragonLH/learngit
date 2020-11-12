/**
 * 922. 按奇偶排序数组 II
 * 
 * 给定一个非负整数数组 A， A 中一半整数是奇数，一半整数是偶数。
 * 对数组进行排序，以便当 A[i] 为奇数时，i 也是奇数；当 A[i] 为偶数时， i 也是偶数。
 * 你可以返回任何满足上述条件的数组作为答案。
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
    let len = A.length;
    if(!len)return false;
    for (let i = 0; i < len; i++) {
        if((i%2 && !(A[i]%2)) || (!(i%2) && A[i]%2)) {
          let pos = getPos(A,len,i,i%2);
            if(pos >-1)swap(A,i,pos)
            else return [];
        }
    }
    return A;
};
const getPos=(arr,len,start,parity)=> {
    // console.log(start,arr)
    for (let i = start+1; i < len; i++) {
        if(arr[i]%2 === parity) return i;
    }
    return -1;
}
const swap = (arr,i1,i2)=> {
    let temp = arr[i1];
    arr[i1]=arr[i2];
    arr[i2] = temp;
}

/**
 * 执行用时：144 ms, 在所有 JavaScript 提交中击败了28.60%的用户
 * 内存消耗：42.4 MB, 在所有 JavaScript 提交中击败了73.69%的用户
 */