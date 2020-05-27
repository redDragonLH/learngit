/**
 * 974. 和可被 K 整除的子数组
 * 给定一个整数数组 A，返回其中元素之和可被 K 整除的（连续、非空）子数组的数目。
 * 
 * 提示：
 * 1 <= A.length <= 30000
 * -10000 <= A[i] <= 10000
 * 2 <= K <= 10000
 */
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * 不甚解～～
 */
var subarraysDivByK = function(A, K) {
    let map = new Map();
    map.set(0,1);
    let count = 0;
    let pre = 0;
    A.forEach(e => {
        pre += e;
        let modulus = (pre % K + K) % K;
        let same = map.get(modulus) || 0;
        count += same;
       map.set(modulus,same+1)
    });
    return count
};
subarraysDivByK([1,2,3,4,5,6],6)