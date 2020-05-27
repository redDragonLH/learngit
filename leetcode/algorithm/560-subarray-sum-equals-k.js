/**
 * 560. 和为K的子数组
 * 
 * 给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
 */

/**
 * 枚举 双循环判断是否相加等于目标值
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let count = 0;
    for (let start = 0; start < nums.length; ++start) {
        let sum = 0;
        for (let end = start; end >= 0; --end) {
            sum += nums[end];
            if (sum == k) {
                count++;
            }
        }
    }
    return count;
};
/**
 * O(n^2)的时间复杂度
 */


/**
 * 前缀和 + 哈希表优化
 * 
 * 前缀和： 从0 - i （0 < i < length）的数据之和
 * 
 * pre[i] = pre[i−1] + nums[i]
 * 子数组 [i,j] 的和 pre[i] − pre[j−1] == k
 * 移项 pre[j−1] == pre[i] − k
 */

var subarraySum = function(nums, k) {
    /**
     * map 优点
     * 
     * 1. 不会像 object一样包含从原型链继承的键值数据
     * 2. 键可以是任意值，object只能是string 或 symbol
     * 3. Map的键是有序的，
     * 4. Map的键值对的数量可以使用 size 属性获取，object就得自己数
     * 5. Map 是 iterable 的，所以可以直接被迭代。object 必须获取键然后才能迭代
     * 6. 在频繁增删键值对的场景下表现更好
     */

    const mp = new Map(); // 定义数据结构
    mp.set(0, 1); // // 对于下标为 0 的元素，前缀和为 0，个数为 1
    let count = 0, pre = 0;
    for (const x of nums) { // 迭代数组
        pre += x; //迭代到当前的数据的和

        // 先获得前缀和为 pre - k 的个数，加到计数变量里
        if (mp.has(pre - k)) count += mp.get(pre - k); // 不怕有重复的吗，
        if (mp.has(pre)) mp.set(pre, mp.get(pre) + 1);
        else mp.set(pre, 1);
    }
    return count;
};