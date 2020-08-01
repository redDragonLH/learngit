# 树状数组（Binary Indexed Tree, Fenwick Tree）
> 是一种用于高效处理对一个存储数字的列表进行更新及求前缀和的数据结构

解决的典型问题就是对一个数组进行如下操作：
1. `update(idx,delta)`：将`num`加到位置`idx`的数字上
2. `prefixSum(idx)`：求从数组第一个位置到第`idx`(含`idx`)个位置所有数字的和
3. `rangeSum(from_idx,to_idx)`：求从数组第`from_idx`个位置到第`to_idx`个位置的所有数字的和


