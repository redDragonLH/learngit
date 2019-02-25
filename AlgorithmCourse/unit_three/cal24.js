/**
 * 24点游戏
 */

let opArr = ["+","-","*","/"];

/**
 * [computeNum description]
 * @author liuhe
 * @anotherdate 2019-02-25T10:03:01+080
 * @param       {Array}                numArr    输入的四个数字
 * @param       {Number}                numLen    输入的数字个数
 * @param       {Number}                targetNum 输入四个数字后要计算出的结果(24,etc)
 * @return      {String}                         
 */
function computeNum(numArr,numLen,targetNum){
  for (let i = 0; i < numLen; i++) {
    for (let j = i+1; j < numLen; j++) {
      let numij = [numArr[i],numArr[j]];
      numArr[j] = numArr[numLen - 1];
      for (let k = 0; k < opArr.length; k++) {
        numArr[i] = '(' + numij[k % 2]+ opArr[k] +numij[(!(k%2)*1)] + ')';
        if(computeNum(numArr,numLen-1,targetNum)){
          return false;
        }
      }
      numArr[i] = numij[0];
      numArr[j] = numij[1];
    }
  }
  let tmpStr = numArr[0];
  return (numLen == 1 ) && (eval(numArr[0]) == targetNum )
}

function getExpression(numArr,targetNum){
  if(computeNum(numArr,numArr.length,targetNum)){
    let str = numArr[0].substring((1, numArr[0].length - 1 ));
    return numArr[0].substring(1,numArr[0].length -1 ) + "=" + String(targetNum)
  }else{
    return "没有"
  }
}
console.log(getExpression([6,5,7,4],24));
