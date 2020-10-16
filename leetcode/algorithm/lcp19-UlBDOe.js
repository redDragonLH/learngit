/**
 * LCP 19. 秋叶收藏集
 *
 * 小扣出去秋游，途中收集了一些红叶和黄叶，他利用这些叶子初步整理了一份秋叶收藏集 leaves， 字符串 leaves 仅包含小写字符 r 和 y， 其中字符 r 表示一片红叶，字符 y 表示一片黄叶。
 * 出于美观整齐的考虑，小扣想要将收藏集中树叶的排列调整成「红、黄、红」三部分。每部分树叶数量可以不相等，但均需大于等于 1。每次调整操作，小扣可以将一片红叶替换成黄叶或者将一片黄叶替换成红叶。请问小扣最少需要多少次调整操作才能将秋叶收藏集调整完毕。
 */

/**
 * 应该就是计算中间谁的数量最少,也不对,得是相邻的位置不对的叶子谁少,但是还是得看谁最少,,先试试
 * 
 * 理解错误,叶片可以直接替换,而不是交换位置
 * @param {string} leaves
 * @return {number}
 */
var minimumOperations = function (leaves) {
    let r = 0;let y = 0;
  let left = 0;let leftF= true;
  let right = leaves.length - 1;let rightF=true;
  while(left <= right) {
      // left
    if(leaves[left]!=='r' && leftF) {
        leftF= false;
    }
    if(!leftF){
        leaves[left] === 'r' && ++r
        leaves[left] === 'y' && ++y
    }

    // right
    if(leaves[right]!=='r' && rightF) {
        rightF= false;
    }
    if(!rightF && right !== left){
        leaves[right] === 'r' && ++r
        leaves[right] === 'y' && ++y
    }
    left++;

    right--;

  }
    return r>y?y:r;
};

