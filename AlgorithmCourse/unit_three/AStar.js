/**
 * A* 算法
 */

class ANODE {
  constructor() {
    this.row = 0;
    int col = 0;
    g = 0;
    h = 0;
    prev_row = 0;
    prev_col = 0;
  }
  operator(n){
    if((row == n.row) && (col == n.col)){
      return true;
    }
    return false;
  }
}
class compare {
  constructor() {
    
  }
  operator(n1,n2){
    let f1 = n1.g + n1.h;
    let f2 = n2.g + n2.h;
    
    return f1 < f2;
  }
}
class AStar {
  constructor() {
    
  }
  findPath(from,to,path){
    
  }
  ExtractMiniFromOpen(/*ANODE*/ node){
    
  }
  IsNodeExistInClose(row,col){
    
  }
  IsEmpty(row,col){
    
  }
  GetPath(path){
    
  }
  let m_map,m_state,m_open,m_close;
}