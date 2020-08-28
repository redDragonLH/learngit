/**
 * 657. 机器人能否返回原点
 * 
 * 在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。

移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。

注意：机器人“面朝”的方向无关紧要。 “R” 将始终使机器人向右移动一次，“L” 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。
 */

/**
 * 二维地图，行动是否回到原点，可以考虑坐标相加是否等0
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    if (!moves.length) return true;
    const mapping = {
        R: [1, 0],
        L: [-1, 0],
        U: [0, 1],
        D: [0, -1]
    }
    let coor = {
        x: 0,
        y: 0
    }
    for (let i = 0; i < moves.length; i++) {
        const pos = mapping[moves[i]]
        coor.x += pos[0]
        coor.y += pos[1]

    }
    return !coor.x && !coor.y;
};

/**
 * 没必要考虑当前位置，因为起点是 [0，0],要确定是否回到原点，也就是走过的坐标的x,y分别相加肯定是0
 * 
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了42.66%的用户
 * 内存消耗：38.6 MB, 在所有 JavaScript 提交中击败了83.17%的用户
 */

/**
 * 超 精简版
 */
var judgeCircle = function (moves) {
    let x = 0, y = 0;
    for (let m of moves) {
      switch (m) {
        case 'U':
          y--;
          break;
        case 'D':
          y++;
          break;
        case 'L':
          x--;
          break;
        case 'R':
          x++;
          break;
      }
    }
    return x === 0 && y === 0;
  };