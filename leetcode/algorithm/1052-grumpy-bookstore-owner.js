/**
 * 1052. 爱生气的书店老板
 * 
 * 今天，书店老板有一家店打算试营业 customers.length 分钟。每分钟都有一些顾客（customers[i]）会进入书店，所有这些顾客都会在那一分钟结束后离开。
 * 在某些时候，书店老板会生气。 如果书店老板在第 i 分钟生气，那么 grumpy[i] = 1，否则 grumpy[i] = 0。 当书店老板生气时，那一分钟的顾客就会不满意，不生气则他们是满意的。
 * 书店老板知道一个秘密技巧，能抑制自己的情绪，可以让自己连续 X 分钟不生气，但却只能使用一次。
 * 请你返回这一天营业下来，最多有多少客户能够感到满意的数量。
 */

/**
 * 
 * 当忍住生气的这个窗口与不生气的时间只和,也就是要查询到这个忍住生气的窗口在哪时最优
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
    const times = customers.length;
    if(!X) return customers.reduce((acc,curr,idx)=>!grumpy[idx]?acc+curr:acc,0)
    if(times<= X) return customers.reduce((acc,curr)=>acc+curr,0)

    const queue = [];
    let max = 0;
    let temp = 0
    for (let i = 0; i < times; i++) {
        // 不用管不生气的时候 [还得管,占位]
        // 生气的时候把数据加到max里面,怼到队列里,如果超了就把队列里面的最后一个吐出来
            if(queue.length === X) {
               let del =  queue.shift();
               del !==-1 && (temp -= customers[del])
            }
            if(!grumpy[i]){
                queue.push(-1);
                continue;
            }
            queue.push(i)
            temp+=customers[i];
            max = Math.max(max,temp)
    }
    return customers.reduce((acc,curr,idx)=>!grumpy[idx]?acc+curr:acc,0)+ max;
};
/**
 * 执行用时：96 ms, 在所有 JavaScript 提交中击败了75.00%的用户
 * 内存消耗：42.4 MB, 在所有 JavaScript 提交中击败了31.71%的用户

 */