/**
 * 1300. 转变数组后最接近目标值的数组和
 * 
 * 给你一个整数数组 arr 和一个目标值 target ，请你返回一个整数 value ，使得将数组中所有大于 value 的值变成 value 后，数组的和最接近  target （最接近表示两者之差的绝对值最小）。
 * 如果有多种使得和最接近 target 的方案，请你返回这些整数中的最小值。
 * 请注意，答案不一定是 arr 中的数字。
 */

/**
 * 哎~只有大于value的值变成value，那就有点尴尬，但是理论上二分法的中的终点应该还是 target 除以数组数量的值（不行，value以前的数组元素可能会太小）
 * 然后要从头遍历，并相加计算当前的数值是否超出，如果超出，则是二分法当中的终点，上一个元素就是起点
 * 
 * 差值的绝对值~~~
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    //i + i-1 + 1-... + i* arr-i
    let len = arr.length;

    if(len === 0 && target === 0) return 0;
    if(len === 0 && target !== 0) return false;
    arr = arr.sort((a,b)=> a>b)
    console.log(arr);
    
    let star = 0;
    let count = 0;
    let end = arr[0];
    let min = Math.abs(count + arr[0]*(len) - target);
    let ic = len;
    for (let i = 1; i < len; i++) {
        let curry = Math.abs(count + arr[i]*(len - i)-target);
        
        if(curry <= min ){
            count += arr[i]
            min = curry;
            star = end; 
            end = arr[i];
            ic--
        } else {
            break;
        }
        
    }
    min = Math.abs(count + end*ic - target);
    
    let z = end;
    for (; star < end; end--) {
        if(Math.abs(count + end*ic - target) < min){
            z = end
        }
    }
    return z;
};

console.log(findBestValue([4,9,3],10));
