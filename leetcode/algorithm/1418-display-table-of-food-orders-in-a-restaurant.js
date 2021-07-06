/**
 * 1418. 点菜展示表
 *
 * 给你一个数组 orders，表示客户在餐厅中完成的订单，确切地说， orders[i]=[customerNamei,tableNumberi,foodItemi] ，其中 customerNamei 是客户的姓名，tableNumberi 是客户所在餐桌的桌号，而 foodItemi 是客户点的餐品名称。
 *
 * 请你返回该餐厅的 点菜展示表 。在这张表中，表中第一行为标题，其第一列为餐桌桌号 “Table” ，后面每一列都是按字母顺序排列的餐品名称。接下来每一行中的项则表示每张餐桌订购的相应餐品数量，第一列应当填对应的桌号，后面依次填写下单的餐品数量。
 *
 * 注意：客户姓名不是点菜展示表的一部分。此外，表中的数据行应该按餐桌桌号升序排列。
 */

/**
 *
 * // 先获取所有菜
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  let menu = [];
  let tables = [];
  orders.forEach((e) => {
    if (!menu.includes(e[2])) {
      menu.push(e[2]);
    }
    if (!tables.includes(e[1])) {
      tables.push(e[1]);
    }
  });
  menu.sort();
  tables.sort((a, b) => a - b);
  menu.unshift("Table");
  let result = [menu];
  let reIndex = 0;

  for (let p = 0; p < tables.length; p++) {
    result.push([tables[p]]);
    reIndex++;
    console.log(result);
    for (let i = 1; i < menu.length; i++) {
      orders.forEach((e) => {
        if (tables[p] === e[1] && e[2] === menu[i]) {
          result[reIndex][i] = result[reIndex][i] ? result[reIndex][i] + 1 : 1;
        }
      });
    }
  }
  return result;
};
/**
 * n的三次方,肯定超时
 */