/**
 * 39. 组合总和
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 *      所有数字（包括 target）都是正整数。
 *      解集不能包含重复的组合。
 */

/**
 * 主要是回溯法的思想与具体的写作逻辑
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let = len = candidates.length;
  let result = [];
  if (!len) return result;
  candidates.sort((a, b) => a - b);
  let path = [];
  dfs(candidates, 0, len, target, path, result); // dfs
  return result;
};
const dfs = (candidates, begin, len, target, path, res) => {
    // 成功逻辑
  if (target === 0) {
    res.push(path.slice());
    return;
  }
  // 感觉就是阶乘,一阶一阶处理下去
  for (let i = begin; i < len; i++) {
    if (target - candidates[i] < 0) {
      break;
    }
    path.push(candidates[i]);
    dfs(candidates, i, len, target - candidates[i], path, res);
    path.pop();
  }
};
/**
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了70.24%的用户
 * 内存消耗：40.5 MB, 在所有 JavaScript 提交中击败了58.16%的用户
 */
/**
 * java代码
 * 
public class Solution {

    public List<List<Integer>> combinationSum(int[] candidates, int target) {
        int len = candidates.length;
        List<List<Integer>> res = new ArrayList<>();
        if (len == 0) {
            return res;
        }

        // 排序是剪枝的前提
        Arrays.sort(candidates);
        Deque<Integer> path = new ArrayDeque<>();
        dfs(candidates, 0, len, target, path, res);
        return res;
    }

    private void dfs(int[] candidates, int begin, int len, int target, Deque<Integer> path, List<List<Integer>> res) {
        // 由于进入更深层的时候，小于 0 的部分被剪枝，因此递归终止条件值只判断等于 0 的情况
        if (target == 0) {
            res.add(new ArrayList<>(path));
            return;
        }

        for (int i = begin; i < len; i++) {
            // 重点理解这里剪枝，前提是候选数组已经有序，
            if (target - candidates[i] < 0) {
                break;
            }
            
            path.addLast(candidates[i]);
            dfs(candidates, i, len, target - candidates[i], path, res);
            path.removeLast();
        }
    }
}
 */
