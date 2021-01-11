/**
 * 1202. 交换字符串中的元素
 * 
 * 给你一个字符串 s，以及该字符串中的一些「索引对」数组 pairs，其中 pairs[i] = [a, b] 表示字符串中的两个索引（编号从 0 开始）。
 * 你可以 任意多次交换 在 pairs 中任意一对索引处的字符。
 * 返回在经过若干次交换后，s 可以变成的按字典序最小的字符串。
 */

/**
 * 路径相关,在一条路径下所能得到的最小字符串,还得注意死循环
 * @param {string} s
 * @param {number[][]} pairs
 * @return {string}
 */
var smallestStringWithSwaps = function(s, pairs) {
    // 还得先排序
    pairs.sort((a,b)=>a[0]-b[0])
    // 没啥思路,先分组,把能交换的分一组
    let groups = [];
    pairs.forEach(e => {
        let link = groups.filter(group=>group.includes(e[0])||group.includes(e[1]));
        if(link.length) {
            if(link[0].includes(e[1]) ) link[0].push(e[0])
            else link[0].push(e[1]);
        }else {
            groups.push(e) 
        }
    });
    groups.forEach(e=> {
        e.sort((a,b)=>s[a].charCodeAt()-s[b].charCodeAt())
    })
    // 数字的位置对上了,但是组合就没法组合了 陷入僵局
};

/**
 * 还是并查集
 */