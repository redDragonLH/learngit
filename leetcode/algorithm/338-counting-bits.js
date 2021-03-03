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