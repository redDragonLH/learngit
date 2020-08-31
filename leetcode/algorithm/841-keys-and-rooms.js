/**
 * 841. 钥匙和房间
 * 
 * 有 N 个房间，开始时你位于 0 号房间。每个房间有不同的号码：0，1，2，...，N-1，并且房间里可能有一些钥匙能使你进入下一个房间。
 * 在形式上，对于每个房间 i 都有一个钥匙列表 rooms[i]，每个钥匙 rooms[i][j] 由 [0,1，...，N-1] 中的一个整数表示，其中 N = rooms.length。 钥匙 rooms[i][j] = v 可以打开编号为 v 的房间。
 * 最初，除 0 号房间外的其余所有房间都被锁住。
 * 你可以自由地在房间之间来回走动。
 * 如果能进入每个房间返回 true，否则返回 false。
 */

/**
 * 也就是简单的搜索,如果能搜索到所有的房间,则可以认为通过
 * 
 * 广度优先搜索
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    let visited = new Array(rooms.length);
    let queue = [0];

    while(queue.length > 0) {
        let pos = queue.shift();
        if(visited[pos]) continue;

        visited[pos] = true; // 已过搜索的位置置 true
        let current = rooms[pos];

        current.forEach(e => {
            queue.push(e)  
        });
    }
    // 检查,如果有为空的位置则说明有无法进入的房间
    for(let i=0;i<visited.length;i++) {
        if(!visited[i]) return false;
    }
    return true;
};
/**
 * 执行用时：88 ms, 在所有 JavaScript 提交中击败了50.74%的用户
 * 内存消耗：39.9 MB, 在所有 JavaScript 提交中击败了47.89%的用户
 */