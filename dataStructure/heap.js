/**
 * 堆 Heap
 * 
 *堆的作用：
 * 1.放一个元素进去
 * 2.总是能取出一个最大的元素出来(大，小的规矩可以通过一个比较函数来定义)
 *
 * 
 * 堆(heap)又被为优先队列(priority queue)。尽管名为优先队列，但堆并不是队列
 *
 * 堆并不一定是完全二叉树，平时使用完全二叉树的原因是易于存储，并且便于索引。
 * 
 * wiki:
 *    特别的树状数据结构，满足一下特性，即可称为堆：给定堆中任意节点P和C，若P是C的母节点，
 *  那么P的值小于等于（或大于等于）C的值。若母节点的值 恒小于等于 子节点的值，此堆称为 最小堆（mini heap ）；
 *  若母节点的值恒 大与等于 子节点的值，此堆称为 最大堆（max heap）
 */
/**
 * 性质：
 * 堆的实现通过构造二叉堆(binary heap)，实为二叉树的一种。由于其应用的普遍性，当不加限定时，均指该数据结构的这种实现。
 * 这种数据结构具有以下性质：
 * 
 *     任意节点小于（或大于）它的所有后裔，最小元（或最大元）在堆的根上（堆序性）
 *
 *      堆总是一颗完全树。即除了最底层，其他层的节点都被元素填满，且最底层尽可能从左到右填入
 */
/**
 * https://www.cnblogs.com/vamei/archive/2013/03/20/2966612.html
 */
 // 数组 实现


/**
 *  最大堆
 */
 class Maxheap {
   constructor() {
     //  占用了数组下标为0的位置，在0的位置放置了一个null。
     //  完全二叉树中，如果结点值为n,那么其左子树则为2n,右子树为2n+1；
     //  换句话说，对于任一结点n,其父结点为n/2 取整即可。
     this.list = [null];
     
   }
   /**
    * 插入
    * @param  {number} value [description]
    */
   insert(value){
     //新插入的元素首先放在数组最后，保持完全二叉树的特性
     
     if(this.list.indexOf(value) == -1){
       this.list.push(value);
     }else{
       return this.list[this.list.indexOf(value)];
     }
     // 获取最后一个元素的在数组中的索引位置,注意是从index=1的位置开始添加
     let index = this.list.length - 1;
     // 其父结点位置
     let pIndex = Math.floor( index / 2 );
     //在数组范围内，比较这个插入值和其父结点的大小关系，大于父结点则用父结点替换当前值，index位置上升为父结点

     while( index > 1 ){
       // 插入结点小于等于其父结点，则不用调整
       if( value > this.list[pIndex] ){
         // 依次把父结点较小的值替换下来
        this.list[index] = this.list[pIndex];
        // 向上升一层
        index = pIndex;
        // 新的父结点
        pIndex =  Math.floor(index / 2);
    
      }else{
          break;
        }
     }
     // 最终找到index 的位置，把值放进去
     this.list[index] = value;
   }
   /**
     * 堆的任意值的删除操作
     * 
     * 删除内部节点，不能简单删除，否则所有节点全部上移，打乱内容，
     * 找到最后一个节点，对删除节点进行替换，然后对被替换节点的现节点与左右子树进行对比，大的上升，小的下降
     */
   delete(value){
     if(this.list.length == 1){
       return false;
     }
     //得到数组中这个元素下标
     let index = this.list.indexOf(value)
     if(index == -1){ // 被删除元素不在数组中，即删除元素不在堆中
       return false;
     }
     // 获取最后一个元素的在数组中的索引位置,注意是从index=1的位置开始添加
     let lastIndex = this.list.length - 1;
     let temp = this.list[lastIndex];
     // 用最后一个元素替换被删除的位置
     this.list[index] = lastIndex;
     
     let parent;
     for (parent = index; parent *2 <= this.list.length - 1; parent = index) {
       //当前节点左子树下标
       index = parent * 2;
       // 左子树不等于数组长度，因此必然有右子树，则左右子树比较大小，这里的-1，是因为数组下标 =1 开始
       if( index != this.list.length -1 && this.list[index] < this.list[index +1]){
         // 如果右子树大，则下标指向右子树
         index += 1;
       }
       
       if( temp > this.list[index] ){
         // 当前节点大于其左右子树，则不用调整，直接退出
         break;
       }else{
         //子树上移，替换当前节点
         this.list[parent] = this.list[index];
       }
     }
     // parent 就是替换节点最终该处的位置
     this.list[parent] = temp;
     // 移除数组最后一个元素
     this.list.pop()
     
     return true;
   }
   getLength(){
     return this.list.length;
   }
   order(){
     this.list.map(x=> console.log(x));
   }
 }
　
//  let maxheap = new Maxheap();
//  for (var i = 0; i < 50; i++) {
//    maxheap.insert(Math.round(Math.random()*100));
//  }
//   maxheap.order()
// console.log(maxheap.delete(96));

/**
 * 最小堆
 * 
 * 最小堆，每一个结点的值都小于其左右子树的值，
 */

class MinHeap {
  constructor() {
    this.list= [null];
  }
  insert( value ){
    // 新插入的元素首先放在数组最后，保持完全二叉树的特性
    this.list.push(value)
    // 获取最后一个元素的在数组中的索引位置,注意是从index=1的位置开始添加，因此最后一个元素的位置是size-1
    let index = this.list.length - 1;
    //  其父节点位置
    let pIndex = Math.floor( index / 2 );
    
    //在数组范围内，比较这个插入值和其父结点的大小关系，小于父结点则用父结点替换当前值，index位置上升为父结点
    while( index > 1 ){
      //  插入节点大于等于其父节点，则不用调整
      if(value > this.list[pIndex]){
        break;
      }else{
        // 依次把父节点较大的值替换成插入值
        this.list[index] = this.list[pIndex];
        // 向上升一层
        index = pIndex;
        // 新的父节点
        pIndex = Math.floor( index / 2 );
      }
    }
    // 最终找到index 的位置，把值放进去
    this.list[ index ] = value;
  }
  delete(value){
    if( this.list.length == 1 ) {
      return false
    }
    // 得到数组中这个元素的下标
    let index = this.list.indexOf( value );
    if( index == -1 ){ // 被删除元素不在数组中，即删除元素不在堆中
      return false;
    }
    
    // 获取最后一个元素的在数组中的索引位置,注意是从index=1的位置开始添加，因此最后一个元素的位置是size-1
    let lastIndex = this.list.length -1;
    
    let temp = this.list[ lastIndex ];
    // 用最后一个元素替换被删除的位置
    this.list[index] = temp;
    
    let parent;
    for ( parent = index; parent *2 <= this.list.length -1;parent = index) {
      // 当前节点左子树下标
      index = parent * 2;
      // 左子树下标不等于数组长度，因此必然有右子树 ,则左右子树比较大小
      if( index != this.list.length -1 && this.list[ index ] > this.list[ index + 1 ] ){
        // 如果右子树小，则下标指向右子树
        index = index + 1;
      }
      if( temp < this.list[ index ]){
        //当前结点小于其左右子树，则不用调整，直接退出
        break;
        
      } else {
        // 子树上移，替换当前结点
        this.list[ parent ] == this.list[ index ];
      }
    }
    // parent 就是替换结点最终该处的位置
    this.list[ parent ] = temp;
    // 移除数组最后一个元素
    this.list.pop();
    return false;
  }
}
