/**
 * 547. 省份数量
 * 
 * 有 n 个城市，其中一些彼此相连，另一些没有相连。如果城市 a 与城市 b 直接相连，且城市 b 与城市 c 直接相连，那么城市 a 与城市 c 间接相连。
 * 省份 是一组直接或间接相连的城市，组内不含其他没有相连的城市。
 * 给你一个 n x n 的矩阵 isConnected ，其中 isConnected[i][j] = 1 表示第 i 个城市和第 j 个城市直接相连，而 isConnected[i][j] = 0 表示二者不直接相连。
 * 返回矩阵中 省份 的数量。
 */

/**
 * 返回省份的数量,n*n,那么i和j 相等则是是一个位置,跳过
 * 
 * 还是图论嘛,但是相连不相连应该与有多少省份无关吧,难道还有拉斯维加斯那样的飞地???
 * 对呀,自己和自己肯定是相连的,这样就可以知道总数了, 理论应该没问题
 * 
 * 看错题了,人家要的是连在一起的集群的数量
 * 直接相连好算,间接的怎么确定
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function(isConnected) {
    const len = isConnected.length;
    if(!len) return len; 
    let points = [];

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if(isConnected[i][j]) {
                let isin = false;
                for (let k = 0; k < points.length; k++) {
                    if(points[k].includes(i+'')){
                        points[k]+=j;
                        isin=true
                        break;
                    } 
                    if(points[k].includes(j+'')){
                        points[k]+=i;
                        isin=false;
                        break;
                    } 
                }
                if(!isin) {
                    points.push(i+'')
                }
            }
        }
    }
    return points.length;
};
/**
 * 无法解决连接的数据位置错乱的问题,比如在全都连接在一起的数据中,应该在中间的连接点在最后,这样就拆成了3个数据
 */

/**
 * 并查集 概念
 * 
 * 是一种树形结构,用于处理一些不交集的合并及查询问题.
 * 
 * 使用联合-查找算法
 * 
 * 该算法定义两个用于次数据结构的操作
 *      * Find: 确定元素属于哪个子集.它可以被用来确定两个元素是否属于同一子集
 *      * Union: 将两个子集合并成同一个集合
 */

/**
 * 官方题解 并查集
 *  初始时,每个城市都属于不同的联通分量.遍历矩阵,如果两个城市之间有相连关系,则它们属于一个联通分量,对他们进行合并
 */
var findCircleNum = function(isConnected) {
    const provinces = isConnected.length;
    const parent = new Array(provinces).fill(0);
    // 初始化每个市,每个市都是孤岛
    for (let i = 0; i < provinces; i++) {
        parent[i] = i;
    }
    // 
    for (let i = 0; i < provinces; i++) {
        for (let j = i + 1; j < provinces; j++) {
            if (isConnected[i][j] == 1) {
                // 合并
                union(parent, i, j);
            }
        }
    }
    let circles = 0;
    for (let i = 0; i < provinces; i++) {
        if (parent[i] === i) {
            circles++;
        }
    }
    return circles;
};
// 这里有点蒙,是以怎样的原理合并数据的
const union = (parent, index1, index2) => {
    parent[find(parent, index1)] = find(parent, index2);
}

const find = (parent, index) => {
    if (parent[index] !== index) {
        parent[index] = find(parent, parent[index]);
    }
    return parent[index];
}