/**
 * 435. 无重叠区间
 * 
 * 给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。
 * 注意:
 *  可以认为区间的终点总是大于它的起点。
 *  区间 [1,2] 和 [2,3] 的边界相互“接触”，但没有相互重叠。
 */

/**
 * 还好吧,看那个区间是否包含,包含就干掉
 * 有个问题就是怎样判断删除哪个,不能先来后到,这样会有问题,是否考虑哪个范围大删除哪个
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    // 两个区间
    // 使用数组保存不相邻区间
    const interval = [intervals[0]];
    let result = 0;
    intervals.forEach((e,i)=> {
        if(i===0) return false;
        for (let i = 0; i < interval.length; i++) {
            if(e[1]<= interval[i][0] ||  e[0]>= interval[i][1] ) {
                interval.push(e)
                break;
            }else {
                // 这个条件失败,无法判断确定删除哪个
                if(interval[1]-interval[0]<e[1]-e[0]){
                    interval.splice(i,1,e)
                }
                result++;
            }
            
        }
    })
    return result;
};

/**
 * 官方题解: 动态规划
 * 
 * 题目等价于 「选出最多数量的区间,使它们互不重叠」.由于选出的区间互不重叠,
 * 因此我们可以将它们按照端点从小到大的顺序进行排序,并且无论我们按照左端点还是右端点进行排序,得到的结果都是唯一的
 * 
 */
var eraseOverlapIntervals = function(intervals) {
    if (!intervals.length) {
        return 0;
    }

    intervals.sort((a, b) => a[0] - b[0]);
    const n = intervals.length;
    const f = new Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
    }
    return n - Math.max(...f);
};