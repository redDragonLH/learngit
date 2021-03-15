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
 * 
 */