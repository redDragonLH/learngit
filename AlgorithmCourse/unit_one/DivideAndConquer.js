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