/**
 * 925. 长按键入
 * 
 * 你的朋友正在使用键盘输入他的名字 name。偶尔，在键入字符 c 时，按键可能会被长按，而字符可能被输入 1 次或多次。
 * 你将会检查键盘输入的字符 typed。如果它对应的可能是你的朋友的名字（其中一些字符可能被长按），那么就返回 True。
 */

/**
 * 比较直观的也就是双指针法了吧
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    let nameP = 0;
    let typedP =0;
    let len = name.length;
    if(nameP < len){
        // 相等
        if(name[nameP] === typed[typedP]){
            nameP++;
            typedP++;
        }else if(typed[typedP-1] === typed[typedP]){
            typedP++;
        }else return false
    }
    return true;
};

/**
 * 官方题解
 */
var isLongPressedName = function(name, typed) {
    const n = name.length, m = typed.length;
    let i = 0, j = 0;
    while (j < m) { //处理最长的字符到最后
        if (i < n && name[i] === typed[j]) { // 当前字符相等
            i++;
            j++;
        } else if (j > 0 && typed[j] === typed[j - 1]) {// 与前一个相等,单独前进一格
            j++;
        } else {
            return false;
        }
    }
    return i === n;
};

/**
 * 也可以构建一个简单的正则匹配式,最后由正则去判断是否相等
 */
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
    if (typed.length < name.length) {
      return false;
    }
    let str = "^";
    for (let i = 0; i < name.length; i++) {
      if (name[i] == name[i + 1]) {
        str += name[i];
      } else {
        str += name[i] + "+";
      }
    }
    str += "$";
    let reg = new RegExp(str);
    return reg.test(typed);
  };