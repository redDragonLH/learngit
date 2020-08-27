/**
 * 332. 重新安排行程
 * 
 * 给定一个机票的字符串二维数组 [from, to]，子数组中的两个成员分别表示飞机出发和降落的机场地点，对该行程进行重新规划排序。所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。
 * 
 * 说明:
 * 
 * 如果存在多种有效的行程，你可以按字符自然排序返回最小的行程组合。例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前
 * 所有的机场都用三个大写字母表示（机场代码）。
 * 假定所有机票至少存在一种合理的行程。
 * 
 */

/**
 * 重新规划航线,也就是吧无序的二维数组按照 起点终点相连起来,使之成为一个链表,需要先轮询,整个二维数组,得到起点终点的映射表,并且在期间对比大小,处理环状数据(除非是直接指向,否则很难处理),
 * 并且如果一个机场出现多次,在最终结果里也可以出现多次
 * 
 * 注意:
 *      * 环
 *      * 对比大小
 * 先忽略环,
 * 
 * 问题: 
 *      1. 链表如果主链不在最小终点内,可能会造成断链
 *      2. 这应该是个图了~~广度优先搜索吗~
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    let len = tickets.length;
    if(!len) return [];
    let obj = {}
    for (let i = 0; i < len; i++) {
        if(obj[tickets[i][0]]) { // 映射表内已经存在
            findPos(obj[tickets[i][0]],tickets[i][1])
        }else {
            obj[tickets[i][0]] = [tickets[i][1]];
        }

    }
    // console.log(obj);
    let start = "JFK";
    let line = [start];
    let end= ''
    while(obj[start] && (end = obj[start].shift())) {
        line.push(end)
        start = end;
    }
    return line;
};
const findPos = (data,inset) => {

    let i = data.length;
    while(data[i-1] > inset) {
        data[i] = data[i-1];
        i--;
    }
    data[i] = inset;
}
console.log(findItinerary([["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]));
console.log(findItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));


/**
 * 官方题解 Hierholzer 算法
 * 
 * 欧拉图问题
 * 
 * 当选择字典序最小的节点前进时,可能会先走入死胡同,从而导致无法遍历到其他还未访问的边.
 *  对于每一个节点,它最多只有一个死胡同分支.依据对于半欧拉图的描述,只有那个入度与出度差为 1 的节点会导致死胡同.
 * 
 * 当顺序的考虑该问题,无法判断当前节点的哪一个分支是死胡同,可以倒过来思考,只有那个出入度差为1的节点会导致死胡同.而该节点必然是最后一个遍历到的节点.
 * 我们可以改变入栈的规则,当我们遍历完一个节点所连的所有节点后,才将该节点入栈(即逆序入栈)
 * 
 * 对于当前节点而言，从它的每一个非「死胡同」分支出发进行深度优先搜索，都将会搜回到当前节点。
 * 而从它的「死胡同」分支出发进行深度优先搜索将不会搜回到当前节点。也就是说当前节点的死胡同分支将会优先于其他非「死胡同」分支入栈。
 */

 /**
  * java 代码
  * 
  * class Solution {
  *     Map<String, PriorityQueue<String>> map = new HashMap<String, PrioritQueue<String>>();
  *     List<String> itinerary = new LinkedList<String>();
  *     
  *     public List<String> findItinerary(List<list<String>> tickets) {
  *         for(List<String> ticket : tickets) {
  *             String src = ticket.get(0),dst = ticker.get(1);
  *             if( !map.containsKey(src) ){
  *                 map.put(src, new PriorityQueue<String>());
  *             }
  *                 map.get(src).offer(dst)
  *         }
  *         dfs("JFK");
  *         Collections.reverse(itinerary);
  *         return itinerary;
  *     }
  *     
  *     public void dfs(String curr) {
  *         while (map.containsKey(curr) && map.get(curr).size() > 0) {
  *             String tmp = map.get(curr).poll();
  *             dfs(tmp);
  *         }
  *         itinerary.add(curr);
  *     }
  * }
  */