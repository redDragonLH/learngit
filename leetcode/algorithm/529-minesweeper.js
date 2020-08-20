/**
 * 529. 扫雷游戏
 *
 * 让我们一起来玩扫雷游戏！
 * 给定一个代表游戏板的二维字符矩阵。 'M' 代表一个未挖出的地雷，'E' 代表一个未挖出的空方块，'B' 代表没有相邻（上，下，左，右，和所有4个对角线）地雷的已挖出的空白方块，
 * 数字（'1' 到 '8'）表示有多少地雷与这块已挖出的方块相邻，'X' 则表示一个已挖出的地雷。
 * 现在给出在所有未挖出的方块中（'M'或者'E'）的下一个点击位置（行和列索引），根据以下规则，返回相应位置被点击后对应的面板：
 *
 * 如果一个地雷（'M'）被挖出，游戏就结束了- 把它改为 'X'。
 * 如果一个没有相邻地雷的空方块（'E'）被挖出，修改它为（'B'），并且所有和其相邻的未挖出方块都应该被递归地揭露。
 * 如果一个至少与一个地雷相邻的空方块（'E'）被挖出，修改它为数字（'1'到'8'），表示相邻地雷的数量。
 * 如果在此次点击中，若无更多方块可被揭露，则返回面板。
 * 
 * 
注意：

输入矩阵的宽和高的范围为 [1,50]。
点击的位置只能是未被挖出的方块 ('M' 或者 'E')，这也意味着面板至少包含一个可点击的方块。
输入面板不会是游戏结束的状态（即有地雷已被挖出）。
简单起见，未提及的规则在这个问题中可被忽略。例如，当游戏结束时你不需要挖出所有地雷，考虑所有你可能赢得游戏或标记方块的情况。
 */

/**
 * B 四周都是空白的位置
 * 1~8,四周有炸弹的数字
 * X 炸了的炸弹
 * 
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
var updateBoard = function (board, click) {
    let flag = board[click[0]][click[1]]
    if(flag === 'M') {
        board[click[0]][click[1]] = 'X';
        return board;
    }else if(flag === 'E'){
        bfs =(board,click)
    }

    
    console.log(flag);
};

/**
 * @param {character[][]} board
 * @param {number[]} click
 */
const bfs =(board,click,replac)=> {
    let line = board.length;
    let row= board[0].length;
    typeof board[click[0]][click[1]] === 'number' ? (board[click[0]][click[1]] += replac):(board[click[0]][click[1]] = replac);
    if(flag === 'M') {
        board[click[0]][click[1]] = 'X';
        click[0]>0 && updateBoard(board,[click[0]-1,click[1]],1);
        click[1]>0 && updateBoard(board,[click[0],click[1]-1],1);
        click[0]>line-1 && updateBoard(board,[click[0]+1,click[1]],1);
        click[1]>row-1 && updateBoard(board,[click[0],click[1]+1],1);

        click[0]>0 && click[1]>0 && updateBoard(board,[click[0]-1,click[1]-1],1);
        click[1]>row-1 && click[0]>0 && updateBoard(board,[click[0]-1,click[1]+1],1);
        click[1]>row-1 && click[1]>0 && updateBoard(board,[click[0]+1,click[1]+1],1);
        click[1]>0 && click[0]>line-1 && updateBoard(board,[click[0]+1,click[1]-1],1);
    }
}
updateBoard([['B', '1', 'E', '1', 'B'],
['B', '1', 'M', '1', 'B'],
['B', '1', '1', '1', 'B'],
['B', 'B', 'B', 'B', 'B']],[1,2])