/**
 * 字符串匹配算法
 */
/**
 * 朴素匹配算法 
 * 一个一个字符匹配，失败则回到模式串的开头，主串位置+1
 * @param {*} a 
 * @param {*} b 
 */
 function MP(a,b){
  let star = -1;
  let num = 0;
  for (let i = 0; i < a.length; i++) {
   star = i;
   for (let j = 0; j < b.length; j++) {
    if(a[i+j] === b[j]){
      num++;
      if(j === b.length-1) return {star,num};
   } else {
    num = 0;
    break;
   }
   
  }
 }
 return star;
}
const a = 'ababaaabbabbab';
const b = 'babbab';

// console.log(MP(a,b));
/**
 * KMP 模式匹配算法
 * 
 * 核心思想：主串与模式串匹配的同时计算模式串已匹配串的最大前后缀公共长度，原因是如果模式串已匹配串的前后缀有公共元素，说明模式串的前缀与主串已匹配串的后缀相同，相同处无需再进行匹配
 * 
 * 核心处理：
 *   1. 计算最大前后缀
 *   2. 处理成一个方便使用的数据结构
 *   3. 主匹配按照数据结构进行位移
 */
function KMP(a,b){
 let i = 0; 
	let j = 0;
 let next = getnext(b)
	while (i < a.length && j < b.length)
	{
		if (j == -1 || a[i] == b[j]) 
		{
			i++;
           		j++;
		}
	 	else 
           		j = next[j];
    	}

    if (j == b.length)
       return i - j;
    else 
       return -1;
}
function getnext(str){
 let arr = [-1];
 let j =-1
 let i = 0
 while(i< str.length){
  if(j === -1 || str[i] ===str[j]){
   ++i;
   ++j;
   arr[i]=j;
  }else{
   j=arr[j]
  }
 }
 return arr;
}
console.log(KMP(a,b));
