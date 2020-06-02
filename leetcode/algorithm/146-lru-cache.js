/**
 * 146. LRU缓存机制
 * 
 * 运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制。它应该支持以下操作： 获取数据 get 和 写入数据 put 。
 * 获取数据 get(key) - 如果密钥 (key) 存在于缓存中，则获取密钥的值（总是正数），否则返回 -1。
 * 写入数据 put(key, value) - 如果密钥已经存在，则变更其数据值；如果密钥不存在，则插入该组「密钥/数据值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
 */

 /**
 * @param {number} capacity
 * 不能用时间，存取的时候调用时间都是一样的～～好几个核心同时调用么，深井冰啊～
 * 
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    /**
     *  key:{
            val,
            count,
            time
        }
     */
    this.cache={
  
    }
    this.count = 0;
    this.last = undefined;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if(this.cache[key]) {
        this.cache[key].count++;
        this.cache[key].time = Date.now();
        key === this.last && setTimeout(this.find,1)
        return this.cache[key].val;
    }
    return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if(!this.cache[key]) {
        ++ this.count;
        if(this.count > this.capacity) this.delete()
        this.cache[key] = {};
    }
    this.cache[key].val = value
    this.cache[key].count > -1 ? this.cache[key].count++ : this.cache[key].count = 0;
    this.cache[key].time = Date.now();
    this.find();
};
LRUCache.prototype.find = function() {
    for (const key in this.cache) {
        !this.last && (this.last = key)
        this.last = this.last < this.cache[key].time ? key : this.last;
    }
}
LRUCache.prototype.delete = function() {
    delete this.cache[this.last];
    this.find();
}
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
var obj = new LRUCache(10)
var param_1 = obj.get(1)
obj.put(2,1)

/**
 * hash表+双向链表法
 * 
 * java代码
 */

/**
public class LRUCache {
    class DLinkedNode {
        int key;
        int value;
        DLinkedNode prev;
        DLinkedNode next;
        public DLinkedNode() {}
        public DLinkedNode(int _key,int _value) {key = _key; value = _value;}
    }
    private Map<Integer,DLinkedNode> cache = new HashMap<Integer,DLinkedNode>();
    private int size;
    private int capacity;
    private DLinkedNode head, tail;

    public LRUCache(int capacity) {
        this.size = 0;
        this.capacity = capacity;
        // 使用伪头部和伪尾部节点
        head = new DLinkedNode();
        tail = new DLinkedNode();
        head.next = tail;
        tail.prev = head;
    }
    public int get(int key) {
        DLinkedNode node = cache.get(key);
        if(node == null) {
            return -1;
        }
        moveToHead(node);
        return node.value;
    }
    public void put(int key,int value) {
        DLinkedNode node = cache.get(key);
        if(node == null) {
            // 如果 key 不存在，创建新的节点
            DLinkedNode newNode = new DLinkedNode(key,value);
            // 添加进哈希表
            cache.put(key,newNode);
            // 添加至双向链表头部
            addToHead(newNode);
            ++size;
            if(size > capacity) {
                //如果超出容量，删除双向链表的尾部节点
                DLinkedNode tail = removeTail();
                // 删除哈希表中对应的项
                cache.remove(tail.key);
                --size;
            }
        }else {
            // 如果 key 存在，先通过哈希表定位，再修改value,并移到头部
            node.value = value;
            moveToHead(node);
        }
    }
    private void addToHead(DLinkedNode node) {
        node.prev = head;
        node.next = head.next;
        head.next.prev = node;
        head.next = node;
    }
    private void removeNode(DLinkedNode node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }
    private void moveToHead(DLinkedNode node) {
        removeNode(node);
        addToHead(node);
    }
    private DLinkedNode removeTail() {
        DLinkedNode res = tail.prev;
        removeNode(res);
        return res;
    }
}
 */