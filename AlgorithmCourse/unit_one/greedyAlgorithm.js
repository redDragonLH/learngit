// 贪婪法的例子： 背包问题

/**
 * 有一个背包，最多能承载重量为 C=150 的物品，现在有 7 个物品（物品不能分割成任意大小），
 * 编号为 1~7，重量分别是 wi=[35、30、60、50、40、10、25]，
 * 价值分别是 pi=[10、40、30、50、35、40、30]，
 * 现在从这 7 个物品中选择一个或多个装入背包，要求在物品总重量不超过 C 的前提下，
 * 所装入的物品总价值最高。
 * 
 */

class PackNode {
  constructor(weight,price) {
    this.weight = weight;
    this.price = price;
    this.status = 0; //0:未选中；1:已选中；2:已经不可选
  }
}

class Pack {
  constructor() {
    this.objs = [];
    this.totalC =150 ;
  }
}
function PrintResult(obj){
  for (var i = 0; i < obj.length; i++) {
    obj[i].status = 0;
  }
}
function GreedyAlgo(packlist,spFunc){
  let idx;
  let ntc = 0;
  let totalPrice = 0;
  //spFunc 每次选最符合策略的那个物品，选后再检查
  while((idx = spFunc(packlist.objs,packlist.totalC - ntc)) != -1){
    //所选物品是否满足背包承重要求？
    if( ntc + packlist.objs[idx].weight <= packlist.totalC ){
      packlist.objs[idx].status = 1;
      ntc += packlist.objs[idx].weight;
      totalPrice+= packlist.objs[idx].price;
    }else{
      //不能选这个物品了，做个标记后重新选
      packlist.objs[idx].status = 2;
    }
  }
  PrintResult(packlist.objs);
  return {
    totalWeight: ntc,
    totalPrice
  }
}
/**
 * 第一种策略是根据物品价值选择，每次都选价值最高的物品
 */
function choosefunc1(objs, c){
  let index = -1; // -1 表示背包容量已满
  let mp = 0;
  for (var i = 0; i < objs.length; i++) {
    if(objs[i].status === 0 && objs[i].price > mp ){
      mp = objs[i].price;
      index = i;
    }
  }
  return index;
}
/**
 * 第二种策略是根据物品重量选择，每次都选择重量最轻的物品
 * 
 * 选择最小数毕竟麻烦
 */
function choosefunc2(objs, c){
  let index = -1; // -1 表示背包容量已满
  let mp = 0;
  for (var i = 0; i < objs.length; i++) {
    if(objs[i].status === 0){
      mp = objs[i].weight;
      break;
    }
  }
  
  for (var i = 0; i < objs.length; i++) {
    if(objs[i].status === 0 && (objs[i].weight < mp || objs[i].weight === mp)){
      mp = objs[i].weight;
      index = i;
    }
  }
  return index;
}
/**
 * 第三种策略是定义一个价值密度的概念，每次选择都选价值密度最高的物品
 *
 * 每单位重量有多少价值
 */
function choosefunc3(objs, c){
  let index = -1; // -1 表示背包容量已满
  let mp = 0;
  // 每单位重量有多少价值
  for (var i = 0; i < objs.length; i++) {
    objs[i].si = objs[i].price/objs[i].weight;
  }
  
  for (var i = 0; i < objs.length; i++) {
    if(objs[i].status === 0 && objs[i].si > mp ){
      mp = objs[i].si;
      index = i;
    }
  }
  return index;
}
 let wi=[35,30,60,50,40,10,25];
 let pi=[10,40,30,50,35,40,30];
 let pack = new Pack();
 for (var i = 0; i < wi.length; i++) {
   pack.objs.push(new PackNode(wi[i],pi[i]));
 }
 // console.log(pack.objs);
 console.log(GreedyAlgo(pack,choosefunc1));
 console.log(GreedyAlgo(pack,choosefunc2));
 console.log(GreedyAlgo(pack,choosefunc3));
console.log(pack.objs);