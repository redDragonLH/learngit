/**
 * 多点共线问题
 * 
 */
/**
 * 算法处理 >斜率值进行统计
 *
 *  1. 准备表记录各个斜率值出现的次数
 *  2. 对每一个斜率值做 3或4 的处理
 *  3. 如果此斜率存在，则直接修改表中对应项的计数值 +1，并记录点信息
 *  4， 如斜率不存在，则将其增加到表中，将计数器值置为 1，并记录这个斜率值对应的点的信息；
 *  5. 遍历 N-1 个斜率值，重复第 2~4步，直到每个斜率都统计过一遍；
 *  6. 最后统计遍历表，找出计数值最高的斜率值和其对应的所有点信息
 */
const EPS = 1e-8;
function isEqualFloat(v1,v2){
  if(Math.abs( v1-v2 ) < EPS){
    return true;
  }
  return false
}
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
};
let points = [];

class Slope {
  constructor(k,p_idx) {
    this.k = k;
    this.p_idx = p_idx;
  }
}

class Slope_Rec {
  constructor(obj) {
    this.start_idx = obj.start_idx;
    this.count= obj.count;
  }
}
function calcSlope(p0,p1){
  if(isEqualFloat(p0.x,p1.x)){ // 点的 x坐标相等，斜率无穷大
    return Number.MAX_VALUE; // 最大值
  }
  return (p1.y - p0.y) / (p1.x - p0.x);
}
function  less_slope(s1,s2){
  return s1.k < s2.k;
}
function exchange(slopes, m, n){
  let tmp = slopes[m];
  slopes[m] = slopes[n];
  slopes[n] = tmp;
  return slopes
}
function partion(slopes,p,r){
  let x = slopes[r].k,
      j = p;
      for (var i = 0; i < r; i++) {
        if(slopes[i].k < x){
          if(i != j){
           slopes = exchange(slopes, i, j)
          }
          j++
        }
      }
      slopes = exchange(slopes, j, r)
      return {slopes: slopes,i:i};
}

function quick_sort(slopes, p, r){
  if(p < r){
    let obj = partion(slopes, p, r);
    let mid = obj.i;
    slopes = obj.slopes;
    quick_sort(slopes, p, mid - 1);
    quick_sort(slopes, mid + 1, r);
    return slopes
  }
}

function getMaxPointList(slopes){
  let max_len = 0,
      max_start_pos = 0,
      
      len = 1,
      start_pos = 0;
  
  for (var i = 1; i < slopes.length; i++) {
    if(!isEqualFloat(slopes[i].k,slopes[i - 1].k)){
      if(len > max_len){
        max_len = len;
        max_start_pos = start_pos;
      }
      start_pos = i;
      len = 1;
    }else {
      len++;
    }
  }
  return new Slope_Rec({start_idx:max_start_pos,count:max_len});
}


function straightLine(points, n, pts){
  let slopes = [];
  for (var i = 0; i < n; i++) {
    slopes = [];
    for (var j = 0; j < n; j++) {
      if(i == j){
        continue;
      }
      let k = calcSlope(points[i], points[j])
      slopes.push(new Slope(k,j))
    }
    slopes = quick_sort(slopes,0,slopes.length - 1);

    let posi = getMaxPointList(slopes);
    if(posi.count > pts.length){
      pts = [];
      pts.push(i);
      for (var p = posi.start_idx; p < (posi.start_idx + posi.count); p++) {
        pts.push(slopes[p].p_idx);
      }
    }
  }
  return {points: pts,allPoint:slopes};
}

let outPoints =  [[1301.0, 1256.0], [21.0, 28.0], [6222.0, 52.0], [-7071.0, -6264.0], [-6406.0, -1183.0],[-912.0, -1741.0], [39.0, 58.0], [3.0, -2.0], [57.0, 88.0], [1502.0, -7726.0],[30.0, 43.0], [-6932.0, 363.0], [-4422.0, -5669.0], [12.0, 13.0], [5874.0, -9005.0],[48.0, 73.0], [-2358.0, 129.0], [7703.0, 1806.0], [-3559.0, -1078.0], [-4808.0, -2166.0]] ;
let outPointsObJ = outPoints.map(function(e){
  return new Point(e[0],e[1])
})
let pts = [];
let objs = straightLine(outPointsObJ,outPointsObJ.length,pts)
console.log(objs.points);
for (var i = 0; i < objs.points.length; i++) {
  console.log(objs.allPoint[objs.points[i]]);
}