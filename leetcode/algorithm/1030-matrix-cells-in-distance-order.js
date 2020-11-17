/**
 * 1030. 距离顺序排列矩阵单元格
 * 
 * 给出 R 行 C 列的矩阵，其中的单元格的整数坐标为 (r, c)，满足 0 <= r < R 且 0 <= c < C。
 * 另外，我们在该矩阵中给出了一个坐标为 (r0, c0) 的单元格。
 * 返回矩阵中的所有单元格的坐标，并按到 (r0, c0) 的距离从最小到最大的顺序排，其中，两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）
 */

 /**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
var allCellsDistOrder = function(R, C, r0, c0) {

};
/**
 * 曼哈顿距离
 * 
 * 两单元格(r1, c1) 和 (r2, c2) 之间的距离是曼哈顿距离，|r1 - r2| + |c1 - c2|。（你可以按任何满足此条件的顺序返回答案。）
 */

var allCellsDistOrder = (R, C, r0, c0) => {
    const res = [];
    const hash = {};

    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            // 曼哈顿距离为啥是~~
            const d = getD(i, j, r0, c0);
            if (!hash[d]) {
                // 这个位置点为啥是 i,j
                hash[d] = [[i, j]];
            } else {
                hash[d].push([i, j]);
            }
        }
    }
    for (let d = 0; d < R + C; d++) {
        if (!hash[d]) continue;
        for (const pair of hash[d]) {
            res.push(pair);
        }
    }
    return res;
};

var getD = (x1, y1, x2, y2) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};