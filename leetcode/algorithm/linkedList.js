/**
 * 算法所用链表生成器
 */
const link = {
    vla: null,
    next: null
}

 let getLinked = (array) => {
    let head = {
        val: array[array.length-1],
        next: null
    }
    for (let i = array.length - 2; i >= 0; i--) {
        head = {
            val: array[i],
            next: head
        }

        
    }
    return head
 }

//  export default getLinked;
 module.exports = getLinked;