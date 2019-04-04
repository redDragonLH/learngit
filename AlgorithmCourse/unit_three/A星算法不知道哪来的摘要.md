# A start 算法
**寻路算法**

![A星算法问题图](https://github.com/redDragonLH/ldle/blob/master/AlgorithmCourse/img/astartask.jpg?raw=true)

## 开始
先把搜寻区域简化为一组可以量化的节点

1. 从起点A开始，并把它加入倒一个由方格组成的 open list(开放列表)中，现在open list 里只有一项起点A，后面会慢慢加入更多项。open list 里的各自是路径可能会是沿途经过，也有可能不经过。基本上 open list是一个待检查的方格列表
2. 查看与起点A相邻的方格（忽略非法地形占领的方格），把其中可走的（walkable）或可到达的（reachable）方格也加入到 open list 中，把起点A设置为这些方格的父亲/上一级（parent node 或 parent square）
3. 把A 从open list中移除，加入到 close list (封闭列表)中，close list中的每个方格都是现在不需要再关注的

## 路径排序
计算组成路径的公式

    F = G +H
    G = 从起点A移动到指定方格的移动代价，沿着到达该方格而生成的路径
    H = 从指定的方格移动到终点的估算成本

G：实际对角移动距离是2的平方根，近似1.414倍的横向或纵向移动的代价。使用10和14是为了简单起见
H 通常被称为试探法，使用 Manhattan方法，计算从当前方格横向或纵向移动到达目标所经过的方格数，忽略对角线移动，然后把总数乘以10.(忽略路径中的障碍物)

## 继续搜索
从 open list 中选择F值最小的（方格）节点然后：
4. 从open list 取出，放到close lsit中
5. 检查所有与它相邻的方格，忽略其中再 close list 中或是不可走（unwalkable）的方格（比如墙，水，非法地形），如果方格不在 open list 中，则把它们加入到open list ，把选中的方格设置为这些新加入的方格的父级
6. 如果某个相邻的方格已经在 open list 中，则检查这条路径是否更优，也就是说经由当前方格 ( 我们选中的方格 ) 到达那个方格是否具有更小的 G 值。如果没有，不做任何操作。相反，如果 G 值更小，则把那个方格的父亲设为当前方格 ( 我们选中的方格 ) ，然后重新计算那个方格的 F 值和 G 值。

![](https://github.com/redDragonLH/ldle/blob/master/AlgorithmCourse/img/astardata.jpg?raw=true)
## 总结
1. 把起点加入 open list
2. 重复如下过程
  * 遍历open list,查找F值最小点，把它作为当前要处理的节点
  * 把这个节点移到 close lsit
  * 对当前方格的8个相邻方格的每一个方格处理：
    * 如果他是不可抵达的或者它在 close list 中，忽略它。否则，做如下操作
    * 如果它不在 open list 中，把它加入 open list ，并且设置为父级，记录该方格的F,G,H值
    * 如果它已经在open list 中，检查这条路径（即经由当前方格到达它那里）是否更好，用 G值做参考。更小的G值表示这是更好的路径。如果是这样，把它的父亲设置为当前方格，并重新计算它的G和F值。如果你的 open list是按照F值排序，改变后可能需要重新排序
  * 停止，当你
    * 把终点加入到了 open list 中，此时路径已经找到，或者
    * 查找终点失败，并且open list 是空的，此时没有路径。
3. 保存路径。从终点开始，每个方格沿着父节点移动直至起点

