/**
 * A* 算法
 * （路径规划）
 */
/**
 * # 基本概念
 *    启发式搜索： 启发式搜索就是在状态空间中的搜索对每一个搜索位置进行评估，得到最好的位置，
 * 再从这个位置进行搜索直到目标。在启发式搜索中，对位置的估价是十分重要
 *    估价函数： 从当前节点移动到目标节点的预估费用
 */
/**
 *  F = G + H;
 *  
 */


const MAP = [
    [ ' ',' ','X','X','X',' ','#',' ' ],
    [ ' ',' ','X','X',' ',' ',' ',' ' ],
    [ ' ',' ','X',' ',' ','X','X','X' ],
    [ 'X','X','X','X',' ','X','X','X' ],
    [ 'X','?',' ','X',' ','X','X','X' ],
    [ 'X','X','X','X',' ',' ',' ',' ' ],
    [ ' ',' ',' ','X','X','X',' ',' ' ],
    [ ' ',' ',' ','X','X','X',' ','@' ]
  ]

let getPoint = (flag, map) =>{
  let point = [];
  map.some((item, index, array) => {
    for (var i = 0; i < item.length; i++) {
      if(item[i] === flag){
        console.log(item[i]);
        point = [index,i];
        break;
      }
    }
  })
  return point;
}
const STARFLAG = '@';
let satrPoint = getPoint(STARFLAG, MAP);

const ENDFLAG = '#';
let endPoint = getPoint(ENDFLAG, MAP);

const computeH = (star, end) => {
 return  Math.abs(star[0] - end[0]) + Math.abs(star[1] - end[1]) * 10;
};

class Astar {
  constructor(map, star, end) {
    this.map = map; // 地图展开为二维数组
    this.openList = []; //
    this.closeList = []; //
    this.star = getPoint(star, this.map);
    this.end = getPoint(end, this.map);
    this.H = computeH(this.star, this.end);
    this.G = {
      0: 10,
      1: 14,
    };
    this.point = buildJustNowPoint( this.star);
  }
  buildJustNowPoint(nowpoint, low = {}){
    let point = {
      pos: nowpoint,
      parent: low
    }
    if(low !== {}) {
      point.F = getF(point, low);
    }
    return point;
  }
  getF(point,parentP){
    return this.H + this.G[isG(point,parentP)];
  }
  isG(point,parentP){
    if(!!Math.abs(parentP.pos[0]- point.pos[0]) && !!Math.abs(parentP.pos[1]- point.pos[1])){
      return 1;
    }
    return 0;
  }
}
