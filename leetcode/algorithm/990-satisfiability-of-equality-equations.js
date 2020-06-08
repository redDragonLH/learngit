/**
 * 990. 等式方程的可满足性
 * 给定一个由表示变量之间关系的字符串方程组成的数组，每个字符串方程 equations[i] 的长度为 4，并采用两种不同的形式之一："a==b" 或 "a!=b"。在这里，a 和 b 是小写字母（不一定不同），表示单字母变量名。
 * 只有当可以将整数分配给变量名，以便满足所有给定的方程时才返回 true，否则返回 false。 
 */

/**
 * 
 * 思路： 失败
 *      1. 先找到转换的方法，应该可以赋不同的值
 *          1. 长度只有4，
 *          2. 方式只有两种 == ，!= 
 * 
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function(equations) {
    let equation = '';
    equations.forEach(e => {
        if(e[1]+e[2] === '=='){
            equation.indexOf(e[0]) === -1 && (equation+=e[0])
            equation.indexOf(e[3]) === -1 && (equation+=e[3])
        }
    })
    for (let i = 0; i < equations.length; i++) {
        let e= equations[i];
        if(e[1]+e[2] === '!='){
            if(e[0] === e[3] || (equation.indexOf(e[0])>-1 && equation.indexOf(e[3])>-1)) return false;
        }
        
    }
    return true;
};


console.log(equationsPossible(["c==c","b==d","x!=z"]))