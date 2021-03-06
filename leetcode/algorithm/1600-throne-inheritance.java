import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

/**
 * 1600. 皇位继承顺序
 * <p>
 * 一个王国里住着国王、他的孩子们、他的孙子们等等。每一个时间点，这个家庭里有人出生也有人死亡。
 * <p>
 * 这个王国有一个明确规定的皇位继承顺序，第一继承人总是国王自己。我们定义递归函数 Successor(x, curOrder) ，
 * 给定一个人 x 和当前的继承顺序，该函数返回 x 的下一继承人。
 * <p>
 * 具体信息见leetcode 官网
 */

class Person {
    public String name;
    public Boolean status = false;
    // 复杂数据结构最好在定义时实例化
    public ArrayList<Person> childs = new ArrayList<Person>();

    public Person(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name;
    }
}

class ThroneInheritance {
    public ArrayList<Person> thrones = new ArrayList<Person>();
    public HashMap<String, Person> thronesMap = new HashMap<String, Person>();

    public ThroneInheritance(String kingName) {
        Person person = new Person(kingName);
        thrones.add(person);
        thronesMap.put(kingName, person);
    }

    public void birth(String parentName, String childName) {
        Person person = new Person(childName);
        thronesMap.get(parentName).childs.add(person);
        thronesMap.put(childName, person);
    }

    public void death(String name) {
        thronesMap.get(name).status = true;

    }

    // List是抽象数据也是 数组类数组结构的祖先，所以不能直接实例化List
    public List<String> getInheritanceOrder() {
        List<String> result = new ArrayList<String>();
        ArrayList<Person> temp = new ArrayList<Person>();
        temp.addAll(thrones);
        while (temp.size() > 0) {
            Person item = temp.remove(0);
            if (!item.status) result.add(item.name);
            temp.addAll(0, item.childs);
        }
        return result;
    }
}
/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * ThroneInheritance obj = new ThroneInheritance(kingName);
 * obj.birth(parentName,childName);
 * obj.death(name);
 * List<String> param_3 = obj.getInheritanceOrder();
 * <p>
 * 单一数据结构还是会超出时间限制
 * <p>
 * 单一数据结构还是会超出时间限制
 * <p>
 * 单一数据结构还是会超出时间限制
 * <p>
 * 单一数据结构还是会超出时间限制
 */

/**
 * ~~~~~
 * 执行用时：301 ms, 在所有 Java 提交中击败了99.44%的用户
 * 内存消耗：97.7 MB, 在所有 Java 提交中击败了45.00%的用户
 */