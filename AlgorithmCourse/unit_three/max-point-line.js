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
// 浮点数精度范围 0.00000001
const EPS = 1e-8;
/**
 * 判断浮点数是否相等
 * @author liuhe
 * @anotherdate 2019-03-05T10:19:36+080
 * @param       {number}                v1 
 * @param       {number}                v2 
 * @return      {Boolean}                  两个浮点数是否相等
 *
 * 计算机储存浮点数十多的二进制形式，它和逻辑上理解的十进制小数存在表达误差，
 * 有的十进制小数无法用二进制小数精确表达（0.1 + 0.2 != 0.3）
 *
 * 对于浮点数，只要在精度要求的误差范围内，就可认为相等
 */
function isEqualFloat(v1,v2){
  if(Math.abs( v1-v2 ) < EPS){
    return true;
  }
  return false
}
/**
 * 单个点的结构
 */
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
};
/**
 * 两个点的斜率与 与第二个点的下标
 */
class Slope {
  constructor(k,p_idx) {
    this.k = k;
    this.p_idx = p_idx;
  }
}
/**
 * 斜率数组排序后某个数值的开始位置以及数量
 */
class Slope_Rec {
  constructor(obj) {
    this.start_idx = obj.start_idx;
    this.count= obj.count;
  }
}
/**
 * 获取斜率
 * @author liuhe
 * @anotherdate 2019-03-06T09:11:39+080
 * @param       {object}                p0 第一个点位置
 * @param       {object}                p1 第二个点位置
 * @return      {number}                   斜率或者Number.MAX_VALUE
 */
function calcSlope(p0,p1){
  if(isEqualFloat(p0.x,p1.x)){ // 点的 x坐标相等，斜率无穷大
    return Number.MAX_VALUE; // 最大值
  }
  return (p1.y - p0.y) / (p1.x - p0.x);
}
/**
 * 斜率比较
 * @author liuhe
 * @anotherdate 2019-03-06T09:12:51+080
 * @param       {[type]}                s1 [description]
 * @param       {[type]}                s2 [description]
 * @return      {[type]}                   [description]
 */
function  less_slope(s1,s2){
  return s1.k < s2.k;
}
/**
 * 排序的一部分，大小判定后更换位置饿函数
 * @author liuhe
 * @anotherdate 2019-03-06T09:13:10+080
 * @param       {array}                slopes 排序数组
 * @param       {number}                m      互换点
 * @param       {number}                n      呼唤点
 * @return      {array}                       排序后的数组
 */
function exchange(slopes, m, n){
  if(!slopes[m] || !slopes[n]) return slopes;
  let tmp = slopes[m];
  slopes[m] = slopes[n];
  slopes[n] = tmp;
  return slopes
}
/**
 * [partion description]
 * @author liuhe
 * @anotherdate 2019-03-06T09:15:41+080
 * @param       {[type]}                slopes [description]
 * @param       {[type]}                p      [description]
 * @param       {[type]}                r      [description]
 * @return      {[type]}                       [description]
 */
function partion(slopes,p,r){
  let x = slopes[r].k,
      j = p;
      for (var i = p; i < r; i++) { // 循环slopes 从r开始的位置
        if(slopes[i].k < x){ // 判断r往后的位置的k是否比r位置小
          if(i != j){
           slopes = exchange(slopes, i, j)// 判断成功则变换位置
          }
          j++
        }
      }
      if(j < slopes.length-1){ 
        slopes = exchange(slopes, j, r);
      }
      return {slopes: slopes,i:j};
}
/**
 * 排序入口
 * @author liuhe
 * @anotherdate 2019-03-06T09:28:38+080
 * @param       {[type]}                slopes [description]
 * @param       {[type]}                p      [description]
 * @param       {[type]}                r      [description]
 * @return      {[type]}                       [description]
 */
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
/**
 * 获取最多共线点的列表
 * 使用的是排序后的数组
 * @author liuhe
 * @anotherdate 2019-03-06T09:30:55+080
 * @param       {[type]}                slopes [description]
 * @return      {class}                       [description]
 */
function getMaxPointList(slopes){
  let max_len = 0,
      max_start_pos = 0,
      
      len = 1,
      start_pos = 0;
  
  for (var i = 1; i < slopes.length; i++) {
    if(!isEqualFloat(slopes[i].k,slopes[i - 1].k)){ // 两点斜率不相等
      if(len > max_len){ // 获取的是连续的相等斜率
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

/**
 * 主体函数
 * @author liuhe
 * @anotherdate 2019-03-06T09:41:13+080
 * @param       {array}                points 点数组
 * @param       {number}                n      数组长度
 * @param       {array}                pts    点下标数组
 * @return      {object}                       斜率数组与点下标数组
 */

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

for (var i = 0; i < objs.points.length; i++) {
  console.log(objs.allPoint[objs.points[i]]);
}