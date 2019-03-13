/**
 * A* 算法
 */
const RedBlackTree = require('../../dataStructure/RedBlackTree');

function manhattanDistance(n1, n2){
  return Math.abs(n1.row - n2.row ) + Math.abs(n1.col - n2.col);
}

class ANODE {
  constructor(obj) {
    this.row = obj.row;
    this.col = obj.col;
    this.g = obj.g;
    this.h = obj.h;
    this.prev_row = obj.prev_row;
    this.prev_col = obj.prev_col;
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
  constructor(map, state) {
    this.m_map = map;
    this.m_state = state;
    this.m_open = new RedBlackTree();
    this.m_close = [];
  }
  findPath(from, to, path){
    let source = new ANODE({
      row: from.row,
      col: from.col,
      g: 0.0,
      h: 0.0,
      prev_row: -1,
      prev_col: -1
    })
    let target  = new ANODE({
      row: to.row,
      col: to.col,
      g: 0.0,
      h: 0.0,
      prev_row: -1,
      prev_col: -1
    })
    this.m_open.insert(source);
    let cur_node = new ANODE({});
    
    while(this.ExtractMiniFromOpen(cur_node)){
      this.m_close.push(cur_node)
      if(cur_node == target){
        this.GetPath(path)
        return true;
      }
      const dirs =[ [-1, 0], [0, 1] ,[1, 0], [0, -1]];
      
      for (var i = 0; i < dirs.length; i++) {
        let nn = new ANODE({
          row: cur_node.row + dirs[i][0],
          col: cur_node.col + dirs[i][1],
          g: 0.0,
          h:0.0
        })
        if((nn.row >= 0) && nn.row < m_map){}
      }
    }
  }
  ExtractMiniFromOpen(/*ANODE*/ node){
    
  }
  IsNodeExistInClose(row,col){
    
  }
  IsEmpty(row,col){
    
  }
  GetPath(path){
    
  }

}