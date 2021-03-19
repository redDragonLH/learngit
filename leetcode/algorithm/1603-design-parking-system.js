/**
 * 1603. 设计停车系统
 *
 * 请你给一个停车场设计一个停车系统。停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。
 * 请你实现 ParkingSystem 类：
 *      * ParkingSystem(int big, int medium, int small) 初始化 ParkingSystem 类，三个参数分别对应每种停车位的数目。
 *      * bool addCar(int carType) 检查是否有 carType 对应的停车位。 carType 有三种类型：大，中，小，分别用数字 1， 2 和 3 表示。
 *          一辆车只能停在  carType 对应尺寸的停车位中。如果没有空车位，请返回 false ，否则将该车停入车位并返回 true 。
 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    this.big = big;
    this.medium = medium;
    this.small = small;
  };
  
  /**
   * @param {number} carType
   * @return {boolean}
   */
  ParkingSystem.prototype.addCar = function (carType) {
    switch (carType) {
      case 1:
        return this.big < 1 ? false :( --this.big || true);
      case 2:
        return this.medium < 1 ? false : (--this.medium || true);
      case 3:
        return this.small < 1 ? false : (--this.small || true);
    }
  };

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */

/**
 * 这么慢~~~
 * 执行用时：188 ms, 在所有 JavaScript 提交中击败了19.37%的用户
 * 内存消耗：44.3 MB, 在所有 JavaScript 提交中击败了99.03%的用户
 */

/**
 * 第三方最优解
 */
/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function (big, medium, small) {
    // 数据结构~~~
    ParkingSystem.cars = [big, medium, small]
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function (carType) {
    // 配合数据结构
    if (ParkingSystem.cars[carType - 1]) {
        ParkingSystem.cars[carType - 1]--
        return true
    } else {
        return false
    }
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */