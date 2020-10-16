/**
 * 1002. 查找常用字符
 * 给定仅有小写字母组成的字符串数组 A，返回列表中的每个字符串中都显示的全部字符（包括重复字符）组成的列表。例如，如果一个字符在每个字符串中出现 3 次，但不是 4 次，则需要在最终答案中包含该字符 3 次。
 * 你可以按任意顺序返回答案。
 */

/**
 * 有点过于复杂了~~~失败
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let str = A.reduce((acc,curr)=> acc.length>curr?curr:acc)
    console.log(str);
    let strmap = {};
    for (let i = 0; i < str.length; i++) {
        if(strmap[str[i]]) {
            strmap[str[i]]++;
        }else {
            strmap[str[i]]=1
        }
    }
    console.log(strmap);
    A.forEach((e,i)=> {
        let map = {}
        for (const key in strmap) {
            if(strmap.hasOwnProperty(key)) {
                if(e.indexOf(key)>-1) {
                    map[key]?map[key]++:map[key]=1;
                }
            }
        }
        strmap = map;
    })
console.log(strmap);
  
};

/**
 * 官方题解
 * 
 * 使用26个位置的数组映射26个小写字母,一目了然
 * 
class Solution {
    public List<String> commonChars(String[] A) {
        int[] minfreq = new int[26]; //数字数组,大小为26
        Arrays.fill(minfreq, Integer.MAX_VALUE); // 把数字数组的所有位置都置为最大数字
        for (String word: A) { // 循环数组A
            int[] freq = new int[26];//同上,但是初始化每个位置是0
            int length = word.length(); // 获取数组当前元素的长度
            for (int i = 0; i < length; ++i) {
                char ch = word.charAt(i);// 当前元素的循环的字符
                ++freq[ch - 'a']; //对应字符位置 +1
            }
            // 每处理一个元素则更新结果数组,26个位置对应的是26个小写字母
            for (int i = 0; i < 26; ++i) {
                minfreq[i] = Math.min(minfreq[i], freq[i]);
            }
        }
        // 最后把结果数组里有数据的位置对应的字母提取出来
        List<String> ans = new ArrayList<String>();
        for (int i = 0; i < 26; ++i) {
            for (int j = 0; j < minfreq[i]; ++j) {
                ans.add(String.valueOf((char) (i + 'a')));
            }
        }
        return ans;
    }
}
 */

/**
 * 第三方题解
 */

var commonChars = function(A) {
    let ans = [], word = A[0];
    for(let s of word){
        if(A.every(m => m.includes(s))) {
            A = A.map(m => m.replace(s, '')); // 单纯只有字符串只会替换第一个找到的字符
            console.log(A);
            ans.push(s);
        }
    }
    return ans
};
console.log(commonChars(["bella","label","roller"]));
