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

H 通常被称为试探法
