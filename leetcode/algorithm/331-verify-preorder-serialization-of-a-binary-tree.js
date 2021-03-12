/**
 * 331. 验证二叉树的前序序列化
 * 
 * 序列化二叉树的一种方法是使用前序遍历。当我们遇到一个非空节点时，我们可以记录下这个节点的值。如果它是一个空节点，我们可以使用一个标记值记录，例如 #。
 */

/**
 * 前序遍历: 根结点-> 左子树->右子树
 * 
 * 没想明白~~~怎样判断,除非重构二叉树
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {

};

/**
 * 官方题解: 栈
 * 
 * 定义一个概念叫 槽位,一个槽位可以被看作「当前二叉树中正在等待被节点填充」的那些位置
 * 
 * 二叉树的建立也伴随着槽位数量的变化。每当遇到一个节点时：
 *  * 如果遇到了空节点，则要消耗一个槽位；
 *  * 如果遇到了非空节点，则除了消耗一个槽位外，还要再补充两个槽位。
 * 
 * 我们使用栈来维护槽位的变化。栈中的每个元素，代表了对应节点处剩余槽位的数量，而栈顶元素就对应着下一步可用的槽位数量。
 * 当遇到空节点时，仅将栈顶元素减 11；当遇到非空节点时，将栈顶元素减 11 后，再向栈中压入一个 22。无论何时，如果栈顶元素变为 00，就立刻将栈顶弹出。
 * 
 * 遍历结束后，若栈为空，说明没有待填充的槽位，因此是一个合法序列；否则若栈不为空，则序列不合法。此外，在遍历的过程中，若槽位数量不足，则序列不合法。
 * 
 * >>>> 这个槽位到底是什么原理
 * 满二叉树叶子节点 = 非叶子节点 + 1 <-:  槽位的原理应该和这句话有关
 * 
 * 官方的题解方案应该都和这个有关
 */

var isValidSerialization = function(preorder) {
    const n = preorder.length;
    let i = 0;
    const stack = [1];
    while (i < n) {
        if (!stack.length) {
            return false;
        }
        if (preorder[i] === ',') {
            ++i;
        } else if (preorder[i] === '#') {
            stack[stack.length - 1]--;
            if (stack[stack.length - 1] === 0) {
                stack.pop();
            } 
            ++i;
        } else {
            // 读一个数字
            while (i < n && preorder[i] !== ',') {
                ++i;
            }
            stack[stack.length - 1]--;
            if (stack[stack.length - 1] === 0) {
                stack.pop();
            }
            stack.push(2);
        }
    }
    return stack.length === 0;
};

/**
 * 官方题解 计数
 * 
 * 回顾 栈方法 的逻辑，如果把栈中元素看成一个整体，即所有剩余槽位的数量，也能维护槽位的变化。
 * 因此，我们可以只维护一个计数器，代表栈中所有元素之和，其余的操作逻辑均可以保持不变。
 */
var isValidSerialization = function(preorder) {
    const n = preorder.length;
    let i = 0;
    let slots = 1;
    while (i < n) {
        if (slots === 0) {
            return false;
        }
        if (preorder[i] === ',') {
            ++i;
        } else if (preorder[i] === '#') {
            --slots;
            ++i;
        } else {
            // 读一个数字
            while (i < n && preorder[i] !== ',') {
                ++i;
            }
            ++slots; // slots = slots - 1 + 2
        }
    }
    return !slots;
};

/**
 * 第三方优秀题解
 * 
 * 基本原理没变,优化运行逻辑
 * @param {*} preorder 
 */
var isValidSerialization = function(preorder) {

    // 首先是前序遍历获取的字符串
    var slot = 1;
    var stack = preorder.split(',');

    for(let i = 0;i<stack.length;i++) {
        // 所有字符串都都把槽位-1
        --slot
        if(slot<0) return false; //直接反回

        // 叶子节点,槽位+2
        if(stack[i]!=="#") {
            slot+=2;
        }
        
    }
    return slot === 0;
}