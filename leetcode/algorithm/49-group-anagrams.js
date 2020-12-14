/**
 * 49. 字母异位词分组
 * 
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 说明：
 * 
 *      所有输入均为小写字母。
 *      不考虑答案输出的顺序。
 */

/**
 * 
 * 初版问题,
 *  1. 判断是否存在于子数组时过于复杂,
 *  2. 跳出的条件过于复杂,人为的
 *  3. 循环实在太多了
 *  4. 重复数据无法识别(循环顺序没问题,重复数据可以识别)
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const len = strs.length;
    if(len<2) return [strs]
    const result = [[strs[0]]];
    for (let i = 1; i < len; i++) {
        let istrue = false;
        // 每个元素在分类数组里面转一圈,有重复就重复
        for (let j = 0; j < result.length; j++) {

            let num = result[j][0];

            if(num.length !== strs[i].length)continue;
            istrue = isAnagrams(num,strs[i])
            // console.log(isAnagrams(num,strs[i]),num,strs[i]);
            if(istrue) {
                result[j].push(strs[i]);
                break;
            }

        }
        if(!istrue) {
            result.push([strs[i]]);
        }
    }
    return result;
};

const isAnagrams = (str1,str2)=> {
    const flag = new Array(str1.length).fill(0);
    console.log('-----------');
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if(str1[i] === str2[j] && !flag[j]){
                flag[j]+=1;
                break
            }
                
        }
    }

    for (let i = 0; i < flag.length; i++) {
        if(!flag[i]) return false;
        
    }
    return true;
}
// console.log(groupAnagrams(["ddddddddddg","dgggggggggg"]));


/**
 * 使用对象存储映射表
 * 排序 +  哈希表方案
 */
var groupAnagrams = function(strs) {
    const result = [[strs[0]]];
    const mapping = [];
    mapping.push(sort(strs[0]))
    loop1:
    for (let i = 1; i < strs.length; i++) {
        const strSort = sort(strs[i]);
        loop2:
        for (let j = 0; j < result.length; j++) {
            if(mapping[j].length !== strs[i].length) continue;
            if(mapping[j] === strSort){
                result[j].push(strs[i]);
                continue loop1
            }
        }
        result.push([strs[i]])
        mapping.push(sort(strs[i]))
    }
    return result;
}
const sort = (str) => str.split('').sort((a,b)=> a.charCodeAt()-b.charCodeAt()).join('');

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["ddddddddddg","dgggggggggg"]));
console.log(groupAnagrams(["",""]));

/**
 * 时间有点长~~~
 * 执行用时：380 ms, 在所有 JavaScript 提交中击败了5.01%的用户
 * 内存消耗：46.8 MB, 在所有 JavaScript 提交中击败了92.41%的用户
 */

/**
 * 官方题解 排序
 * 
 * 简洁,效率
 * 
 * 排序简单了不少,最终结果是从中间层转的,这样控制一个就可以了,并且使用map,这样减少了一个循环
 */
var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let array = Array.from(str);
        array.sort();
        let key = array.toString();
        let list = map.get(key) ? map.get(key) : new Array();
        list.push(str);
        map.set(key, list);
    }
    return Array.from(map.values());
};

/**
 * 官方题解,计数
 * 
 * 由于互为字母异位词的两个字符串包含的字母相同，因此两个字符串中的相同字母出现的次数一定是相同的，故可以将每个字母出现的次数使用字符串表示，作为哈希表的键。
 */
var groupAnagrams = function(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }
        // 数组就直接上,也是牛逼
        map[count] ? map[count].push(s) : map[count] = [s];
    }
    return Object.values(map);
};