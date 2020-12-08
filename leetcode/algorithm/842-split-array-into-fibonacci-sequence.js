/**
 * 842. 将数组拆分成斐波那契序列
 * 
 * 给定一个数字字符串 S，比如 S = "123456579"，我们可以将它分成斐波那契式的序列 [123, 456, 579]。
 * 形式上，斐波那契式序列是一个非负整数列表 F，且满足：
 * 0 <= F[i] <= 2^31 - 1，（也就是说，每个整数都符合 32 位有符号整数类型）；
 * F.length >= 3；
 * 对于所有的0 <= i < F.length - 2，都有 F[i] + F[i+1] = F[i+2] 成立。
 * 另外，请注意，将字符串拆分成小块时，每个块的数字一定不要以零开头，除非这个块是数字 0 本身。
 * 返回从 S 拆分出来的任意一组斐波那契式的序列块，如果不能拆分则返回 []。
 */

/**
 * 好多条件啊,首先是,每个数字单独组成,然后是数字组合是否可以
 * 理论上如果是斐波那契数列,每个数字必须是升序,也就是前两个数最大也就三分之一
 * 
 * 逻辑混乱~~
 * @param {string} S
 * @return {number[]}
 */
var splitIntoFibonacci = function(S) {
    let Slen = S.length;
    let list = []
    for (let i = 0; i < parseInt(Slen/3); i++) {
        list = [S.slice(0,i)];
        if(isOK(list,i,S,Slen)){
            return list
        }
    }
};
const isOK =(list,pos,str,strLen) => {
    if(pos*3>= strLen) {
        return
    }
    list.push( str.slice(pos+1,pos*2))
    for (let i = pos*2; i < strLen; i++) {
        if(list[list.length-2]/1 + list[list.length-1]/1 === str.slice(pos*2,pos*i)/1) {
            list.push(str.slice(pos*2,pos*i))
            pos=i
        }
    }
}
/**
 * 官方题解  回溯算法
 * 
 * 这个回溯比较麻烦啊.要判断挺多东西,前后都要判断,不过必须是升序也就好很多
 */

var splitIntoFibonacci = function(S) {
    const list = new Array().fill(0);
    backtrack(list, S, S.length, 0, 0, 0);
    return list;
};

const backtrack = (list, S, length, index, sum, prev) => {
    if (index === length) {
        return list.length >= 3;
    }
    let currLong = 0;
    for (let i = index; i < length; i++) {
        if (i > index && S[index] === '0') {
            break;
        }
        currLong = currLong * 10 + S[i].charCodeAt() - '0'.charCodeAt();
        if (currLong > Math.pow(2, 31) - 1) {
            break;
        }
        let curr = currLong;
        if (list.length >= 2) {
            if (curr < sum) {
                continue;
            } else if (curr > sum) {
                break;
            }
        }
        list.push(curr);
        if (backtrack(list, S, length, i + 1, prev + curr, curr)) {
            return true;
        } else {
            list.splice(list.length - 1, 1);
        }
    }
    return false;
}
/**
 * 回溯算法
 */