/**
 * 1046. 最后一块石头的重量
 * 
 * 有一堆石头，每块石头的重量都是正整数。
 * 每一回合，从中选出两块 最重的 石头，然后将它们一起粉碎。假设石头的重量分别为 x 和 y，且 x <= y。那么粉碎的可能结果如下：
 * 如果 x == y，那么两块石头都会被完全粉碎；
 * 如果 x != y，那么重量为 x 的石头将会完全粉碎，而重量为 y 的石头新重量为 y-x。
 * 最后，最多只会剩下一块石头。返回此石头的重量。如果没有石头剩下，就返回 0。
 */

/**
 * 这要有大顶堆多舒服~~
 * 失败,问题太多
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b)=>b-a);
    while(stones.length>1) {
        let [e1,e2] = [stones.shift(),stones.shift()]
        e1-e2>0 && insert(stones,e1-e2)
    }
    return stones[0] || 0
};
const insert = (arr,data)=> {
    if(data>arr[0]) return arr.unshift(data);
    if(data<arr[arr.length]) return arr.push(data)

    let index = arr.findIndex((e)=>data>=e);
    index = index ===-1?0:index
    arr.splice(index+1, 0, data);
}

/**
 * 每次轮询都排序
 */
var lastStoneWeight = function(stones) {
    while(stones.length>1) {
        stones.sort((a,b)=>b-a);
        let [e1,e2] = [stones.shift(),stones.shift()]
        e1-e2>0 && stones.push(e1-e2)
    }
    return stones[0] || 0
};
/**
 * 这应该超时~~~
 * 执行用时：84 ms, 在所有 JavaScript 提交中击败了65.28%的用户
 * 内存消耗：39.1 MB, 在所有 JavaScript 提交中击败了55.44%的用户
 */


/**
 * 要不要实现一个大顶堆~~
 */