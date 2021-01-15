/**
 * 947. 移除最多的同行或同列石头
 * 
 * n 块石头放置在二维平面中的一些整数坐标点上。每个坐标点上最多只能有一块石头。
 * 如果一块石头的 同行或者同列 上有其他石头存在，那么就可以移除这块石头。
 * 给你一个长度为 n 的数组 stones ，其中 stones[i] = [xi, yi] 表示第 i 块石头的位置，返回 可以移除的石子 的最大数量。
 */

/**
 * @param {number[][]} stones
 * @return {number}
 */
/**
 * @param {number[][]} stones
 * @return {number}
 */

class UnionFind {
    constructor(n) {
      this.parent = new Array(n);
      this.size = new Array(n);
      this.count = 0;
    }
    find(x) {
      let parent = this.parent;
      while (x != parent[x]) {
        parent[x] = parent[ parent[x] ];
        x = parent[x];
      }
      return x;
    }
    ensure(x) {
        // 应该是初始化数据
      if (!this.parent[x]) { // 存在则不处理
        this.parent[x] = x;// 自成一体
        this.size[x] = 1; // 有数~
        this.count++;// 总数+1
      }
    }
    union(p, q) {
      // 两点分开处理真的没问题吗
      this.ensure(p);
      this.ensure(q);
      let parent = this.parent;
      let size = this.size;
      // 可能会找到已经存在的数据
      let rootP = this.find(p);
      let rootQ = this.find(q);
      if (rootP == rootQ) {
        return ;
      }
      // 合并,就是把父元素指向同一位置
      // 为啥是谁大谁做根
      if (size[rootP] > size[rootQ]) {
        parent[rootQ] = rootP;
        size[rootP] += size[rootQ]; // 数量也合并到这个根下
      } else {
        parent[rootP] = rootQ;
        size[rootQ] += size[rootP];
      }
      this.count--;
    }
  }
  
  var removeStones = function(stones) {
    let union = new UnionFind(20000);
    for (let i = 0; i < stones.length; i++) {
      let [x, y] = stones[i];
      union.union(x, y+10000);
    }
    return stones.length - union.count;
  };

/**
 * 并查集的核心就是判断是否是一个集里面的
 * 
 * 并查集数据模型挺有意思,脑子里面有点想不出来,而且并查集的大部分代码与原始数据结构不强相关
 * 
 * 并查集的合并操作 有点没理解
 */