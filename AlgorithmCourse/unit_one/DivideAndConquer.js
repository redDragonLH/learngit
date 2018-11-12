/**
 * 分治
 */


/**
 * 快速排序
 * 
 * 快速排序思想
 * 1. 在数据集中，选择一个元素作为基准(pivot)
 * 2. 所有小于基准的元素，都移到基准的左边，所有大于基准的元素，都移到基准的右边
 * 3. 对基准左边呵右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
 */


function quick_sort(array) {
  if(array.length <= 1 ) return array;
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array.splice(pivotIndex,1)[0];
  let left = []; // 两个空数组 （感觉耗能比较大~~）
  let right = [];
  
  for (var i = 0; i < array.length; i++) {
    if(array[i] < pivot){
      left.push(array[i]); // 小的放左边
    }else{
      right.push(array[i]); // 大的放右边
    }
  }
  return quick_sort(left).concat([pivot],quick_sort(right));
}

let intArray = [12, 56, 22, 78, 102, 6, 90, 57, 29];
console.log(intArray);
console.log(quick_sort(intArray));


/**
 * 字符串全排列问题
 *
 * 问题 ： 给定一个没有重复字母的字符串，输出该字符串中字符的所有排列
 *
 * 常用策略：每次选择固定一个字符，然后对剩下的字符进行排列 （减小规模）
 *
 * 通常方法：
 *
 * 1. 一个方法是用字符串的开始位置和字符串的长度表示一个子字符串，对于一个长度为 n 的字符串，用这种方法定义的子问题就是“从位置 i 开始 ,长度为 m 的字符串,
 *    其中， 1 <= i < n， 0 < m <= n” ，原始问题就是hi从位置1开始，长度为n 的字符串
 * 2. 另一个方法是用字符串的位置区间来表示一个字符串，同样对于一个长度为n的字符串，用这种方法定义的字问题就是“从位置 i 开始，到位置j 结束的字符串，其中， 
 *    1 <= i < n,i <= j <= n”,原始问题就是从位置i开始，到位置j结束的字符串。
 *
 */

