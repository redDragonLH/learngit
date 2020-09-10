/**
 * 40. 组合总和 II
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * candidates 中的每个数字在每个组合中只能使用一次。
 *
 * 说明：
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。
 */

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let result = [];
  let len = candidates.length;
  if (!len) return result;
  candidates.sort((a,b)=> a-b);
  console.log(candidates);
  dfs(candidates, len, 0, target, result, [],{});

  return result;
};
const dfs = (candidates, len, pos, target, result, path,obj) => {
    console.log(pos);

  if (target < 0) return false;
  if (target === 0) {
        for (let i = 0; i < result.length; i++) {
            if(result[i].join(',') === path.join(','))return 
        }
      result.push(path.slice());
    return;
  }

  for (let i = pos; i < len; i++) {
    if (target - candidates[i] >= 0 && !obj[i]) {
      path.push(candidates[i]);
      obj[i] = true
      dfs(candidates, len, i + 1, target - candidates[i], result, path,obj);
      path.pop();
      delete obj[i];
    }
  }
};
console.log(combinationSum2([10,1,2,7,6,1,5], 8));

/**
 * 还有很多可以优化的地方
 * 
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了35.96%的用户
 * 内存消耗：44.4 MB, 在所有 JavaScript 提交中击败了10.90%的用户
 */