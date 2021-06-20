/**
 * 1600. 皇位继承顺序
 * 
 * 一个王国里住着国王、他的孩子们、他的孙子们等等。每一个时间点，这个家庭里有人出生也有人死亡。
 * 
 * 这个王国有一个明确规定的皇位继承顺序，第一继承人总是国王自己。我们定义递归函数 Successor(x, curOrder) ，
 * 给定一个人 x 和当前的继承顺序，该函数返回 x 的下一继承人。
 * 
 * 具体信息见leetcode 官网
 */

class Person{
    constructor(name){
        this.name = name;
        this.status = true;
        this.childs=[]
    }
}
/**
 * @param {string} kingName
 */
 var ThroneInheritance = function(kingName) {
    this.throne = new Person(kingName)
};

/** 
 * @param {string} parentName 
 * @param {string} childName
 * @return {void}
 */
ThroneInheritance.prototype.birth = function(parentName, childName) {
    let arr = [this.throne];
    while(arr.length){
        let person = arr.shift()
        if(person.name === parentName) {
            person.childs.push(new Person(childName))
            break;
        }else {
            arr.push(...person.childs)
        }
    }
};

/** 
 * @param {string} name
 * @return {void}
 */
ThroneInheritance.prototype.death = function(name) {
    let arr = [this.throne];
    while(arr.length){
        let person = arr.shift()
        if(person.name === name) {
            person.status = false
            break;
        }else {
            arr.push(...person.childs)
        }
    }
};

/**
 * @return {string[]}
 */
ThroneInheritance.prototype.getInheritanceOrder = function() {
    let result = [];
    let arr = [this.throne];
    while(arr.length){
        let person = arr.shift()
        person.status && result.push(person.name)
        person.childs.length && arr.unshift(...person.childs)
    }
    return result;
};

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * var obj = new ThroneInheritance(kingName)
 * obj.birth(parentName,childName)
 * obj.death(name)
 * var param_3 = obj.getInheritanceOrder()
 */
/**
 * 超时~~~~~
 */