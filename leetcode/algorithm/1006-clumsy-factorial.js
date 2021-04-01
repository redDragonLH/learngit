/**
 * 1006. 笨阶乘
 *
 * 通常，正整数 n 的阶乘是所有小于或等于 n 的正整数的乘积。例如，factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1。
 * 相反，我们设计了一个笨阶乘 clumsy：在整数的递减序列中，我们以一个固定顺序的操作符序列来依次替换原有的乘法操作符：乘法(*)，除法(/)，加法(+)和减法(-)。
 * 例如，clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1。然而，这些运算仍然使用通常的算术运算顺序：我们在任何加、减步骤之前执行所有的乘法和除法步骤，并且按从左到右处理乘法和除法步骤。
 * 另外，我们使用的除法是地板除法（floor division），所以 10 * 9 / 8 等于 11。这保证结果是一个整数。
 * 实现上面定义的笨函数：给定一个整数 N，它返回 N 的笨阶乘。
 */

/**
 * 递减循环N,按照相应顺序乘除,然后把乘除完的数字放到栈里,还有当前需要的操作符
 * 
 * 然后循环获取栈数据,进行操作
 * 
 * @param {number} N
 * @return {number}
 */
 var clumsy = function (N) {
  if (N < 3) return N;
  const operateMap = [0, 1, 2, 3];
  const stack = [];
  let count = 0;
  while (N) {
    let pos = count % 4;
    switch (pos) {
      case 0:
        if(stack.length) {
        stack.push(parseInt(stack.pop() * N));
        }else {
            stack.push(N * --N);
        }
        break;
      case 1:
        stack.push(parseInt(stack.pop() / N));
        break;
      case 2:
        stack.push("+", N);
        break;
      case 3:
        stack.push("-", N);
        break;
    }
    N--;
    count++;
  }
  let data = 0
  while(stack.length>1) {
      let pop = stack.shift()
      if(typeof pop === 'number'){
          data = pop;
      }else {
          if(pop === '+') stack[0] = stack[0]+ data;
          else stack[0] = data - stack[0];
      }
  }
  return stack[0];
};

/**
 * 超慢版
 * 
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了12.50%的用户
 * 内存消耗：41.6 MB, 在所有 JavaScript 提交中击败了12.50%的用户
 */

/**
 * 官方题解 
 * 
 * 注意一点,减法时可以把数字置为这个数的负数,这样在最后处理的时候就可以直接加法,不需要处理符号和加减
 */
 var clumsy = function(N) {
  const stack = [N--];

  let index = 0; // 用于控制乘、除、加、减
  while (N > 0) {
      if (index % 4 == 0) {
          stack.push(stack.pop() * N);
      } else if (index % 4 == 1) {
          const cur = stack.pop();
          stack.push(cur > 0 ? Math.floor(cur / N) : Math.ceil(cur / N));
      } else if (index % 4 == 2) {
          stack.push(N);
      } else {
        // 减号注意
          stack.push(-N);
      }
      index++;
      N--;
  }

  // 把栈中所有的数字依次弹出求和
  let sum = 0;
  stack.forEach((element) => {
      sum += element;
  })
  return sum;
};