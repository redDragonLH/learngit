/**
 * 穷举法
 */

/**
 * 百钱买百鸡问题
 *
 * 问题描述：每只大公鸡值 5 个钱，每只母鸡值 3 个钱，每 3 只小鸡值 1 个钱，现在有 100 个钱，想买 100 只鸡，问如何买？有多少种方法？
 *
 *
 * 分析：
 *      首先定义问题的解。原始问题问如何买鸡，实际是在问对于一种买法来说，买的公鸡、母鸡和小鸡分别有多少只
 *      
 */

function buy(){
  let count = 0;
  for (var roosters  = 0; roosters  <= 20; roosters++) {
    for (var hens  = 0; hens  <=33 ; hens++) {
      let chicks = 100 -roosters- hens;
      if(((chicks %3) == 0) && (( 5 * roosters + 3 * hens + chicks / 3) === 100)){
        count++;
        console.log('买法 '+ count +'：公鸡'+ roosters +', 母鸡'+ hens +', 小鸡'+ chicks);
      }
    }
  }
}
buy()