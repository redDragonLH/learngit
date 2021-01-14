/**
 * 1018. 可被 5 整除的二进制前缀
 * 
 * 给定由若干 0 和 1 组成的数组 A。我们定义 N_i：从 A[0] 到 A[i] 的第 i 个子数组被解释为一个二进制数（从最高有效位到最低有效位）。
 * 返回布尔值列表 answer，只有当 N_i 可以被 5 整除时，答案 answer[i] 为 true，否则为 false。
 */

/**
 * @param {number[]} A
 * @return {boolean[]}
 */
var prefixesDivBy5 = function(A) {
    const result = [];
    let temp = '';
    A.forEach(e=>{
        // console.log(parseInt(BigInt(temp+=e),2))
        // result.push(parseInt(BigInt(temp+=e),2)%5 === 0)
        result.push(parseInt(temp+=e,2)%5 === 0);
    });
    console.log(result);
    return result;
};
/**
 * 数字过大无法处理
 */

/**
 * 模拟
 */
var prefixesDivBy5 = function(A) {
    const list = [];
    let prefix = 0;
    const length = A.length;
    for (let i = 0; i < length; i++) {
        prefix = ((prefix << 1) + A[i]) % 5;
        list.push(prefix === 0);
    }
    return list;
};
/**
 * 此题涉及模运算法则,及除了除法外,几乎常见的运算都符合某种类似分配律的运算律
 * 1. (a + b) % p = (a % p + b % p) % p
 * 2. (a - b) % p = (a % p - b % p) % p
 * 3. (a * b) % p = (a % p * b * p) % p
 * 4. (a^b) % p = ((a % p)^b) % p
 * 
 * 假设想求 2^n对5的模 (即 2^n % 5),如果n很大,是无法通过计算出 2^n,再去取模的.那么依律3,可以先算 r = (2^n-1) % 5,再将
 * 结果r带入(r*2)%5,r也是递归求出来的.甚至依律3,还可以对2^(n/2) * 2^(n/2) 这样的拆分,以此实现类似快速幂的求模方式
 */