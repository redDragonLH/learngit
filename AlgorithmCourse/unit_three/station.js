/**
 * 装配线与工作站问题
 */

class Program_T {
  constructor() {
    this.assemble_time[LINES][STATIONS];
    this.transport_time[LINES][STATIONS];
    this.enter_time[LINES];
    this.exit_time[LINES];
  }
}
class Result_T {
  constructor() {
    this.line[STATIONS];
    this.fs;
    this.fline[STATIONS];
    this.ffs;
  }
}
function search_stations_sequence( result_T, program_T, line , station ){
  if(station == STATIONS-1){ // 1. 完成装配，整理一次结果，退出当前递归子结构
    result_T.fs += para.assemble_time[line][station];
    result_T.fs += para.exit_time[line][station];
    result_T.line[station] = line;
    if(result_T.fs < result_T.ffs){
      result_T.ffs = result_T.fs;
    }
    return false;
  }
  // 2. 记录中间结果到line 属性中
  var curCost = result_T.fs + para.assemble_time[line][station];
  rt.line[station] = line;
  
  // 3. 调整line 和station 参数，完成递归子结构的动作
  /*选择本装配线的下一个装配站，开销忽略不计*/
  result_T.fs = curCost;
  search_stations_sequence(result_T,para,line, station + 1);
  
  /*选择另一条装配线的下一个装配站，需要计算转移开销*/
  result_T.fs = curCost;
  result_T.fs += para.transport_time[line][station + 1];
  
  var nextline = (line + 1 ) % LINES;
  search_stations_sequence(result_T,para,nextline,station + 1);
  
}