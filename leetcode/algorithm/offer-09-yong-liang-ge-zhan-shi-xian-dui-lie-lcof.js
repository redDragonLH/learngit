/**
 * 剑指 Offer 09. 用两个栈实现队列
 * 
 * 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
 * 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )
 */
/**
 * 注；栈为后进先出队列，只在表尾（栈顶）进行入栈出栈操作
 */

/**
 * 因为正常的栈是无法删除表头元素的，所以在删除时必须把队列的头元素获取到
 */
var CQueue = function() {
    this.head = [];
    this.tail = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.tail.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.tail.length)return -1;
    let r = 0;
    while(true) {
        let e = this.tail.pop();
        if(!this.tail.length){
            r = e;
            break;
        }else {
            this.head.push(e);
        }
    }
    while(this.head.length){
        this.tail.push(this.head.pop());
    }
    return r;
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
var obj = new CQueue()
obj.appendTail(2)
console.log(obj.deleteHead());

var param_2 = obj.deleteHead()

/**
 * 执行用时： 572 ms , 在所有 JavaScript 提交中击败了45.91%的用户
 * 内存消耗：48 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

/**
 * java
 * 
class CQueue {
        Stack head;
        Stack tail;
    public CQueue() {
        head = new Stack();
        tail = new Stack();
    }
    
    public void appendTail(int value) {
        tail.push(value);
    }
    
    public int deleteHead() {
        if(tail.isEmpty()) return -1;
        int ret = -1;
        while(true) {
            int ele = (int)tail.pop();
            if(tail.isEmpty()) {
                ret = ele;
                break;
            } else {
                head.push(ele);
            }
        }
        while(!head.isEmpty()){
            tail.push(head.pop());
        }
        return ret;
    }
}
 */
/**
 * 超级慢的java 代码
 */

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue obj = new CQueue();
 * obj.appendTail(value);
 * int param_2 = obj.deleteHead();
 */