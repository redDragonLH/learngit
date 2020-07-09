/**
 * 208. 实现 Trie (前缀树)
 * 
 * 实现一个 Trie (前缀树)，包含 insert, search, 和 startsWith 这三个操作。
 * 
 * 说明:
 * 你可以假设所有的输入都是由小写字母 a-z 构成的。
 * 保证所有输入均为非空字符串。
 */

/**
 * Trie 树的结点结构
 * Trie 树是一个有根的树，其结点具有以下字段：。
 * 最多 RR 个指向子结点的链接，其中每个链接对应字母表数据集中的一个字母。
 * 本文中假定 RR 为 26，小写拉丁字母的数量。
 * 布尔字段，以指定节点是对应键的结尾还是只是键前缀。

 * Initialize your data structure here.
 */

/**
 * 节点单独封装为一个类，它有两个属性：
 *
 * next：next[i]保存着下一个字符i的节点引用
 * isEnd：当前节点是否可以作为一个单词的结束位置
  */
var TrieNode = function() {
    this.next = {};
    this.isEnd = false;
};
var Trie = function() {
    this.root = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    if (!word) return false;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        // 不存在当前字母
        if (!node.next[word[i]]) {
            // 则新建一个节点
            node.next[word[i]] = new TrieNode();
        }
        // 如果有则不需要新建，进入这个节点的next 的相关节点内，处理下一个字符
        node = node.next[word[i]];
    }
    // 最后一个节点标明到了最后，不若说到这里是一个单词
    node.isEnd = true;
    return true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    if (!word) return false;

    let node = this.root;
    for (let i = 0; i < word.length; ++i) {
        if (node.next[word[i]]) {
            node = node.next[word[i]];
        } else {
            return false;
        }
    }
    return node.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    if (!prefix) return true;

    let node = this.root;
    for (let i = 0; i < prefix.length; ++i) {
        if (node.next[prefix[i]]) {
            node = node.next[prefix[i]];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/**
 * 此问题最大的注意点其实是数据结构的决定，我第一想法就是全部使用原生Object去处理，字符为key ,值还为Object，Object 里面如果有值就在Object里加一个length 属性
 * 但是这样操作起来边界条件有点多，而且也没考虑不是叶子节点也可能是一个完整词语的问题
 * 
 * 执行用时：240 ms, 在所有 JavaScript 提交中击败了51.14%的用户
 * 内存消耗：52.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
 */