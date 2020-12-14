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
 * 哈希表方案
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