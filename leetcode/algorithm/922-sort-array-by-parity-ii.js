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

 /**
  * 单线处理方案
  * 其实就是单判断一条线就行,单独判断偶数或奇数位置,因为只要有问题肯定会是奇偶错位,那么矫正了一个那另一个肯定也是被矫正了的,不过这样的话查找错误位置就得从这个位置向两边找了吧,
  * 
  * 
  * 官方题解 双指针方案
  * 
  * 就是维护单双号的两个指针,然后循环一个,每次加2,如果循环到的位置内的数据不对则开始步进另一个,也是每次+2,找这边的错误数据之后让这两个位置互换,然后继续循环,而且都不需要回退到开头
  */