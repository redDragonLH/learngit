/**
 * 剑指 Offer 20. 表示数值的字符串
 * 
 * 请实现一个函数用来判断字符串是否表示数值（包括整数和小数）。例如，字符串"+100"、"5e2"、"-123"、"3.1416"、"-1E-16"、"0123"都表示数值，但"12e"、"1a3.14"、"1.2.3"、"+-5"及"12e+5.4"都不是。
 */

/**
 * 使用语言自带的方法进行判断
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    return s!==' ' && !Number.isNaN(Number(s)); // ' ' 在转为数字时会转换成 0
};
/**
 * 执行用时：116 ms, 在所有 JavaScript 提交中击败了40.23%的用户
 * 内存消耗：40.2 MB, 在所有 JavaScript 提交中击败了38.62%的用户
 */


/**
 * 使用基础语句自己封装应该比较恶心,有各种个样的情况需要处理
 * 
 * 比较好的方案就是 确定有限状态自动机
 * 
 * 在 C++ 文档中,描述了一个合法的数值字符串应当具有的格式.具体而言,它包含以下部分:
 *  * 符号位,即 + - 两种符号
 *  * 整数部分,即由若干字符 0 - 9 组成的字符串
 *  * 小数点
 *  * 小数部分,其构成与整数部分相同
 *  * 指数部分,其中包含开头的字符 e (大小写均可)、 可选的符号位,和整数部分
 * 
 * 并且本题还允许字符串首末两端有一些额外的空格
 * 其他额外的约束:
 *  * 如果符号位存在,其后面必须跟着数字或小数点
 *  * 小数点的前后哦两侧,至少有一侧是数字
 * 
 * 定义当前问题的自动机的状态集合:
 *  1. 起始的空格
 *  2. 符号位
 *  3. 整数部分
 *  4. 左侧有整数的小数点
 *  5. 左侧无整数的小数点(根据前面的第二条额外约束,需要对左侧有无整数的两种小数点做区分)
 *  6. 小数部分
 *  7. 字符 e,E
 *  8. 指数部分的符号位
 *  9. 指数部分的整数部分
 *  10. 末尾的空格
 * 
 * 初始状态应当为状态1,而接受状态的集合则为状态3、4、6、9、10.
 * 字符串的末尾要么是空格,要么是数字,要么是小数点,但是小数点前必须有数字
 * @param {string} s
 * @return {boolean}
 */
/**
 * java 代码
class Solution {
    public boolean isNumber(String s) {
        
        Map<State, Map<CharType, State>> transfer = new HashMap<State, Map<CharType, State>>();

        Map<CharType, State> initialMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_SPACE, State.STATE_INITIAL);
            put(CharType.CHAR_NUMBER, State.STATE_INTEGER);
            put(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT);
            put(CharType.CHAR_SIGN, State.STATE_INT_SIGN);
        }};
        transfer.put(State.STATE_INITIAL, initialMap);

        Map<CharType, State> intSignMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_INTEGER);
            put(CharType.CHAR_POINT, State.STATE_POINT_WITHOUT_INT);
        }};
        transfer.put(State.STATE_INT_SIGN, intSignMap);

        Map<CharType, State> integerMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_INTEGER);
            put(CharType.CHAR_EXP, State.STATE_EXP);
            put(CharType.CHAR_POINT, State.STATE_POINT);
            put(CharType.CHAR_SPACE, State.STATE_END);
        }};
        transfer.put(State.STATE_INTEGER, integerMap);

        Map<CharType, State> pointMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_FRACTION);
            put(CharType.CHAR_EXP, State.STATE_EXP);
            put(CharType.CHAR_SPACE, State.STATE_END);
        }};
        transfer.put(State.STATE_POINT, pointMap);

        Map<CharType, State> pointWithoutIntMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_FRACTION);
        }};
        transfer.put(State.STATE_POINT_WITHOUT_INT, pointWithoutIntMap);

        Map<CharType, State> fractionMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_FRACTION);
            put(CharType.CHAR_EXP, State.STATE_EXP);
            put(CharType.CHAR_SPACE, State.STATE_END);
        }};
        transfer.put(State.STATE_FRACTION, fractionMap);

        Map<CharType, State> expMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
            put(CharType.CHAR_SIGN, State.STATE_EXP_SIGN);
        }};
        transfer.put(State.STATE_EXP, expMap);

        Map<CharType, State> expSignMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
        }};
        transfer.put(State.STATE_EXP_SIGN, expSignMap);

        Map<CharType, State> expNumberMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_NUMBER, State.STATE_EXP_NUMBER);
            put(CharType.CHAR_SPACE, State.STATE_END);
        }};
        transfer.put(State.STATE_EXP_NUMBER, expNumberMap);

        Map<CharType, State> endMap = new HashMap<CharType, State>() {{
            put(CharType.CHAR_SPACE, State.STATE_END);
        }};
        transfer.put(State.STATE_END, endMap);

        int length = s.length();
        State state = State.STATE_INITIAL;

        for (int i = 0; i < length; i++) {
            CharType type = toCharType(s.charAt(i));
            if (!transfer.get(state).containsKey(type)) {
                return false;
            } else {
                state = transfer.get(state).get(type);
            }
        }
        return state == State.STATE_INTEGER || state == State.STATE_POINT || state == State.STATE_FRACTION || state == State.STATE_EXP_NUMBER || state == State.STATE_END;
    }

    public CharType toCharType(char ch) {
        if (ch >= '0' && ch <= '9') {
            return CharType.CHAR_NUMBER;
        } else if (ch == 'e' || ch == 'E') {
            return CharType.CHAR_EXP;
        } else if (ch == '.') {
            return CharType.CHAR_POINT;
        } else if (ch == '+' || ch == '-') {
            return CharType.CHAR_SIGN;
        } else if (ch == ' ') {
            return CharType.CHAR_SPACE;
        } else {
            return CharType.CHAR_ILLEGAL;
        }
    }
    // 枚举
    enum State {
        STATE_INITIAL,
        STATE_INT_SIGN,
        STATE_INTEGER,
        STATE_POINT,
        STATE_POINT_WITHOUT_INT,
        STATE_FRACTION,
        STATE_EXP,
        STATE_EXP_SIGN,
        STATE_EXP_NUMBER,
        STATE_END,
    }

    enum CharType {
        CHAR_NUMBER,
        CHAR_EXP,
        CHAR_POINT,
        CHAR_SIGN,
        CHAR_SPACE,
        CHAR_ILLEGAL,
    }
}
 */
/**
 * 真就是枚举一样,不过枚举的是状态,给定的字符串状态肯定也是一定的了,那么就轮询字符确定状态就可以了
 */