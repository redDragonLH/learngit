/**
 * 迭代法
 */

/**
 * 例
 *
 * 计算一个数的平方根
 *
 * 具体数学公式见md笔记
 */
const LOOP_LIMIT = 100;
function pair(a,eps){
  let xi = a /2.0, // 初始值用a 的一半
      xt = 0,
      count = 0;
  do {
    xt = xi;
    xi = (xt + (a / xt)) / 2.0;
    count++; // 用于检查是否收敛
    if(count >= LOOP_LIMIT){
      return [ false ,0.0];
    }
  } while (Math.abs(xi - xt) > eps);
  return [ true, xi ];
}
console.log(pair(4,1));