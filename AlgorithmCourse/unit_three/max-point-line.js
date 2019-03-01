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
console.log(EPS);
function isEqualFloat(v1,v2){
  if(Math.abs( v1-v2 )){
    return true;
  }
  return false
}
var point = {
  x:0,
  y:0
}
class point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
}
let points = [];

class Slope {
  constructor(k.p_idx) {
    this.k =k;
    this.p_idx =p_idx;
  }
}
function calcSlope(p0,p1){
  if(isEqualFloat(p0.x,p1.x)){ // 点的 x坐标相等，斜率无穷大
    return Number.MAX_VALUE; // 最大值
  }
  return (p1.y - p0.y) / (p1.x - p0.x);
}

