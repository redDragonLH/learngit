/**
 * 860. 柠檬水找零
 * 
 * 
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
 * 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 * 注意，一开始你手头没有任何零钱。
 * 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 */
/**
 * 还要考虑面额
 * 
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let len = bills.length;

    if(!len) return true;
    if(bills[0]>5) return false;

    const obj = {5:1,10:0,20:0}
    for (let i = 1; i < len; i++) {
        let zl = bills[i]-5;
        if(!zl){ 
            obj[bills[i]]++;
            continue;
        } else {
            if(obj[10] && zl >= 10) {
                zl = zl - 10;
                obj[10]--
            }
            if(zl <= obj[5]*5){
               obj[5]-=zl/5;
            }else return false;
        }
        obj[bills[i]]++;
        
    }

    return true;
};
// console.log(lemonadeChange([5,5,10,10,20]));
/**
 * 超...笨版
 * 执行用时：104 ms, 在所有 JavaScript 提交中击败了19.53%的用户
 * 内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了29.62%的用户
 */

/**
 * 官方题解
 */
var lemonadeChange = function(bills) {
    let five = 0, ten = 0;
    for (const bill of bills) {
        if (bill === 5) {
            five += 1;
        } else if (bill === 10) {
            if (five === 0) {
                return false;
            }
            five -= 1;
            ten += 1;
        } else {
            if (five > 0 && ten > 0) {
                five -= 1;
                ten -= 1;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }
    return true;
};