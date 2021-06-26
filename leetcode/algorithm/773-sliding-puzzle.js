/**
 * 773. 滑动谜题
 * 
 * 在一个 2 x 3 的板上（board）有 5 块砖瓦，用数字 1~5 来表示, 以及一块空缺用 0 来表示.
 * 
 * 一次移动定义为选择 0 与一个相邻的数字（上下左右）进行交换.
 * 
 * 最终当板 board 的结果是 [[1,2,3],[4,5,0]] 谜板被解开。
 * 
 * 给出一个谜板的初始状态，返回最少可以通过多少次移动解开谜板，如果不能解开谜板，则返回 -1 。
 */

/**
 * 官方题解 广度优先搜索
 * 
 * 恢复的有序 [[1,2,3],[4,5,0]],广度优先搜索怎样才能在无序初始阶段走到有序，虽然只能是0相邻的数交换
 * 
 * 和昨天的 752题的逻辑类似吗，每处理一整个队列算是一步，...，也能保证搜到的步数是最少的，因为是广度优先，所有的情况都会算进去，
 * 但是在遍历过程中每个状态都要保存一份副本吗
 * @param {number[][]} board
 * @return {number}
 */
 var slidingPuzzle = function(board) {
     // 保存的是0在第i位的时候可以交换的位置
    const neighbors = [[1, 3], [0, 2, 4], [1, 5], [0, 4], [1, 3, 5], [2, 4]];

    // 二维转一维
    const sb = [];
    for (let i = 0; i < 2; ++i) {
        for (let j = 0; j < 3; ++j) {
            
            sb.push(board[i][j]);
        }
    }
    // 判断初始状态
    const initial = sb.join('');
    if ("123450" === initial) {
        return 0;
    }

    let step = 0;
    const queue = [];
    queue.push(initial);
    const seen = new Set();
    seen.add(initial);

    // 枚举 status 通过一次交换操作得到的状态
    // 老一套，统一计算出枚举的状态
    const get = (status) => {
        const ret = [];
        const array = Array.from(status);
        const x = status.indexOf('0');
        for (const y of neighbors[x]) {
            [array[x], array[y]] = [array[y], array[x]];
            ret.push(array.join(''));
            [array[x], array[y]] = [array[y], array[x]];
        }
        return ret;
    }

    while (queue.length) {
        // 每清空一次队列，算是一步
        ++step;
        const size = queue.length;
        // 基本逻辑同752题
        for (let i = 0; i < size; ++i) {
            const status = queue.shift();
            for (const nextStatus of get(status)) {
                if (!seen.has(nextStatus)) {
                    if ("123450" === nextStatus) {
                        return step;
                    }
                    queue.push(nextStatus);
                    seen.add(nextStatus);
                }
            }
        }
    }

    return -1;
};