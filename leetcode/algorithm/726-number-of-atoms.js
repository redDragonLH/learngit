/**
 * 726. 原子的数量
 *
 * 给定一个化学式formula（作为字符串），返回每种原子的数量。
 *
 * 原子总是以一个大写字母开始，接着跟随0个或任意个小写字母，表示原子的名字。
 *
 * 如果数量大于 1，原子后会跟着数字表示原子的数量。如果数量等于 1 则不会跟数字。例如，H2O 和 H2O2 是可行的，但 H1O2 这个表达是不可行的。
 *
 * 两个化学式连在一起是新的化学式。例如 H2O2He3Mg4 也是化学式。
 *
 * 一个括号中的化学式和数字（可选择性添加）也是化学式。例如 (H2O2) 和 (H2O2)3 是化学式。
 *
 * 给定一个化学式，输出所有原子的数量。格式为：第一个（按字典序）原子的名子，跟着它的数量（如果数量大于 1），然后是第二个原子的名字（按字典序），跟着它的数量（如果数量大于 1），以此类推。
 */

/**
 * 一个字符一个字符处理么,栈会是比较方便的数据结构吧,
 * 1. 把字符一个个怼到栈里
 * 2. 先处理括号之内的
 * @param {string} formula
 * @return {string}
 */
var countOfAtoms = function (formula) {
  const stack = [];
  let len = formula.length;
  for (let i = 0; i < len; i++) {
    if (formula[i] === ")") {
      let numStr = getNumber(formula, i + 1);
      i += numStr.length;
      stack.push(...pave(stack, parseInt(numStr)));
    } else {
      stack.push(formula[i]);
    }
  }
  let obj = {}
  for (let i = 0; i < stack.length; i++) {
      let temp = stack[i]
    if(temp.charCodeAt >='A'.charCodeAt) {

    }
  }
};
/**
 * 展开括号
 * @param {*} stack 
 * @param {*} num 
 * @returns 
 */
const pave = (stack, num) => {
  let str = stack.pop();
  let chemicalFormula = "";
  while (str !== "(") {
    chemicalFormula = str + chemicalFormula;
    str = stack.pop();
  }
  return chemicalFormula.repeat(num).split("") || [];
};
// 获取括号后边的倍数
const getNumber = (str, index) => {
  let numStr = [];
  for (let i = index; i < str.length; i++) {
    if (Number.isNaN(parseInt(str[i]))) {
      return numStr.join("");
    } else {
      numStr.push(str[i]);
    }
  }
  return numStr.join("");
};

console.log(countOfAtoms("K4(ON(SO3)2)2"));
