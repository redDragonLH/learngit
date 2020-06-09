/**
 * 面试题29. 顺时针打印矩阵
 * 
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 */

 /**
  * 二维数组，所有每个数字的坐标有两个数字组成
  * 
  * 解法思路
  * 1. 按照数组排序顺序轮询，把元素放到正确的位置
  *     1. 得判断边界条件，感觉四个面都得判断么
  * 2. 找到一个办法按照打印顺序轮询二维数组
  * 
  * 怎么着判断条件都挺多
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let array = [];
    let len = matrix.length;
    if(!len) return matrix;
    let count = len * matrix[0].length;
    let i = 0;
    let f = 't';
    let loop = 0;
    let pos = [0,0];

    while(i < count) {
        i++;
        // 在矩阵的 上部分循环
        if(f === 't') {
            array.push(matrix[pos[0]][pos[1]]);
            if(pos[1] === matrix[0].length-1 - loop) {
                f = 'r';
                pos[0]++;
                continue;
            }
            pos[1]++;
            continue;

        // 在矩阵的 右部分向下循环
        } else if(f === 'r') {
            array.push(matrix[pos[0]][pos[1]])
            if(pos[0] === len-1 - loop) {
                f = 'b'
                pos[1]--;
                continue;
            }
            pos[0]++;
            continue;

        // 在矩阵的 下部分向左循环
        } else if(f === 'b') {
            array.push(matrix[pos[0]][pos[1]])
            if(pos[1] === loop) {
                f = 'l';
                pos[0]--;
                continue;
            }
            pos[1]--;
            continue;

        // 在矩阵的 左部分向上循环
        }else if(f === 'l') {
            array.push(matrix[pos[0]][pos[1]])
            if(pos[0] === loop + 1) {
                f = 't';
                loop++;
                pos = [loop,loop];
                continue;
            }
            pos[0]--;
        }
    }
    return array;
};

console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
/**
 * 及其没有方法的方法，而且可以简化的地方很多
 * 
 * 跑通逻辑
 * 
 * 时间复杂度 O(mn)，需要遍历每个数据
 * 空间复杂度 0(mn) 需要额外的变量存储整个数组
 * 
 * 执行用时 :116 ms, 在所有 JavaScript 提交中击败了24.21%的用户
 * 内存消耗 :39.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 * 
 * ----------------------------
 * 
 * 第一次实验；
 * 
 * 给每个if 的最后增加 continue 直接阻止循环向下做无用的判断
 * 
 * 提升近20ms，击败用户倒是提升巨大
 * 
 * 执行用时 :92 ms, 在所有 JavaScript 提交中击败了86.52%的用户
 * 内存消耗 :39.8 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */