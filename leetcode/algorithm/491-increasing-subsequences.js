/**
 * 491. 递增子序列
 *
 * 给定一个整型数组, 你的任务是找到所有该数组的递增子序列，递增子序列的长度至少是2。
 */

/**
 * 无法解决去掉中间数据的问题
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    if(!nums.length){
        return [];
    }
    let arr = [];
    for (let i = 0; i < nums.length; i++) {
        let temp = [nums[i]];
        for (let j = i+1; j < nums.length; j++) {
            if(nums[j] >= temp[temp.length-1])
            temp.push(nums[j])
            arr.push(JSON.parse( JSON.stringify(temp)))
        }
        
    }
    console.log(arr);
};

findSubsequences([4, 6, 7, 7])

/**
 * 官方题解 二进制枚举 + 哈希
 * 
 * java 代码
 * 
 * class Solution {
 *      List<Integer> temp = new ArrayList<Integer>();
 *      List<List<Integer>> ans = new ArrayList<List<Integer>>();
 *      Set<Integer> set = new HashSet<Integer>();
 *      int n;
 * 
 *      public List<List<Integer>> findSubsequences(int[] nums) {
 *          n = nums.length;
 *          for(int i = 0;i< (1<<n);++i) {
 *              findSubsequenes(i,nums);
 *              int hashValue = getHash(263,(int) 1E9 + 7);
 *              if(check() && !set.contains(hashValue)) {
 *                  ans.ass(new ArrayList<Integer>(temp));
 *                  set.add(hashValue);
 *              }
 *          }
 *          return ans;
 *      } 
 *      public void findSubsequences(int mask,int[] nums) {
 *          temp.clear();
 *          for(int i = 0; i < n; ++i) {
 *              if((mask & 1) != 0) {
 *                  temp.add(nums[i]);
 *              }
 *              mask >>= 1;
 *          }
 *      }
 *      public int getHash(int bash,int mod) {
 *          int hashValue = 0;
 *          for(int x : temp) {
 *              hashValue = hashValue * base % mod + (x + 101);
 *              hashValue %= mod;
 *          }
 *          return hashValue;
 *      }
 * 
 *      public boolean check() {
 *          for (int i =1; i < temp.size(); ++i) {
 *              if(temp.get(i) < temp.get(i-1)) {
 *                  return false;
 *              }
 *          }
 *          return temp.size() >= 2;
 *      }
 * }
 */
