/**
 * 338. 比特位计数
 *
 * 给定一个非负整数 num。对于 0 ≤ i ≤ num 范围中的每个数字 i ，计算其二进制数中的 1 的数目并将它们作为数组返回。
 *
 * 进阶:
 *  给出时间复杂度为O(n*sizeof(integer))的解答非常容易。但你可以在线性时间O(n)内用一趟扫描做到吗？
 *  要求算法的空间复杂度为O(n)。
 *  你能进一步完善解法吗？要求在C++或任何其他语言中不使用任何内置函数（如 C++ 中的 __builtin_popcount）来执行此操作。
 */

/**
 * 最直接的,最直觉的解决方案,嵌套循环,先转为二进制字符串,然后计算
 * 
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = [];
  for (let j = 0; j <= num; j++) {
    let binary = parseInt(j).toString(2);
    let count = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === "1") count += 1;
    }
    result.push(count);
  }
  return result;
};

/**
 * 执行用时：140 ms, 在所有 JavaScript 提交中击败了23.50%的用户
 * 内存消耗：44.9 MB, 在所有 JavaScript 提交中击败了20.05%的用户
 */

/**
 * 官方题解: 最高有效位
 * 
 * 出发思路比较简单,就是一个奇数的前一个偶数的二进制格式肯定比这个奇数少一个 1
 * 
 * 一个偶数与他前一个奇数相比,1的数量是一样的,只是位置不同
 */
var countBits = function(num) {
    const bits = new Array(num + 1).fill(0);
    let highBit = 0;
    for (let i = 1; i <= num; i++) {
        // 最主要的一句话
        // 按位与: 在a,b的位表示中，每一个对应的位都为1则返回1， 否则返回0,也就是 当同一个位置的两个数据是1,则在返回值中+2,只有一个1,或者没有则返回值+0
        // 
        // 只有偶数更新,例子: 100/11
        if ((i & (i - 1)) == 0) {
            highBit = i;
        }
        bits[i] = bits[i - highBit] + 1;
    }
    return bits;
};

/**
 * 第三方优秀题解
 * 
 *  对于一个二进制数来说，如果它的最低位为1(%2 为 1）,则它与 n/2 的 1 个数相差1。 如果它的最低位为 0，则它与 n/2 的 1 个数相同 这样就可以用前面的推出后面的
 * 
public int[] countBits(int num) {
    int dp[] = new int[num+1];
    for (int i = 0; i <= num/2; i++) {
        dp[i*2] = dp[i];
        if(i*2+1 <= num)
            dp[i*2+1] = dp[i] + 1;
    }
    return dp;
}
 */
