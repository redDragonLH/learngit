/**
 * 二分逼近算法实现
 */

const PRECISION = 0.000000001;

function DichotomyEquation(a, b ,f){
  let mid = (a + b ) / 2.0; // 获取中位数
  
  while((b - a) > PRECISION){ // 终止条件，b,a 差在可接受误差范围内，小数运算精度有问题，不能判断是否等于 0 
    if(f(a) * f(mid) < 0.0){ // 迭代递推,确定答案在那边
      b = mid
    }else{
      a = mid;
    }
    mid = (a + b) / 2.0; // 更新迭代变量
  }
  return mid;
}

/**
 * DichotomyEquation() 函数的 a 和 b 两个参数是区间范围 [a,b][a,b]，f 是求根方程 f(x) = 0f(x)=0 中 f(x)f(x) 的具体实现，对于 f(x) = 2x^{2} + 3.2x - 1.8f(x)=2x 
 * 2+3.2x−1.8，需要这样提供 f 参数：
 */
 function func( x ){
     return (2.0*x*x + 3.2*x - 1.8);
 }
 
/**
* 牛顿迭代法
*/
function CalcDerivative(f, x){
    return (f(x + 0.000005) - f(x - 0.000005)) / 0.00001;
}
 let INVALID_VALUE = 0;
 let MAX_RUN_LOOP = 1; // number
function NewtonRaphson(f,x0) {
  let x = INVALID_VALUE;
  let count = 0;
  do{
    let x1 = x0 - f(x0) / CalcDerivative(f,x0);
    if(Math.fabs(x1-x0) < PRECISION){
      x = x1;
      break;
    }
    x0 = x1;  //更新迭代变量
    count++;
  } while(count < MAX_RUN_LOOP);
  return x;
}