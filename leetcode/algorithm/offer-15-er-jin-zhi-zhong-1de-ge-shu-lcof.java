/**
 * 剑指 Offer 15. 二进制中1的个数
 *
 * 请实现一个函数，输入一个整数（以二进制串形式），输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
 */

public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        return Integer.bitCount(n);
    }
}
/**

 * 执行用时：1 ms, 在所有 Java 提交中击败了96.63%的用户
 * 内存消耗：35.5 MB, 在所有 Java 提交中击败了26.38%的用户
 */

public class Solution {
    // you need to treat n as an unsigned value
    public int hammingWeight(int n) {
        int result = 0;
        for(int i = 0; i < 32 ; i++) {
            result += n >> i & 1;
        } 
        return result;
    }
}
/**
 * 执行用时：0 ms, 在所有 Java 提交中击败了100.00%的用户
 * 内存消耗：35.4 MB, 在所有 Java 提交中击败了39.20%的用户
 */