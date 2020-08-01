/**
 * 请将一个随机数组按以下规则排序
  1.自中间位至两侧由大到小对称排列
  2.处于对称位置的元素中线左侧元素大于与之对应的右侧元素
例1
  原始数组：arr = [8,0,3,3,5,4,6]
  排序后：arr = [3,4,6,8,5,3,0]

例2
  原始数组：arr = [3,5,-1,2,2,2,9,-7]
  排序后：arr = [-1,2,3,9,5,2,2,-7]
 */
const sort = (nums) => {
  let tmpArr = [];
  let isOdd = nums.length % 2;
  nums = nums.sort((a, b) => {
    return a < b;
  });
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    if (isOdd) i % 2 ? tmpArr.unshift(temp) : tmpArr.push(temp);
    else i % 2 ? tmpArr.push(temp) : tmpArr.unshift(temp);
  }
  return tmpArr;
};
console.log(sort([8, 0, 3, 3, 5, 4, 6]));
console.log(sort([3, 5, -1, 2, 2, 2, 9, -7]));
