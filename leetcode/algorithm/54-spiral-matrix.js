/**
 * 54. 螺旋矩阵
 *
 * 给你一个 m 行 n 列的矩阵 matrix ，请按照 顺时针螺旋顺序 ，返回矩阵中的所有元素。
 */

/**
 *
 * 循环也可以,但是要么是正常的循环,但是元素有个公式映射到元素位置,要么循环的时候有个公式进行循环,然后直接怼到输出的数组元素里,否则效率会非常低
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

};

/**
 * 官方题解: 模拟螺旋
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }
    const rows = matrix.length, columns = matrix[0].length;
    const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
    const total = rows * columns;
    const order = new Array(total).fill(0);

    let directionIndex = 0, row = 0, column = 0;
    // 这个就不太理解了
    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    for (let i = 0; i < total; i++) {
        // 插入数据
        order[i] = matrix[row][column];
        // 位置确认
        visited[row][column] = true;
        const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
        //  这里没太看明白
        //  主要逻辑不太清楚,下一个位置不能超过一个限度
        if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
            // 
            directionIndex = (directionIndex + 1) % 4;
        }
        row += directions[directionIndex][0];
        column += directions[directionIndex][1];
    }
    return order;
};
/**
 * 官方题解 : 按层模拟
 * 
 * 这个比较容易理解,也没观察出这个规律来~~~
 */
var spiralOrder = function(matrix) {
    if (!matrix.length || !matrix[0].length) {
        return [];
    }

    const rows = matrix.length, columns = matrix[0].length;
    const order = [];
    let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
    while (left <= right && top <= bottom) {
        // 左到右
        for (let column = left; column <= right; column++) {
            order.push(matrix[top][column]);
        }
        // 上到下
        for (let row = top + 1; row <= bottom; row++) {
            order.push(matrix[row][right]);
        }
        if (left < right && top < bottom) {
        // 右到左

            for (let column = right - 1; column > left; column--) {
                order.push(matrix[bottom][column]);
            }
            // 下到上
            for (let row = bottom; row > top; row--) {
                order.push(matrix[row][left]);
            }
        }
        // 正好一个循环

        // 圈缩小
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return order;
};