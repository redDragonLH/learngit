/**
 * 装配线与工作站问题
 */
/**
 *最终的装配时间 = 每次移动底盘需要的时间 + 在每个工作站的装配时间
 * 
 */
 const STATIONS = 6; // 每条线6个装配站 // 有点多余
 const LINES = 2; // 2个装配线  // 有点多余，都可以在函数内计算出来

//  测试数据
const program_T = {
    assemble_time: [ [7, 9, 3, 4, 8, 4 ],[8, 5, 6, 4, 5, 7]], // 装配时间
    transport_time: [[0, 2, 3, 1, 3, 4 ], [0, 2, 1, 2, 2, 1]], // 换站时间
    enter_time: [2, 4],
    exit_time: [3, 2 ]
}
// 遍历时保存数据的结构，当前以及最优
let Result_T = {
    line: [], //遍历过程中的当前结果记录
    fs: 0,//遍历过程中的当前结果记录
    fline: [], //当前已知的最优结果
    ffs: 0 //当前已知的最优结果
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

function memmove(toArr,arr,num){
    arrayObj.slice(start, [end]);
}
/**
 * [search_stations_sequence description]
 * @param  {array} rt      Result_T
 * @param  {array} para    Program_T
 * @param  {number} line    line
 * @param  {number} station station
 * @return {[type]}         [description]
 */
function search_stations_sequence(rt, para, line, station){
    if(station === (STATIONS - 1)){ //1. 完成装配，整理一次结果，退出当前递归子结构
        rt.fs += para.assemble_time[line][station]; // 更新时间
        rt.fs += para.exit_time[line]; // 更新时间
        rt.line[station] = line; // 更新站点

        if(rt.fs < rt.ffs || rt.ffs === 0 ){  // 当前穷举到的路径时间开销更小
            rt.ffs = rt.fs;
            rt.fline = rt.line.slice(0, STATIONS)
            // memmove(rt.fline, rt.line, STATIONS )
        }
        return;
    }
    //  2, 记录中间结果到 line 属性中
    var curCost = rt.fs + para.assemble_time[line][station];
    
    rt.line[station] = line;
    
    //  3 调整 line 和 station 参数，完成递归子结构的动作
    // 选择本装配线的下一个装配站，开销忽略不计
    
    /**
     * 递归路线：
     *  递归会在 1处递归到1号线得最深处，然后从最深处开始在2处往回递归，
     *  并且因为会先通过 1 处逻辑，导致1，2处交叉递归，遍历所有方案
     */
    rt.fs = curCost;
    search_stations_sequence(rt, para, line, station + 1); // 1
    // 
    rt.fs = curCost;
    rt.fs += para.transport_time[line][station + 1 ];
    var nextline = (line + 1) % LINES;
    search_stations_sequence(rt, para, nextline, station + 1); // 2
}

function print_result(Result_T){
  
}
    Result_T.fs = program_T.enter_time[0];  //装配线1的进入开销
    search_stations_sequence(Result_T, program_T, 0, 0); //从第一条装配线开始
    Result_T.fs = program_T.enter_time[1];  //装配线1的进入开销
    search_stations_sequence(Result_T, program_T, 1, 0); //从第二条装配线开始
    console.log(Result_T);