// 枚举思想是把所有可能的结论都写出来，找到正确的哪一个，在这过程中尽可能在开始排除错误的例子的，
// 最好的办法是找到一个局部状态，如果这个局部状态被确定，那么整个的状态就是确定的了
(function(window){
  // 熄灯问题枚举算法 js 代码
  //  注: 在刚开始的时候,按下按钮之后的状态是三种,分别是顶角的触发三盏灯,边缘的触发四盏灯,
  // 和内部的触发五盏灯,这样在判断时又会麻烦很多,需要判断的又多了不少,所以可以在原有数组的外面再放一层
  // 这样与问题有关的内容就是全都触发五盏灯,这也是一个取巧的办法,减少判断条件
  enumerate = {};
  var puzzle = arr(6,8); // 这是初始状态,  声明两个二维数组
      press =  arr(6,8); // 这是需要按下的按钮
    enumerate.start=function(arr){  // 开始，先初始化数组，把灯的状态输入
      for (var i = 1; i < 6; i++) {
        for (var j = 1; j < 7; j++) {
          puzzle[i][j]=arr[i-1][j-1];
        }
      }
      enumerate.enumerate();
    };
    enumerate.guess = function(){
      var c,r;
      for (r = 1; r < 5; r++) {
        for (c = 1; c < 7; c++) {
          press[r+1][c]=(puzzle[r][c]+press[r][c]+press[r-1][c]+press[r][c-1]+press[r][c+1])%2;
        }
      }
      for (c=1;c<7;c++) {
        if((press[5][c-1]+press[5][c]+press[5][c+1]+press[4][c])%2 != puzzle[5][c]){
          return false;
        }
      }
      console.log(press)
      my_console('enumerate_start',puzzle);

      my_console('enumerate_end',press);
      return true;
    };
    enumerate.enumerate=function(){ // 主要是循环第一行的状态,然后计算后面的状态
      var c = 1,
          success;
      while (enumerate.guess() == false) { // 第一次是初始状态下 presss 第一行全为零时是否满足状态
        press[1][1]++;
        c = 1;
        while (press[1][c]>1) {
          press[1][c] = 0;
          c++;
          press[1][c]++;
        }
      }
    };
// 声明二维数组
function arr(o,t){
  var arr = new Array();         //先声明一维
   for(var i=0;i<o;i++){          //一维长度为10
      arr[i] = new Array();    //在声明二维
      for(var j=0;j<t;j++){      //二维长度为20
         arr[i][j]=0;
     }
   }
 return arr;
}
// 打印二维数组
function my_console(id,arr){
  var dom=document.getElementById(id);
  var len = arr.length,
      text = '';
  for (var i = 1; i < len; i++) {
    text += donfor(arr[i]);
  }
  dom.innerHTML=text;
  function donfor(arr){
    var text = '<li>';
    for (var j = 1; j < arr.length-1; j++) {
      text+='<span>'+ arr[j] +'</span>';
    }
    text+='</li>';
    return text;
  }
}

window.enumerate = new enumerate();
})(window);
