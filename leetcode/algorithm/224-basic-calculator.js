/**
 * 224. 基本计算器
 * 
 * 实现一个基本的计算器来计算一个简单的字符串表达式 s 的值。
 */
/**
 * 
 * 如果没有乘除,把括号都去掉计算也没啥问题吧~~
 * 减法处理总是有问题~~
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const stock = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') continue;
        if (s[i] === ')') {
            let temp = stock.pop();
            let count = 0;
            // 这里是反的,,不过应该也不影响,毕竟没有高优先级算式
            while (temp !== '(' && stock.length) {
                if (Number.isNaN(Number(temp))) {
                    let t = stock.pop()
                    if(temp === '+') {
                        count += Number(t)
                    } else if(temp === '-') {
                        count -= Number(t)
                    }
                }else {
                    count += Number(temp)
                }
                temp = stock.pop()

            }
            stock.push(count)
        } else {
            stock.push(s[i])
        }

    }
    console.log(stock);
};

/**
 * 去掉括号这个逻辑感觉问题不大,但是减法的处理一直有问题~~
 * @param {*} s 
 */
var calculate = function (s) {
    let stock  = []
    for (let i = 0; i < s.length; i++) {
        if(s[i]!== ' ' && s[i] !== '(' && s[i] !== ')') {
            stock.push(s[i])
        }
    }
    while(stock.length > 1) {
        let temp = Number(stock.shift());
        let ind = stock.shift();
        let count = Number(stock.shift());
        if(ind === '+') {
            count += temp
        }else if(ind === '-') {
            console.log( count, temp)
            temp -= count

        }
        stock.unshift(count)
    }
    console.log(stock)
}