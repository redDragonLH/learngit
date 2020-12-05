/**
 * 621. 任务调度器
 * 
 * 给你一个用字符数组 tasks 表示的 CPU 需要执行的任务列表。其中每个字母表示一种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。在任何一个单位时间，CPU 可以完成一个任务，或者处于待命状态。
 * 然而，两个 相同种类 的任务之间必须有长度为整数 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 * 你需要计算完成所有任务所需要的 最短时间 。
 */

/**
 * 可以全排列搞哦~~~~~
 * 
 * 还是得先获取有多少种任务和数量，然后轮询排列，如果可以正好间隔则n-1,不能就留着
 * 
 * 走到死胡同,失败
 * 
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let len =  tasks.length
    if(!n) return len;
    const obj= new Array(26).fill(0);
    const AcharCode = 65;
    tasks.map(a=> obj[a.charCodeAt()-AcharCode]++);
    const content = [];
    obj.map(a=> a && content.push(a))
    let isOK = true;
    let cenLen = content.length;
    let count = 0
    while(isOK) {
        for (let i = 0; i < content.length; i++) {
            content[i]--;
            count++
            if(content[i] < 0) --cenLen;
        }
        if(cenLen<n)isOK = false;
    };
    for (let i = 0; i < content.length; i++) {
        if(content[i] >0)count+=content[i]
    }
    return count
};
leastInterval(["A","A","A","B","B","B"],2)