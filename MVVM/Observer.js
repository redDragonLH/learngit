
/**
 * ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * https://zhuanlan.zhihu.com/p/27028242
 * /
/**
 * Observer 数据劫持
 * 
 * 使用 Object.defineProperty 来进行数据劫持
 * 
 * 数据监听，能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者
 */

function observe(value, asRootData){ // 子元素 对象转换
    if( !data || typeof data !== 'object') return;

    return new Observer(value)
}
function Observer(value){
    this.value = value;
    this.walk(value);
}
Observer.prototype ={
    walk: function(obj){ // 唤醒
        let self = this;
        Object.keys(obj).forEach(key => {
            self.observeProperty(obj, key, obj[key])
        })
    },
    observeProperty: function(obj, key, val){ // 劫持绑定
        let dep = new dep();
        let childOb = observe(val)
        Object.defineProperty(obj, key, {
            enumerable:true,
            configurable: true,
            get:function () {
                if(dep.target){
                    dep.depend();
                }
                if( childOb ){
                    childOb.dep.depend()
                }
                return val;
            },
            set:function(newVal){
                if (val === newVal || (newVal !== newVal && val !== val)) {
                    return;
                }
                val = newVal;
                // 监听子属性
                childOb = observe(newVal);
                // 通知数据变更
                dep.notify()
            }
        })
    }
}
/**
 * @class 依赖类 Dep
 * 
 * 把需要执行的逻辑函数统一储存在一个数组中管理，如果条件达成，则循环数组并执行
 *
 * 消息订阅器，内部维护一个数组，用来收集订阅者，数据变动触发 notify函数，在调用订阅者 update
 */

let uid = 0;
function Dep(){
    this.id = uid++;
    // array 存储watcher
    this.subs = [];
}
Dep.target = null;
Dep.prototype = {
    /**
     * [添加订阅者]
     * @param {[watcher]} sub 订阅者
     */ 
    addSub: function(sub){
        this.subs.push(sub);
    },
    /**
     * [移除订阅者]
     * @param {[watcher]} sub [订阅者]
     */
    removeSub:function(sub){
        let index = this.subs.indexOf(sub);
        if(index !== -1){
            this.subs.splice(index, 1);
        }
    },
    // 通知数据变更
    notify:function(){
        this.subs.forEach(sub => {
            // 执行 sub 的update 更新函数
            sub.update();
        })
    },
    // add watcher
    depend:function(){
        Dep.target.addDep(this);
    }
}
/**
 *  Complie
 * 
 * 指令解析器，它的作用对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数
 *  
 * 工作：
 * 1. 解析指令，将指令模板中额变量替换成数据，对视图进行初始化操作
 * 2. 订阅数据的变化，绑定好更新函数
 * 3. 接收到数据变化，通知视图进行 view update
 */

function Complie(el, value){
    this.$val = value;
    this.$el = this.isElementNode(el) ? el : document.querySelector(el);
    if(this.$el){
        this.$fragment = this.nodeFragment(this.$el)
        this.ComplieElement(this.$fragment);
        // 将文档碎片放回真实 dom 
        this.$el.appendChild(this.$fragment)
    }
}
Complie.prototype = {
    ComplieElement: function (el) {
        let self = this;
        let childNodes = el.childNodes;
        // 轮询解析子节点
        [].slice.call(childNodes).forEach(node => {
            let text = node.textContent; // 只会获取文本内容
            let reg = /\{\{((?:.|\n)+?)\}\}/;
            // 如果是element 节点
            if(self.isElementNode(node)){
                self.complie(node);
            }else if(self.isTextNode(node) && reg.test(text)){ // 是子节点，并且包含绑定数据
                // 如果是 text节点
                self.complieText(node, RegExp.$1.trim()) // 从text 正则获取的匹配数据
            }
            // 解析子节点包含的指令
            if(node.childNodes && node.childNodes.length){
                self.ComplieElement(node)
            }
        })
    },
    // 文档碎片，遍历过程中会有多次的dom操作，为提高性能我们会将 el 节点转化为 fragment 文档碎片进行解析操作
    // 解析操作完成，将其添加回真实DOM
    nodeFragment:function(el){
        let fragment = document.createDocumentFragment(); // 创建文档碎片，不会引起回流
        let child;

        while(child = el.firstChild){
            fragment.appendChild(child)
        }
        return fragment;
    },
    // 指令解析
    complie: function(node){
        let nodeAttrs = node.attributes; // 返回该元素所有属性节点的一个实时集合
        let self = this;

        [].slice.call(nodeAttrs).forEach(attr => { // 循环属性节点
            var attrName = attr.name;
            if( self.isDirective(attrName)){ // 有指令就进入逻辑进行替换
                var exp = attr.value; // 获取指令
                var dir = attrName.substring(2);// 获取x-xxx后半部
                // 事件指令
                if(self.isEventDirective(dir)){
                    this.complieUtil.eventHandler(node,self.$vm,exp,dir)
                }
                // 普通指令
                else{
                    complieUtil[dir] && complieUtil[dir](node, self.$vm,exp);
                }
                node.removeAttribute(attrName) // 干掉
            }
        });
    },
    // {{ test }} 匹配变量 test
    complieText: function(node, exp){
        node.textContent =  typeof this.$val[exp] === 'undefined' ? '' : this.$val[exp];
        
    },
    // element 节点
    isElementNode: function (node) {
        return node.nodeType === 1;
    },
    // 判断 是否文字节点
    isTextNode: function (node) {
        return node.nodeType === 3;
    },
    // x-xxx指令判定
    isDirective: function(attr){
        return attr.indexOf('x-') === 0;
    },
    // 事件指令判定
    isEventDirective:function(dir){
        return dir.indexOf('on') === 0;
    }
}
// 定义 $elm ,缓存当前执行 input 事件的input dom 对象
let $elm;
let timer = null;
// 指令处理集合
const complieUtil = {
    html:function (node, vm, exp) {
        this.bind(node, vm, exp, 'html');
    },
    text:function(node,vm, exp){
        this.bind(node, vm, exp, 'text');
    },
    class:function (node, vm, exp) {
        this.bind(node, vm, exp, 'class');
    },
    model:function(node, vm, exp){
        this.bind(node, vm, exp, 'model');

        let self = this;
        let val = this._getVmVal(vm, exp);

        // 监听 input 事件
        node.addEventListener('input', function (e) {
            let newVal = e.target.value;
            $elm = e.target;
            if(val === newVal){
                return;
            }
            // 设置定时器 完成ui js 异步渲染
            clearTimeout(timer);
            timer = setTimeout(function () {
                self._setVmVal(vm, exp, newVal);
                val = newVal;
            })
        });
    },
    bind:function(node,vm,exp,dir){
        let updaterFn = updater[dir + 'Updater'];
        updaterFn && updaterFn(node, this._getVmVal(vm,exp));

        new watcher(vm,exp,function(value,oldValue){
            updaterFn && updaterFn(node, value, oldValue);
        })
    },
    // 事件处理
    eventHandler: function(node,vm, exp, dir){
        let eventType = dir.split(':')[1];
        let fn = vm.$options.methods && vm.$options.methods[exp];

        if(eventType && fn){
            node.addEventListener(eventType, fn.bind(vm), false);
        }
    },
    /**
     * [获取挂载在vm实例上的value]
     */
    _getVmVal:function(vm, exp){
        let val = vm;
        exp = exp.split('.');
        exp.forEach(key => {
            key = key.trim();
            val = val[key];
        });
        return val;
    },
    /**
     * 设置挂载在 vm 实例上的 value值
     */
    _setVmVal:function(vm, exp, value){
        let val = vm;
        exps = exp.split('.');
        exps.forEach((key, index) => {
            key = key.trim();
            if(index < exps.length - 1){
                val = val[key];
            }else{
                val[key] = value;
            }
        });
    }
}
// 指令渲染集合
const update = {
    htmlUpdater:function(node,value){
        node.innerHTML = typeof value === 'undefined' ? '' : value;
    },
    textUpdater:function(node, value){
        node.textContent = typeof value === 'undefined' ? '' : value;
    },
    classUpdater:function(){},
    modelUpdater:function (node, value, oldValue) {
        // 不对当前操作 input 进行渲染操作
        if($elm === node){
            return false;
        }
        $elm = undefined;
        node.value = typeof value === 'undefined' ? '' : value;
    }
}

/**
 * Watcher
 * 
 * 连接 Observer 和Compile 的桥梁，能能够订阅并受到每个属性变动的通知，执行指令绑定的相应回调函数
 * 
 * 工作：
 * 1. 通过 Dep 接收数据变动的通知，实例化的时候将自己添加到dep中
 * 2. 属性变更时，接收 dep 的 notif， 调用自身 update 方法，触发 Compile 中绑定的更新函数，进而更新视图
 */

function Watcher(vm, expOrFn, cb){
    this.vm = vm;
    expOrFn = expOrFn.trim();
    this.expOrFn = expOrFn;
    this.cb = cb;
    this.depIds = {};

    if(typeof expOrFn === 'function'){
        this.getter = expOrFn
    }else {
        this.geter = this.parseGetter(expOrFn);
    }
    this.value = this.get();
}

Watcher.prototype = {
    update:function(){
        this.run();
    },
    run:function(){
        let newVal = this.get();
        let oldVal = this.value;

        if(newVal === oldVal){
            return ;
        }
        this.value = newVal;

        // 将newVal, oldVal 挂载到MVVM实例上
        this.cb.call(this.vm,newVal,oldVal);
    },
    get:function(){
        Dep.target = this; // 将当前订阅着指向自己
        let value = this.getter.call(this.vm,this.vm); // 触发 getter,将自身添加到 dep中
        Dep.target = null;
        return value;
    },
    // 添加 watcher 到 Dep.subs[]
    addDep: function(dep){
        if( !this.depIds.hasOwnProperty(dep.id)){
            dep.addSub(this);
            this.depIds[dep.id] = dep;
        }
    },
    parseGetter:function(exp){
        if(/[^\w.$]/.test(exp)) return;
        let exps = exp.split('.');

        // 简易的循环依赖处理
        return  function(obj){
            let len = exps.length;
            for (let i = 0; i < len; i++) {
                if(obj) return;
                obj = obj[exps[i]];
                
            }
            return obj
        }
    }
}

/**
 * MVVM
 * 1. Observer 实现对 MVVM 自身 mode 数据劫持，监听数据二点属性变更，并在变动时进行 notify
 * 2. Compile 实现指令解析，初始化视图，并订阅数据变化，绑定好更新函数
 * 3. Watcher 一方面接收Observer 通过 dep传递过来的数据变化，一方面通知 compile进行 view update
 * 
 */

/**
 * @class 双向绑定类
 */
function MVVM (options){
    this.$options = options || {};
    let data = this._data = this.$options.data;
    let self = this;

    Object.keys(data).forEach(key =>{
        self._proxyData(key);
    });
    observe(data,this);
    new Complie(options.el || document.body, this);
}
MVVM.prototype = {
    /**
     * 属性代理
     */
    _proxyData: function(key,setter,getter){
        let self = this;
        setter = setter || 
        Object.defineProperties(self,key,{
            configurable:false,
            enumerable:true,
            get:function proxyGetter(){
                return self._data[key]
            },
            set:function proxySetter(newVal){
                self._data[key] = newVal
            }
        })
    }
}