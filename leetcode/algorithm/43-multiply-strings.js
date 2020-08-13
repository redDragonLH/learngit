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
  let result = 0;
  while (len1 !== -1 || len2 !== -1) {
    //   console.log(Math.pow(10, pos));
    let temp1 = len1 > -1 ? Number(num1[len1]) * Math.pow(10, pos) : 1;
    let temp2 = len2 > -1 ? Number(num2[len2]) * Math.pow(10, pos) : 1;
    console.log(temp1, temp2);
    let product = temp1 * temp2 + jin * Math.pow(10, pos);
    jin = Math.floor(product / Math.pow(10, pos + 1));
    result += product;
    len1--;
    len2--;
    pos++;
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
var multiply = function (num1, num2) {
  if (num1 == "0" || num2 == "0") return "0";
  // num1 = num1 + '';  // 无意义吧
  // num2 = num2 + '';
  let l1 = num1.length,
    l2 = num2.length,
    store = new Array(l1 + l2 - 1).fill(0),
    t = 0,
    r = "";
  for (let i = 0; i < l2; i++) {
    for (let j = 0; j < l1; j++) {
      store[i + j] += +num2[i] * +num1[j];
    }
  }
  let k = store.length;
  while (k--) {
    t += store[k];
    r = (t % 10) + r;
    t = (t / 10) | 0;
  }
  return t > 0 ? t + r : r;
};

/**
 * 官方题解: 做加法
 *
 * 可以通过竖式乘法计算乘积.从右往左遍历乘数,将乘数的每一位与被乘数相乘得到对应的结果,再将每次得到的结果累加
 *
 * 注意:num2 除了最低位以外,其余的每一位的运算结果都需要补0
 */
/**
 * class Solution {
 *      public String multiply (String num1.String num2) {
 *          if(num1.equale("0") || num2.equale("0")) {
 *              return "0";
 *          }
 *          String ans = "0";
 *          int m = num1.length(),n = num2.length();
 *          for (int i = n - 1; i >= 0; i--) {
 *              StringBuffer curr = new StringBuffer();
 *              int add = 0;
 *              for (int j= n - 1; j > i; i--) {
 *                  curr.append(0);
 *              }
 *              int y = num2.charAt(i) - '0';
 *              for (int j = m - 1; j >=0; j--) {
 *                  int x= num1.charAt(j) - '0';
 *                  int product = x * y + add;
 *                  curr.append(product % 10);
 *                  add = product / 10;
 *              }
 *              if(add != 0 ) {
 *                  curr.append(add % 10);
 *              }
 *              ans = addStrings(ans,curr.reverse().toString());
 *          }
 *          return ans;
 *      }
 *      public String addStrings(String num1,String num2) {
 *          int i = num1.length() - 1,j = nums2.length() - 1,add = 0;
 *          StringBuffer ans = new StringBuffer();
 *          while(i >= 0 || j >= 0 || add != 0) {
 *              int x = j >= 0 ? num1.charAt(i) - '0' : 0;
 *              int y = j >= 0 ? num2.charAt(j) - '0' : 0;
 *              int result = x + y + add;
 *              ans.append(result % 10);
 *              add = result / 10;
 *              i--;
 *              j--;
 *          }
 *          ans.reverse();
 *          return ans.toString();
 *      }
 * }
 */
