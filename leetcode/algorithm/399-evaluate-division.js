/**
 * 399. 除法求值
 * 
 * 给你一个变量对数组 equations 和一个实数值数组 values 作为已知条件，其中 equations[i] = [Ai, Bi] 和 values[i] 共同表示等式 Ai / Bi = values[i] 。每个 Ai 或 Bi 是一个表示单个变量的字符串。
 * 另有一些以数组 queries 表示的问题，其中 queries[j] = [Cj, Dj] 表示第 j 个问题，请你根据已知条件找出 Cj / Dj = ? 的结果作为答案。
 * 返回 所有问题的答案 。如果存在某个无法确定的答案，则用 -1.0 替代这个答案。
 * 注意：输入总是有效的。你可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。
 */

/**
 * 一点思路都没有,开头都没有,是把每个字母都求出来,还是有其他的办法进行简单的处理呢
 * 
 * 图相关的问题,以前接触较少,没有思路
 * 
 * 
 * 官方题解: 广度优先搜索
 *  首先建模成一个图,给定图中的一些点(变量),以及某些边的权值(两个变量的比值),对任意两点(两个变量)求出其路径长(两个变量的比值).
 *  所以我们需要变量 equations 数组,找到其中所有不同的字符串,并通过哈希表将每个不同的字符串映射成整数
 * 
 *  在构建完图之后,对于任何一个查询,就可以从起点出发,通过广度优先搜索的方式,不断更新起点与当前点之间的路径长度,直到搜索到终点为止
 * 
 * 
 * java 代码
 * 
 * class Pair {
 *  int index;
 *  double value;
 *  
 *  Pair(int index,double value) {
 *      this.index = index;
 *      this.value = value;
 *  }
 * }
 * 
 * class Solution {
 *  public double[] calcEquation(List<List<String>> equations,double[] value,List<List<String>> queries) {
 *      int nvars = 0;
 *      Map<String,Integer> variables = new HashMap<String,Integer>();
 * 
 *      int n = equations.size();
 *      for (int i = 0; i< n; i++) {
 *          if(!variables.containsKey(equations.get(i).get(0))) {
 *              variables.put(equations.get(i).get(0),nvars++);
 *          }
 *          if(!variables.containsKey(equations.get(i).get(1))) {
 *              variables.put(equations.get(i).get(1),nvars++);
 *          }
 *      }
 *      
 *      // 对于每个点,存储其直接连接到所有的点及对应的权值
 *      List<Pair>[] edges = new List[nvars];
 *      for (int i = 0;i < nvars; i++) {
 *          edges[i] = new ArrayList<Pair>();
 *      }
 *      for(int i = 0; i < n; i++) {
 *          int va = variables.get(equations.get(i).get(0));
 *          int vb = variables.get(equations.get(i).get(1));
 *          
 *          edges[va].add(new Pair(vb,values[i]));
 *          edges[vb].add(new Pair(va,1.0 / values[i]));
 *      }
 *  }
 * }
 */
