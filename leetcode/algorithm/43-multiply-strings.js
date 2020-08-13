/**
 * 43. 字符串相乘
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 */

/**
 * 比较直接的逻辑就是从最后获取单个字符串,相乘,再加到结果里面
 * 有点麻烦,进位还要计算
 * 
 * 为啥最后都会处理的很复杂~~还是方法有问题
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  let len1 = num1.length - 1;
  let len2 = num2.length - 1;
  let pos = 0;
  let jin = 0;
  let result=0;
  while (len1 !== -1 || len2 !== -1) {
    //   console.log(Math.pow(10, pos));
    let temp1 = len1>-1 ? Number(num1[len1]) * Math.pow(10, pos) : 1;
    let temp2 = len2 >-1? Number(num2[len2]) * Math.pow(10, pos) : 1;
    console.log(temp1,temp2);
    let product = temp1*temp2 + jin* Math.pow(10, pos);
    jin = Math.floor( product / Math.pow(10, pos+1));
    result+=product
    len1--;
    len2--;
    pos++
  }
  return result.toString();
};

console.log(multiply("123", "456"));
/**
 * 失败
 */

/**
 * 另一种逻辑
 * 
 */
var multiply = function(num1, num2) {
    if(num1 == '0' || num2 == '0') return '0';
    num1 = num1 + '';
    num2 = num2 + '';
    let l1 = num1.length,l2 = num2.length, 
        store = new Array(l1 + l2 - 1).fill(0), t = 0, r = '';
    for( let i = 0; i < l2; i++ ){
      for( let j = 0; j < l1; j++ ){
        store[i + j] += (+num2[i] * + num1[j])
      }
    }
    let k = store.length;
    while(k--){
      t += store[k];
      r = t % 10 + r;
      t = t / 10 | 0;
    }
    return t > 0 ? (t + r) : r;
  }