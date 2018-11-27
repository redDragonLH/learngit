/**
 * 二分逼近算法实现
 */

const PRECISION = 0.000000001;

function DichotomyEquation(a, b ,f){
  let mid = (a + b ) / 2.0;
  
  while((b - a) > PRECISION){
    if(f(a) * f(mid) < 0.0){ // 迭代递推
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