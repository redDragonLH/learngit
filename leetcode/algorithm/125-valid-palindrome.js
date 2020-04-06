/**
 * 125. 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 */

/**
 * 双指针法
 * 
 * 两个指针分别从前后循环并判断数据，如遇不符规则的数据则跳过并前进一步（这步操作同时判断，最少化轮询步数）
 * 
 * 这样得到的两个指针指着的数据就是回文串相对应的位置
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {    
    let lows = s.toLowerCase();
    let low = lows.length-1;
    let fast = 0;
    for (let i = low; i >= 0; i--) {
        let islow = !isValid(lows[low]);
        let isfast = !isValid(lows[fast])
        if(isfast || islow){
            islow && low--;
            isfast && fast++;
            continue;
        }
        if(lows[low] !== lows[fast]) {
            return false;
        } else {
            low--;
            fast++;
        }

    }
    return true;
};
let isValid = (str) => {
    let AscStr = str.charCodeAt();
    return (48 <= AscStr && AscStr <=57) || (97 <= AscStr && AscStr <= 122);
}
// let str =  "A man, a plan, a canal: Panama";
// let str = "race a car";
// console.log(isPalindrome(str));
/**
 * 最好表现下只需要循环一半的数据就可以判断
 * 
 * 时间复杂度 O(n)  或 O(2/n) 最好情况
 * 空间复杂度 O(1) 只使用常数个变量
 * 
 * 执行用时 :84 ms, 在所有 JavaScript 提交中击败了65.23%的用户
 * 内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了97.87%的用户
 */

