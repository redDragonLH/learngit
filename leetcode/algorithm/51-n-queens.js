/**
 * 51. N 皇后
 *
 * n 皇后问题研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。
 *
 * 给定一个整数 n，返回所有不同的 n 皇后问题的解决方案。
 * 每一种解法包含一个明确的 n 皇后问题的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。
 *
 * 提示：
 * 皇后彼此不能相互攻击，也就是说：任何两个皇后都不能处于同一条横行、纵行或斜线上。
 */

/**
 * 最直接也是最差的方案就是轮询
 *
 * 回溯法: 遍历的一种实现把,可以在计算完成之后返回设定的状态,然后继续从原状态转移到其他状态从新计算
 *  n皇后 使用回溯法进行计算,因为在此类问题中皇后不能同行,同列,同斜,那么每个皇后必须放到不同行列,
 *
 * 回溯法的具体逻辑:
 *      使用一个数组记录每行放置的皇后的列下标,依次在每一行放置一个皇后.每次新放置的皇后都不能和已经放置的皇后之间有攻击
 * :即新放置的皇后benign和任何一个已经放置的皇后在同一列以及同一条斜线上,并更新数组中的当前行的皇后列下标.
 * 当N个皇后都放置完毕,则找到一个可能的解.找到一个可能的解之后,将数组转换成表示棋盘状态的列表,并将该棋盘状态的列表加入返回列表
 *
 * 比较麻烦的是怎么判断斜着的状态
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {};

/**
 * java 代码 回溯法
class Solution {
    public List<List<String>> solveNQueens(int n){
        List<List<String>> solutions  = new ArrayList<List<String>>(); // 返回的数据结构,二维数组
        int[] queens = new int[n];
        Arrays.fill(queens,-1); // 所有数据置空
        Set<Integer> columns = new HashSet<Integer>(); // 有皇后的列
        Set<Integer> diagonals1 = new HashSet<Integer>(); // 斜线上是否有
        Set<Integer> diagonals2 = new HashSet<Integer>(); // 另一边斜线上
        // 以上都是数据的准备

        backtrack(solutions, queens, n, 0, columns, diagonals1, diagonals2);
        return solutions;
    }
    public void backtrack(List<List<String>> solutions, int[] queens,int n, int row, Set<Integer> columns, Set<Integer> diagonals1, Set<Integer> diagonals2) {
        if(row == n) { // 最后一行已经处理完毕
            List<String> board = generateBoard(queens, n);
            solutions.add(board);
        } else {
            for(int i = 0; i < n; i++) { // 循环所有列
                if(columns.contains(i)) { // 当前列已经处理
                    continue;
                }
                // 斜线上这个判断与条件没理解
                // 斜线对应的行下标和列下标之间的关系是:在从左上到右下同一条斜线上的点,它的行列下标之差 相等,另一个方向的行下标之和相等
                int diagonal1 = row - i;
                if(diagonals1.contains(diagonal1)) { // 当前斜线上有
                    continue;
                }
                int diagonal2 = row + i;
                if(diagonals2.contains(diagonal2)) { // 另一条斜线上有
                    continue;
                }
                // 如果判断都成功则进行数据处理并以现在的状态进入下一个位置的搜寻
                queens[row] = i;
                columns.add(i);
                diagonals1.add(diagonal1);
                diagonals2.add(diagonal2);
                backtrack(solutions, queens, n, row + 1, columns,diagonals1,diagonals2); // 递归处理下一行
                
                queens[row] = -1; // 处理到最深 之后再往上反,并且清除已经处理过的数据
                columns.remove(i);
                diagonals1.remove(diagonal1);
                diagonals2.remove(diagonal2);
            }
        }
    }
    public List<String> generateBoard(int[] queens, int n) {
        List<String> board = new ArrayList<String>();
        for(int i = 0;i < n;i++) {
            char[] row = new char[n];
            Arrays.fill(row,'.');
            row[queens[i]] = 'Q';// 每行按照 计算出来的最后结果构建数组
            board.add(new String(row));
        }
        return board;
    }
}

 */
