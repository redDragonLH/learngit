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
    
    if (!this.head.length) {
        // 把栈一的数据都倒入栈二，反向
        while (this.tail.length) {
            this.head.push(this.tail.pop());
        }
    } 
    // 还空就完蛋了
    if (!this.head.length) {
        return -1;
    } else {
        // 栈二里面是栈一的倒叙，所以pop出来的是栈一的头
        return this.head.pop();
    }
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
 * 执行用时： 480 ms , 在所有 JavaScript 提交中击败了83.71%的用户
 * 内存消耗：48 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

/**
 * java
 * 
class CQueue {
    // Deque表示双端队列。双端队列是在两端都可以进行插入和删除的队列。Deque是一个比Stack和Queue功能更强大的接口，它同时实现了栈和队列的功能。ArrayDeque和LinkeList实现了Deque接口。
    // 这里定义时用的是父类型，这样在初始化的时候就可以比较灵活，可能会用任意子类型
    Deque<Integer> stack1; // <> 是泛型 在类型后边增加 <type> 就是内部储存的是这个类型的数据，可能是相关类型之一
    Deque<Integer> stack2;
    
    public CQueue() {
        // LinkedList ： 双向链表。它也可以被当作堆栈、队列或双端队列进行操作。
        stack1 = new LinkedList<Integer>();// 使用了 LinkedList，，内部储存的泛型的数字数据
        stack2 = new LinkedList<Integer>();
    }
    
    public void appendTail(int value) {
        stack1.push(value);
    }
    
    public int deleteHead() {
        // 方案因为不会有其他操作，所以在删除时用第二个栈保存第一个栈的倒序，这样删的时候就删第二个栈，第二个栈空了再从第一个栈导入
        // 如果第二个栈为空
        if (stack2.isEmpty()) {
            // 把栈一的数据都倒入栈二，反向
            while (!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        } 
        // 还空就完蛋了
        if (stack2.isEmpty()) {
            return -1;
        } else {
            // 栈二里面是栈一的倒叙，所以pop出来的是栈一的头
            int deleteItem = stack2.pop();
            return deleteItem;
        }
    }
}

 */
/**
 * 比较快的代码
 */

/**
 * Your CQueue object will be instantiated and called as such:
 * CQueue obj = new CQueue();
 * obj.appendTail(value);
 * int param_2 = obj.deleteHead();
 */