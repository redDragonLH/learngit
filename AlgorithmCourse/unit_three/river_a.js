
/**
 * 狼、羊、菜和农夫过河问题 js 实现部分
 */
 LOCATION = {
   LEFT: 'left',
   RIGHT: 'right',
 }
class ItemState {
  constructor(obj) {
    this.farmer    = obj ? obj.farmer: LOCATION.LEFT;
    this.wolf      = obj ? obj.wolf: LOCATION.LEFT;
    this.sheep     = obj ? obj.sheep: LOCATION.LEFT;
    this.vegetable = obj ? obj.vegetable: LOCATION.LEFT;
    this.type; // 为防止陷入同一种状态来去循环，进行判断，不允许同一种状态来了再回去~~，1 为农夫，2为农夫与狼，3为农夫与羊，4为农夫于菜
    this.curAction;
  }
  IsSameState(state){
    return (this.farmer == state.farmer) && (this.wolf == state.wolf) && (this.sheep == state.sheep) && (this.vegetable == state.vegetable);
  }
  PrintStates(){
    
  }
  IsFinalState(){
    return ( (this.farmer == LOCATION.RIGHT) && (this.wolf == LOCATION.RIGHT) && (this.sheep == LOCATION.RIGHT) && (this.vegetable == LOCATION.RIGHT) );
  }
}

function ProcessFarmerGo(current, next){
  if(current.farmer !== LOCATION.LEFT){
    return false;
  }
  next = new ItemState(current);
  next.type = 1; // 
  next.farmer = LOCATION.RIGHT;
  next.curAction = 'GO_SELF';
  
  return IsCurrentStateValid(next)
}
function ProcessFarmerGoTakeWolf(current, next){
  if(current.farmer != LOCATION.LEFT || current.wolf != LOCATION.LEFT) return false;
  
  next = new ItemState(current);
  next.type = 2; // 
  next.farmer = LOCATION.RIGHT;
  next.wolf = LOCATION.RIGHT;
  next.curAction = 'GO_WITH_WOLF';
  return IsCurrentStateValid(next)
}
function ProcessFarmerGoTakeSheep(current, next){
  if( current.farmer != LOCATION.LEFT || current.sheep != LOCATION.LEFT) return false;
  
  next = new ItemState(current);
  next.type = 3; // 
  next.farmer = LOCATION.RIGHT;
  next.sheep = LOCATION.RIGHT;
  next.curAction = 'GO_WITH_SHEEP';
  
  return IsCurrentStateValid(next);
}
function ProcessFarmerGoTakeVegetable(current, next){
  if(current.farmer != LOCATION.LEFT || current.vegetable != LOCATION.LEFT) return false;
  
  next = new ItemState(current);
  next.type = 4; // 
  next.farmer = LOCATION.RIGHT;
  next.vegetable = LOCATION.RIGHT;
  next.curAction = 'GO_WITH_VEGETABLE';
  
  return IsCurrentStateValid(next);
}
function ProcessFarmerBack(current, next){
  if(current.farmer != LOCATION.RIGHT) return false;

  next = new ItemState(current);
  next.type = 1;
  next.farmer = LOCATION.LEFT;
  next.curAction = 'BACK_SELF';
  return IsCurrentStateValid(next);
}
function ProcessFarmerBackTakeWolf(current, next){
  if(current.farmer != LOCATION.RIGHT || current.wolf != LOCATION.RIGHT) return false;
  
  next = new ItemState(current);
  next.type = 2; // 
  next.farmer = LOCATION.LEFT;
  next.wolf = LOCATION.LEFT;
  next.curAction = 'BACK_WITH_WOLF';
  return IsCurrentStateValid(next);
}
function ProcessFarmerBackTakeSheep(current, next){
  if(current.farmer != LOCATION.RIGHT || current.sheep != LOCATION.RIGHT) return false;
  
  next = new ItemState(current);
  next.type = 3; // 
  next.farmer = LOCATION.LEFT;
  next.sheep = LOCATION.LEFT;
  next.curAction = 'BACK_WITH_SHEEP';
  
  return IsCurrentStateValid( next );
}
function ProcessFarmerBackTakeVegetable(current, next){
  if((current.farmer != LOCATION.RIGHT) || (current.vegetable != LOCATION.RIGHT)) return false;

  next = new ItemState(current);
  next.type = 4; // 
  next.farmer    = LOCATION.LEFT;
  next.vegetable = LOCATION.LEFT;
  next.curAction = 'BACK_WITH_VEGETABLE';

  return IsCurrentStateValid(next);
}
 let Action = {
        GO_SELF : ProcessFarmerGo,
        GO_WITH_WOLF: ProcessFarmerGoTakeWolf,
        GO_WITH_SHEEP: ProcessFarmerGoTakeSheep,
        GO_WITH_VEGETABLE: ProcessFarmerGoTakeVegetable,
        BACK_SELF: ProcessFarmerBack,
        BACK_WITH_WOLF: ProcessFarmerBackTakeWolf,
        BACK_WITH_SHEEP: ProcessFarmerBackTakeSheep,
        BACK_WITH_VEGETABLE: ProcessFarmerBackTakeVegetable,
}
/**
 * 状态判断，现在逻辑是循环状态数组，查看新状态是否存在数组
 * 并且判断下是否等于数组最后一个状态
 * @param       {array} states   状态数组
 * @param       {object} newState 新状态
 */
function IsProcessedState(states, newState){
  let it;
  for (var i = 0; i < states.length; i++) {
    if(states[i].IsSameState(newState)){
      it = i;
    }
  }
  return it != states.length-1;
}
/**
 * 检测状态是否合法
 * @param       {object} current 状态
 * @constructor
 */
function IsCurrentStateValid(current){
  if(current.wolf === current.sheep && current.sheep !== current.farmer){
    return false;
  }
  if( current.vegetable === current.sheep && current.sheep != current.farmer){
    return false;
  }
  return current;
}
function consoleArray(arr){
  let str ='';
  for (var i = 0; i < arr.length; i++) {
    str+= ' -> ' + arr[i].curAction;
  }
  console.log(str);
};
let num = 0;
function SearchStates( states ){
  let current = states[states.length-1]; // 获取最后的状态
  if(current.IsFinalState()){
    consoleArray(states);
    // console.log(++num);
    return true;
  }
  var next;
  for( let act in Action ){ // 循环所有动作
    next = Action[act](current, next);
    if(next && typeof next === 'object'){ // 变更状态正常并且能返回对象的动作
      // 符合条件的下一个状态怼进数组进行递归，然后如果不是通过条件就再弄出来，进行下一循环
      if(IsProcessedState(states, next) && current.type != next.type){
        states.push(next);
        if(SearchStates( states )) return true; //  只希望获取一种
        // SearchStates( states )
        states.pop();
      }
    }
  }
}
let states = []
states.push(new ItemState())
SearchStates( states )
