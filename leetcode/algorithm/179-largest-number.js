/**
 * 179. 最大数
 *
 * 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。
 * 注意：输出结果可能非常大，所以你需要返回一个字符串而不是整数。
 */

/**
 * 核心问题是怎样排序
 * [0,0]?????
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function (nums) {
    let str = nums.sort((a,b)=>(''+b+a) -(''+a+b)).join("")
    return str[0] === '0'? '0':str;
};
/**
 * 转为string ,不觉得是啥好方案
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了72.15%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了97.29%的用户
 */

/**
 * @param {number[]} nums
 * @return {string}
 */
 var largestNumber = function (nums) {
    function compare(a, b) {
      return a + b > b + a ? -1 : 1;
    }
    // 把数据一次性转为字符串,省的每次对比转换
    nums = nums.map((a) => (a += ''));
    nums.sort(compare);
    if (nums[0] == 0) {
      return '0';
    }
    return nums.join('');
  };