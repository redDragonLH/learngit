/**
 * 406. 根据身高重建队列
 * 
 * 假设有打乱顺序的一群人站成一个队列。 每个人由一个整数对(h, k)表示，其中h是这个人的身高，k是排在这个人前面且身高大于或等于h的人数。 编写一个算法来重建这个队列。
 * 注意：
 * 总人数少于1100人。
 */

/**
 * 感觉可以使用桶排序
 * 
 * 把 h,k相加得出的数就是需要排序的数字
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    const pLen = people.length
    if(!pLen) return [];
    let max = 0;
    for (let i = 0; i < pLen; i++) {
        let num = people[i][0] + people[i][1];
        people[i] = {
            count: num,
            p: people[i]
        }
        max = Math.max(num,max)
    }
    const pail = new Array(max);

    for (let i = 0; i < pLen; i++) {
        if(pail[people[i].count]) {
            pail[people[i].count].push(people[i].p) 
        }else {
            pail[people[i].count] = [people[i].p]
        }
    }
    const result = [];
    for (let i = 0; i < pail.length; i++) {
        if(pail[i]){
            const len = pail[i].length;
            if(len === 1) result.push(pail[i]);
            else {
                const reLen = result.length;
                //  这里没有稳定的方法去排序  失败
            }
        }
        
    }
};
const sort =(arr,prevLen)=>{

}
reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]])
// 自题解 失败
