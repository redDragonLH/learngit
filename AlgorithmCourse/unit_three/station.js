/**
 * 装配线与工作站问题
 */
/**
 *最终的装配时间 = 每次移动底盘需要的时间 + 在每个工作站的装配时间
 * 
 */

//  测试数据
const program_T = {
    assemble_time: [[7, 9, 3, 4, 8, 4 ],[8, 5, 6, 4, 5, 7]], // 装配时间
    transport_time: [[0, 2, 3, 1, 3, 4 ], [0, 2, 1, 2, 2, 1]], // 换站时间
    enter_time: [2, 4],
    exit_time: [3, 2 ]
}
// 遍历结果的数据结构
let Result_T = {
    line: [], //遍历过程中的当前结果记录
    fs: 0,
    fline: [], //当前已知的最优结果
    ffs: 0
}

/**
 * 算法实现的核心： 汽车底盘从一个工作站移动到下一个工作站
 *
 * 两种方式移动：
 *
 *  1. 移动到第 i 条装配线上的第 j+1 个工作站；
 *  2. 移动到第 (i+1)%2 条装配线上的第 j+1 个工作站，需要记录转移装配线的开销。
 *
 *      注： (i+1)%2 的意义就是当 i 是 0 的时候，转到 1 号装配线，当 i 是 1 的时候，转到 0 号装配线）。
 *
 *
 * 
 */
/**
 * [search_stations_sequence description]
 * @param  {array} rt      Result_T
 * @param  {array} para    Program_T
 * @param  {number} line    line
 * @param  {number} station station
 * @return {[type]}         [description]
 */
function search_stations_sequence(rt, para, line, station){
    
}