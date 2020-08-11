/**
 * 130. 被围绕的区域
 *
 * 给定一个二维的矩阵，包含 'X' 和 'O'（字母 O）。
 * 找到所有被 'X' 围绕的区域，并将这些区域里所有的 'O' 用 'X' 填充。
 *
 * 解释:
 * 被围绕的区间不会存在于边界上，换句话说，任何边界上的 'O' 都不会被填充为 'X'。
 * 任何不在边界上，或不与边界上的 'O' 相连的 'O' 最终都会被填充为 'X'。如果两个元素在水平或垂直方向相邻，则称它们是“相连”的。
 */

/**
 * 比较暴力的就是轮询,不过可以缓存数据,好像缓存也没啥用,不过可以缓存是否是包围的X,
 *
 * 但是也可以循环检查四周的O,然后标记连接到边界的O,其他的全部赋值为X
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  let row = board.length;
  if (!row) return board;
  let line = board[0].length;
  let flags = Array(board.length);
  for (let i = 0; i < flags.length; i++) {
    flags[i] = Array(line);
  }
  let rowW = row - 1;
  let lineW = line - 1;
  for (let i = 0; i < row; i++) {
    if (board[i][0] === "O") {
      dfsRow(i, 0, board, flags);
    }
    if (board[i][lineW] === "O") {
      dfsRow(i, lineW, board, flags);
    }
  }

  for (let i = 0; i < lineW; i++) {
    if (board[0][i] === "O") {
      dfsRow(0, i, board, flags);
    }
    if (board[rowW][i] === "O") {
      dfsRow(rowW, i, board, flags);
    }
  }
  //   console.log(flags);
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < line; j++) {
      if (!flags[i][j] && board[i][j] === "O") {
        board[i][j] = "X";
      }
    }
  }
};
const dfsRow = (row, line, board, flags) => {
  let arr = [[row, line]];
  while (arr.length > 0) {
    let [row, line] = arr.shift();
    if (!flags[row][line] && board[row][line] === "O") {
      flags[row][line] = true;
    }
    if (
      board[row + 1] &&
      !flags[row + 1][line] &&
      board[row + 1][line] === "O"
    ) {
      arr.push([row + 1, line]);
    } else if (
      board[row - 1] &&
      !flags[row - 1][line] &&
      board[row - 1][line] === "O"
    ) {
      arr.push([row - 1, line]);
    }

    if (board[row] && !flags[row][line + 1] && board[row][line + 1] === "O") {
      arr.push([row, line + 1]);
    } else if (
      board[row] &&
      !flags[row][line - 1] &&
      board[row][line - 1] === "O"
    ) {
      arr.push([row, line - 1]);
    }

    if (
      board[row][line + 1] &&
      !flags[row][line + 1] &&
      board[row][line + 1] === "O"
    ) {
      arr.push([row, line + 1]);
    } else if (
      board[row][line - 1] &&
      !flags[row][line - 1] &&
      board[row][line - 1] === "O"
    ) {
      arr.push([row, line - 1]);
    }
    if (
      board[row + 1] &&
      !flags[row + 1][line] &&
      board[row + 1][line] === "O"
    ) {
      arr.push([row + 1, line]);
    } else if (
      board[row - 1] &&
      !flags[row - 1][line] &&
      board[row - 1][line] === "O"
    ) {
      arr.push([row - 1, line]);
    }
  }
};
solve([
  ["O", "X", "O"],
  ["X", "O", "X"],
  ["O", "X", "O"],
]);

// solve([
//   ["X", "O", "X", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "O", "O"],
//   ["X", "O", "O", "O", "O", "X", "O"],
//   ["O", "O", "O", "O", "X", "O", "X"],
//   ["O", "X", "O", "O", "O", "O", "O"],
//   ["O", "O", "O", "O", "O", "O", "O"],
//   ["O", "X", "O", "O", "O", "O", "O"],
// ]);

/**
 * 此题解失败,超出时间限制,这个方式最大的问题是在 在临时数组内从四个方向广度优先搜索,条件太多,需要搜索的太多
 */

 /**
  * 官方 深度优先搜索 java
  * 
  * class Solution {
  *   int n,m;
  *   public void solve (char[][] board) {
  *     n = board.length;
  *     if( n == 0) {
  *       return ;
  *     }
  *     m =board[0].length;
  *     for (int i = 0; i < n; i++) {
  *       dfs(board, i, 0);
  *       dfs(board, n - 1, i);
  *     }
  *     for (int i = 1; i < m - 1; i++) {
  *       dfs(board, n - 1, i);
  *       dfs(board, n - 1, i);
  *     }
  *     for (int i = 0; i < n; i++) {
  *       for (int j = 0; j < m; j++) {
  *         if(board[i][j] === 'A') {
  *           board[i][j] = 'O';
  *         } else if (board[i][j] == 'O') {
  *           board[i][j] = 'X';
  *         }
  *       }
  *     }
  *   }
  *   public void dfs(char[][] board,int x, int y) {
  *     if(x < 0 || x >= n || y < 0 || y >= m || board[x][y] !='O') {
  *       return;
  *     }
  *     board[x][y] = 'A';
  *     dfs(board,x + 1,y);
  *     dfs(board,x - 1,y);
  *     dfs(board,x,y + 1);
  *     dfs(board,x,y - 1);
  *   }
  * }
  */

/**
 * 写法简便~
 * 逻辑相似,dfs那里写的就差太远了
 * 
 */