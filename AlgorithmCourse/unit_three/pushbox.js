/**
 * 推箱子游戏
 */

class MapNode {
  constructor(value,isDead,isDest) {
    this.value = value;
    this.isDead = isDead;
    this.isDest = isDest;
  }
}

class CBoxGameMap {
  constructor(row,col) {
    this.m_rowCount = row;
    this.m_colCount = col;
    this.m_map = [];
  }
}

class Action {
  constructor() {
    this.path = null;
    this.push_x = 0;
    this.push_y = 0;
  }
}