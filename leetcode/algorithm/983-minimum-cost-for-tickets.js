/**
 * 983. 最低票价
 * 
 * 在一个火车旅行很受欢迎的国度，你提前一年计划了一些火车旅行。在接下来的一年里，你要旅行的日子将以一个名为 days 的数组给出。每一项是一个从 1 到 365 的整数。
 * 
 * 火车票有三种不同的销售方式：
 * 
 * 一张为期一天的通行证售价为 costs[0] 美元；
 * 一张为期七天的通行证售价为 costs[1] 美元；
 * 一张为期三十天的通行证售价为 costs[2] 美元。
 * 
 * 返回你想要完成在给定的列表 days 中列出的每一天的旅行所需要的最低消费。
 */

 /**
  * 
  * 思路:计算每天需要的花费，并且记录当前的需要旅行的天数，以及跨越的天数，跨越的天数一旦到达节点，就计算每天的平均值是否比一天的小，如果小则替换按一天票价计算出的总价
  * 
  * @param {number[]} days
  * @param {number[]} costs
  * @return {number}
  * 
  * 失败～～，判断条件过多，逻辑复杂
 */
var mincostTickets = function(days, costs) {
    let day = 0; // 天数
    let start = 0;// 跨度
    let count = 0;
    let lin = 0;
    for (let i = 0; i < days.length; i++) {
        console.log(days[i],count);
        
        day++;
        let costs1p = days[i] - days[start] <=7 && costs[1] / day;
        let costs2p = days[i] - days[start] <=30 && costs[2] / day;
        if(costs[0] > costs2p) {
            count+= costs[1];
            lin = day = 0;
            start = i;
        } else if(costs[0] > costs1p){
            count+= costs[2];
            lin = day = 0;
            start = i;
        } else {
            lin+= costs[0];
        }
    }
    return count + lin;
};
let days = [1,4,6,7,8,20];
let costs = [2,7,15];
console.log(mincostTickets(days,costs));

/**
 * 官方题解：记忆化搜索（日期变量型）
 * 
 * java 代码
 *  
 * class Solution {
 *      int[] costs;
 *      Integer[] memo;
 *      set<Integer> dayset;
 *      
 *      public int mincostTickets(int[] days,int[] costs) {
 *          this.costs = costs;
 *          memo = new Integer[366];
 *          dayset = new hashSet();
 *          for (int d:days) {
 *              dayset.add(d);
 *          }
 *          return dp(1);
 *      }
 * 
 *      public int dp(int i) {
 *          if( i > 365 ) {
 *              return 0;
 *          }
 *          if(memo[i] != null) {
 *              return memo[i];
 *          }
 *          if(dayset.contains(i)) {
 *              memo[i] = Math.min(Main.min(dp(i + 1) + costs[0], dp(i + 7) + costa[1]),dp(i + 30) + costs[2]);
 *          }else {
 *              memo[i] = dp(i +1);
 *          }
 *          return memo[i];
 *      }
 * } 
 */
/**
 * 题解2 记忆化搜索（窗口变量性）
 */