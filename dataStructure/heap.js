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
     * @param value
     * @return
     */
   delete(value){
     
   }
   order(){
     this.list.map(x=> console.log(x));
   }
 }
　
 let maxheap = new Maxheap();
 for (var i = 0; i < 50; i++) {
   maxheap.insert(Math.round(Math.random()*100));
 }
  maxheap.order()
