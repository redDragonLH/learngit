/**
 * 739. 每日温度
 * 
 * 根据每日 气温 列表，请重新生成一个列表，对应位置的输出是需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 */

/**
 * 建立一个输出数组，然后轮询列表，从零位判断超出，获取到后再回到输出数组的下一位
 * 
 * 或者 从后往前处理？有一个对象维护着离处理元素的最近的各个温度的位置,这样一个元素的查找最多轮询70个数字
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
    let output = [];
    let len = T.length;
    let obj = new Map();
    for (let i = len - 1; i >= 0; i--) {
        let temperature = T[i];
        let data = getOverstep(temperature,obj);
        output.unshift(data === 0?0:data-i)
        obj.set(temperature,i)
    }
    console.log(obj);
    
    return output;
};
const getOverstep = (val, obj) => {
    let r = 0;
    obj.forEach((v,k) => {
        if(val < k && !r) r = v;
        if(val < k && v < r) r = v;
    });
    return r;
};
(dailyTemperatures([59,57,34,34,88,85,92,78,30,57,39,94,74,58,35,52,75,70,88,45,94,78,72,55,75,43,60,76,88,33,79,98,44,97,78,47,62,59,72,31,93,45,33,48,75,96,87,76,69,54,80,38,90,32,91,90,53,88,51,92,44,76,48,68,66,83,89,88,44,47,48,49,77,63,80,95,71,80,93,39,35,94,33,47,43,98,31,73,32,68,60,87,54,51,54,31,84,68,96,40,35,38,54,50,53,98,84,42,46,56,86,58,49,72,69,96,73,94,82,62,60,92,48,96,85,75,76,49,41,43,71,76,44,55,62,68,43,69,60,38,93,60,94,37,96,55,77,82,98,96,76,66,99,64,89,63,91,59,92,36,61,86,49,87,89,76,70,75,33,98,99,87,34,37,86,92,63,71,48,74,52,42,55,94,74,45,67,73,36,43,68,36,63,96,53,99,38,78,83,51,46,47,67,75,93,99,54,95,92,34,34,89,42,65,47,57,91,77,87,87,92,31,60,71,48,62,66,57,45,98,79,50,64,49,96,43,88,58,70,56,72,80,41,48,88,91,69,61,59,73,95,80,83,40,67,58,97,50,36,54,78,40,89,74,82,95,49,87,37,93,38,37,92,64,34,49,49,89,76,61,64,92,95,34,92,57,65,82,54,34,53,52,79,97,97,93,97,32,72,84,42,56,45,72,60,47,36,84,86,44,33,43,62,42,90,83,78,68,62,61,58,90,80,52,67,77,68,58,87,50,90,39,55,90,30,48,85,50,31,93,35,51,85,97,60,60,79,51,58,67,42,58,62,67,77,92,36,68,79,96,60,66,57,54,79,85,75,86,59,38,31,95,63,68,34,96,45,65,42,62,81,38,41,43,37,91,52,80,30,93,90,56,55,45,76,93,92,80,96,43,52,34,33,87,66,42,66,41,81,85,72,34,52,45,40,99,31,76,30,84,73,82,67,97,79,60,51,68,100,45,60,98,76,84,47,78,45,33,81,100,67,97,52,90,35,70,59,92,58,73,88,73,63,43,97,90,31,69,79,39,59,43,40,33,46,56,69,47,100,40,73,91,32,90,92,60,75,73,76,50,70,99,60,31,88,61,93,91,88,33,32,31,58,58,86,51,98,59,73,57,74,96,35,53,43,55,51,45,98,53,67,47,67,64,57,93,46,84,37,85,44,89,70,58,98,69,66,96,50,85,57,73,92,34,66,58,68,63,38,51,31,66,51,54,77,79,89,40,84,62,51,81,43,80,43,32,74,99,57,82,87,71,95,43,87,42,78,43,79,40,41,61,75,47,88,90,66,98,59,54,56,55,71,81,95,69,88,91,91,53,100,86,93,37,43,48,91,80,73,62,42,79,66,81,77,35,64,57,99,30,78,46,73,30,95,79,88,91,76,41,98,40,41,66,39,31,49,67,66,53,34,49,48,50,84,44,39,62,72,46,39,62,46,94,62,51,96,77,43,66,61,65,94,49,66,73,53,45,84,30,94,52,67,93,73,94,60,37,84,82,56,67,61,46,46,65,58,56,52,69,41,92,33,43,36,65,68,44,74,72,89,36,52,57,52,30,100,63,66,46,49,42,50,45,64,36,71,92,81,64,56,82,63,46,88,79,93,83,69,48,36,48,85,96,58,46,65,67,37,46,62,37,35,78,30,45,56,60,56,88,73,52,88,40,69,61,55,33,84,76,86,60,71,48,94,33,89,40,37,41,92,94,94,93,61,82,77,62,79,51,71,59,81,71,45,39,48,66,88,69,36,100,91,40,95,54,85,92,88,67,31,78,42,39,70,58,81,98,63,51,85,38,59,40,75,90,90,91,81,30,43,87,84,38,34,50,64,90,99,43,60,68,80,34,53,49,64,32,96,54,42,64,48,100,71,63,40,69,69,48,79,37,59,62,87,49,82,48,64,41,84,51,86,53,79,36,61,55,57,40,68,76,42,90,49,87,33,86,60,41,63,84,94,47,83,77,58,47,93,97,45,39,52,98,82,100,91,65,61,69,46,83,38,32,66,34,47,85,30,78,65,91,75,43,74,92,46,65,53,58,64,69,77,88,74,85,98,31,67,56,67,77,65,73,63,55,92,97,60,88,50,92,57,39,44,62,40,39,34,32,64,53,61,31,59,48,46,78,69,41,74,31,63,42,87,68,65,86,88,49,69,51,48,73,58,60,34,72,67,96,100,46,71,62,94,66,34,37,53,45,41,66,36,48,52,63,52,39,36,93,53,52,75,55,91,72,88,89,38,69]));

/**
 *  本来希望map元素按照栈先后进先出的顺序轮询，这样轮询的数据会少太多，但是map 是先进先出的顺序轮询～～
 *  结果每次要几乎轮询整个map才行,但是map应并不是太多，
 * 
 * 为什么运行这么慢咧
 * 
 * 执行用时 :728 ms, 在所有 JavaScript 提交中击败了28.36%的用户
 * 内存消耗 :47.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

 /**
  * 单调栈解法
  * 
  * 维护一个存储下标的单调栈，从栈底到栈顶的下标对应的温度列表中的温度依次递减。如果一个下标在单调栈里，则表示尚未找到下一次温度更高的下标
  * 
  * 正向遍历温度列表。对于温度列表中的每个元素 T[i]，如果栈为空，则直接将 i 进栈，
  * 如果栈不为空，则比较栈顶元素 prevIndex 对应的温度 T[prevIndex] 和当前 温度 T[i]，
  * 如果 T[i] > T[prevIndex],则将 prevIndex 移除，并将 prevIndex 对应的等待天数赋值为 i - prevIndex.
  * 重复上述操作直到栈为空或者栈顶元素对应的温度小于等于当前温度，然后将 i 进栈
  * 
  * 由于单调栈满足从栈底到栈顶元素对应的温度递减，因此每次有元素进栈时，会将温度更低的元素全部移除，并更新出栈元素对应的等待天数，这样可以确保等待天数一定是最小的。
  */
 /**
  * java 代码
  * 
  * class Solution {
  *     public int[] dailyTemperatures(int[] T) {
  *         int length = T.length;
  *         int[] ans = new int[length];
  *         Deque<Integer> stack = new LinkedList<Integer>();
  *         for(int i = 0;i < length; i++) {
  *             int temperature = T[i];
  *             while(!stack.isEmpty() && temperature > T[stack.peek()]) {
  *                 int prevIndex = stack.pop();
  *                 ans[prevIndex] = i - prevIndex;
  *             }
  *             stack.push(i);
  *         }
  *     return ans; 
  *     }
  * }
  */
 /**
  * 理解
  * 这个逻辑还是比较容易理解的，，
  * 对于栈这边的操作，因为栈顶元素维护的是当前未处理的元素的最小值，这样当处理到一个新元素的时候，只要是比栈顶小，则只需要压入栈
  * 大于栈顶元素则直接出栈，没有其他情况，站内的元素不一定是连续的，但是肯定是从顶到底温度递增的
  * 
  * 
  */