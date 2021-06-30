/**
 * 剑指 Offer 37. 序列化二叉树
 *
 * 请实现两个函数，分别用来序列化和反序列化二叉树。
 * 你需要设计一个算法来实现二叉树的序列化与反序列化。这里不限定你的序列 / 反序列化算法执行逻辑，你只需要保证一个二叉树可以被序列化为一个字符串并且将这个字符串反序列化为原始的树结构。
 * 提示：输入输出格式与 LeetCode 目前使用的方式一致，详情请参阅 LeetCode 序列化二叉树的格式。你并非必须采取这种方式，你也可以采用其他的方法解决这个问题。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * ~~~机制了解了
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  return root;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  return data;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
/**
 * 这都不是 100% 就过分了~~
 * 执行用时：144 ms, 在所有 JavaScript 提交中击败了89.12%的用户
 * 内存消耗：47 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */

/**
 *
 * 如果不管的话前序遍历会不会好一点,前序遍历无法处理反序列化,还是得广度优先搜索好一点
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = "";
  const inorder = (root) => {
    str += (root ? root.val : "null") + ",";

    if (root) {
      inorder(root.left);
      inorder(root.right);
    }
  };
  inorder(root);
  return str;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // 前序遍历缺少关键数据
  const arr = data.split(",");
};

/**
 *
 * 广度优先搜索
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let str = "";
  let queue = [root];
  while (queue.length) {
    console.log(queue);
    let len = queue.length;
    while (len) {
      len--;
      let node = queue.shift();
      str += (node ? node.val : "null") + ",";
      node && queue.push(node.left, node.right);
    }
  }
  return str;
};
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  // 但是广度优先搜索的结果在序列化的时候也有问题吧~~
  // 倒是也能解决,加一个保存上一层的数组也就好了但是这个算法好丑~~
  const arr = data.split(",");
  let count = 0;
  let i = 1;
  let root = new TreeNode(arr[0]);
  while (i) {
    let num = Math.pow(2, i);
    console.log(num);
    if (arr) {
    }
  }
};

/**
 * 官方题解
 * 
 * 也不知道是个人想法过于复杂还是菜
 * 
 * 产出格式在消费的时候可以完美转换为产出的输入么
 * 怎么转为生产,就能怎么转为消费格式么
 */
var serialize = function (root) {
  return rserialize(root, "");
};

var deserialize = function (data) {
  const dataArray = data.split(",");
  return rdeserialize(dataArray);
};

const rserialize = (root, str) => {
    // 其实就是前序遍历
  if (root === null) {
    str += "None,";
  } else {
    str += root.val + "" + ",";
    str = rserialize(root.left, str);
    str = rserialize(root.right, str);
  }
  return str;
};

// 还是有些无法想象这个程序的运行时数据整体格式与流转格式
const rdeserialize = (dataList) => {
  if (dataList[0] === "None") {
    dataList.shift();
    return null;
  }

  const root = new TreeNode(parseInt(dataList[0]));
  dataList.shift();
  root.left = rdeserialize(dataList);
  root.right = rdeserialize(dataList);

  return root;
};
