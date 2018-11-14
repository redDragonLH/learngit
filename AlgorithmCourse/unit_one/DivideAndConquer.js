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
// console.log(intArray);
// console.log(quick_sort(intArray));


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

/**
 *
 * 有问题

function swap(chList,pos1,pos2){
  if(pos1 !== pos2){
    chListA = chList.split('');
    let tmp = chListA[pos1];
    chListA[pos1] = chListA[pos2];
    chListA[pos2] = tmp;
    chList = chListA.join('');
  }
  return chList;
}



function permutation(chList,begin,end){
  if(begin == end){ // 就剩一个字符，直接输出结果
    console.log(chList);
  }
  for (var i = begin; i <= end; i++) { // 循环，从传入的开始到结束
    chList = swap(chList, begin, i); //位置不一样则调换 字符串位置
    permutation(chList, begin+1, end); // 起始位置 +1 继续递归
    chList = swap(chList, begin, i); // 
  }
}
let chList = '12';
permutation(chList, 0, chList.length); // 把字符串与 起始字符位置和字符串长度也就是最后字符位置传入 
**/

/**
 * 尾递归版本
 * 依旧有问题 ，内存不够~~
 */
function permutation(str,result){
  'use strict';
  let tempArr = [];
  // 终止条件str长度为 0
  if(str.length == 0){
    console.log(result);
    return result;
  } else {
    // 第一次递归，插入首字母
    if(result.length === 0){
      tempArr.push(str[0]);
    }else{
      for (var i = 0; i < result.length; i++) {
        let item = result[i];
        let itemLen = item.length;
        for (var j = 0; j < itemLen + 1; j++) {
          let temp = item.slice(0,j) + str[0] + item.slice(j);
          tempArr.push(temp);
        }
      }
    }
    // 递归截取第一个字符串的字符
    return permutation(str.slice(0),tempArr);
  }
  
}
// console.log(permutation("1234",[]));
/**
 * https://segmentfault.com/a/1190000013434175
 * 递归版，没有问题、
 *
 * 解决思路：使用递归的方式在中部进行字符串分解，剩最后一个后返回数据并且在上一层递归中组合被去掉的 字符串首字母进行循环，拼接。
 *           拼接完的字符串作为在当前字符串长度内已经排列完毕的字符串数组返回到上一层递归进行下一次循环
 * 
 * 也就是从一个字符开始一次一次排列，分治法~
 */
function permutate(str) {
    //保存每一轮递归的排列结果
    var result = []; // 返回值
    //初始条件：长度为1
    // 递归 函数每次减少一个首字母，最后减少到一个字母，才开始进行排列计算
    if (str.length == 1) {
        return [str]
    } else {
        //求剩余子串的全排列,对每个排列进行遍历
        // 先在这个地方递归 直到 str 变为 1 个字符 
        // 然后把这个字符串包装成数组返回进行下一阶段的处理
        
        // 每次递归减少一个字符串，
        var preResult = permutate(str.slice(1)); // 传入的字符串是去掉第一位后的字符串,也就是固定第一位的字符串，返回数组
        // 递归的返回值处理后，每次返回增加一个字符串
        // 每次返回完善一个字符，到最后一个字符组合完毕，然后开始最后的循环排列(缺少 str[0] ,在循环内添加处理)
        
        // preResult 返回值从一个字符开始每次都会在循环中排列完毕所以每次在已经排列好，没有重复的的字符串内每个位置插入被去掉的 str[0]，
        for (var j = 0; j < preResult.length; j++) {
            for (var k = 0; k < preResult[j].length + 1; k++) {
                //将首字母插入k位置  
                var temp = preResult[j].slice(0, k) + str[0] + preResult[j].slice(k);
                result.push(temp);
            }
        }
        return result;
    }
}
permutate('1234');

/**
 * 练习，二分查找
 * 从储存在数组中的有序排列中找到指定的数
 */
function binarySearch( arr, target ){
  let pivotIndex = Math.floor(arr.length / 2);
  if(arr[pivotIndex] === target) return pivotIndex;
  if(arr.length == 1 && arr[pivotIndex] !== target) return false;
  
  if(arr[pivotIndex] > target){
    arr = arr.splice(0,pivotIndex);
  }else{
    arr = arr.splice(pivotIndex,arr.length);
  }
   return binarySearch( arr, target )
}
let binarySearchArr = [1,2,3,4,5,6,7,8,9];
// console.log(binarySearch( binarySearchArr, 1 ));