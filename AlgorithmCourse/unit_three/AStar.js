/**
 * A* 算法
 * （路径规划）
 */
/**
 * # 基本概念
 *    启发式搜索： 启发式搜索就是在状态空间中的搜索对每一个搜索位置进行评估，得到最好的位置，
 * 再从这个位置进行搜索直到目标。在启发式搜索中，对位置的估价是十分重要
 *    估价函数： 从当前节点移动到目标节点的预估费用
 * start: 路径规划的起始点，也是机器人当前位置或初始位置A
 * goal: 路径规划的终点，也是机器人想要到达的位置B
 * g_score: 当前点到沿着 start 点A产生的路径到A点的移动耗费
 * h_score: 不考虑不可通过区域，当前点到goal点B的理论移动耗费
 * f_score: g_score + h_score,通常也写为 F = G + H
 * 开启列表 openset： 寻路过程中的带检索节点列表
 * 关闭列表 closeset: 不需要再次检索的节点列表
 * 追溯表comaFrom :存储父子节点关系的列表，用于追溯生成路径
 */

const RedBlackTree = require('../../dataStructure/RedBlackTree');

/**
 * 指向红黑树最左边的节点
 * @anotherdate 2019-03-18T09:49:07+080
 * @return      {[type]}                []
 */
RedBlackTree.begin = () => {
  if(this.root){
    let left = this.root;
    while (left) {
      if(left.lchild){
        left = left.lchild;
      }else if(left.rchild){
        left = left.rchild;
      }else{
        break; 
      }
    }
    return left;
  }
}
RedBlackTree.end = () => {
  if(this.root){
    let right = this.root;
    while (right) {
      if(right.rchild){
        right = right.rchild;
      }else if(right.lchild){
        right = right.lchild;
      }else{
        break; 
      }
    }
    return right;
  }
}
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
    let fin = this.m_open.begin();
    if(fin === m_open.end()){
      return false;
    }
    
  }
  IsNodeExistInClose(row,col){
    
  }
  IsEmpty(row,col){
    
  }
  GetPath(path){
    
  }

}