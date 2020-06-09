/**
 * 990. 等式方程的可满足性
 * 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
 * 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 
 */

/**
 * 
 * 思路： 失败
 *      1. 先找到转换的方法，应该可以赋不同的值
 *          1. 长度只有4，
 *          2. 方式只有两种 == ，!= 
 * 思路2： 并查集
 *      1. 因为相等具有传递性，例： a == b, b == c,那么  a == c，这样的话，在有相同符号的不同等式里，这些等式是相关联的，只要数组内的不等式中不同时包含相关联的等式的符号，即算可以通过判定
 */


/**
 * java 代码
 * 
 * class Solution {
 *      public booean equationsPossible(String[] equations) {
 *          int length = equations.length;
 *          int[] parent = now int[26];
 *          for(int i = 0; i < 26; i++) {
 *              parent[i] = i;
 *          }
 *          for(String str : equations) {
 *              if(str.charAt(1) == '=') {
 *                  int index1 = str.charAt(0) - 'a';
 *                  int index2 = str.charAt(3) - 'a';
 *                  union(parent,index1,index,2);
 *              }
 *          }
 *          for (String str : equations) {
 *              if(str.charAt(1) == '!') {
 *                  int index1 = str.charAt(0) - 'a';
 *                  int index2 = str.charAt(3) - 'a';
 *                  if(find(parent,index1)==find(parent, index2)) {
 *                      return false;
 *                  }
 *              }
 *          }
 *          return true;
 *      }
 *      public void union(int[] parent,int index1,int index2) {
 *          parent[find(parent,index1)] = find(parent,index2);
 *      }
 *      public int find(int[] parent,int index){
 *          while(parent[index] != index) {
 *              parent[index] = parent[parent[index]];
 *              index = parent[index];
 *          }
 *          return index;
 *      }
 * }
 */