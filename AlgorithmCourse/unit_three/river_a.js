/**
 * 狼、羊、菜和农夫过河问题 js 实现部分
 */
 LOCATION = {
   LEFT: 'left',
   RIGHT: 'right',
 }
class ItemState {
  constructor() {
    this.farmer    = LOCATION.LEFT;
    this.wolf      = LOCATION.LEFT;
    this.sheep     = LOCATION.LEFT;
    this.vegetable = LOCATION.LEFT;
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
  next = current;
  next.farmer = LOCATION.RIGHT;
  next.curAction = Action.GO_SELF;
  
  return IsCurrentStateValid(next)
}
function ProcessFarmerGoTakeWolf(current, next){
  if(current.farmer != LOCATION.LEFT || current.wolf != LOCATION.LEFT) return false;
  
  next = current;
  next.farmer = LOCATION.RIGHT;
  next.wolf = LOCATION.RIGHT;
  next.curAction = Action.GO_WITH_WOLF;
  return IsCurrentStateValid(next)
}
function ProcessFarmerGoTakeSheep(current, next){
  if( current.farmer != LOCATION.LEFT || current.sheep != LOCATION.LEFT) return false;
  
  next = current;
  
  next.farmer = LOCATION.RIGHT;
  next.sheep = LOCATION.RIGHT;
  next.curAction = Action.GO_WITH_SHEEP;
  
  return IsCurrentStateValid(next);
}
function ProcessFarmerGoTakeVegetable(current, next){
  if(current.farmer != LOCATION.LEFT || current.vegetable != LOCATION.LEFT) return false;
  
  next.current;
  
  next.farmer = LOCATION.RIGHT;
  next.vegetable = LOCATION.RIGHT;
  next.curAction = Action.GO_WITH_VEGETABLE;
  
  return IsCurrentStateValid(next);
}
function ProcessFarmerBack(current, next){
  if(current.farmer != LOCATION.RIGHT) return false;
  
  next = current;
  
  next.farmer = LOCATION.LEFT;
  next.curAction = Action.BACK_SELF;
  
  return IsCurrentStateValid(next);
}
function ProcessFarmerBackTakeWolf(current, next){
  if(current.farmer != LOCATION.RIGHT || current.wolf != LOCATION.RIGHT) return false;
  
  next = current;
  
  next.farmer = LOCATION.LEFT;
  next.wolf = LOCATION.LEFT;
  next.curAction = Action.BACK_WITH_WOLF;
  return IsCurrentStateValid(next);
}
function ProcessFarmerBackTakeSheep(current, next){
  if(current.farmer != LOCATION.RIGHT || current.sheep != LOCATION.RIGHT) return false;
  
  next = current;
  
  next.farmer = LOCATION.LEFT;
  next.sheep = LOCATION.LEFT;
  next.curAction = Action.BACK_WITH_SHEEP;
  
  return IsCurrentStateValid( next );
}
function ProcessFarmerBackTakeVegetable(current, next){
  if((current.farmer != LOCATION.RIGHT) || (current.vegetable != LOCATION.RIGHT)) return false;

  next = current;

  next.farmer    = LOCATION.LEFT;
  next.vegetable = LOCATION.LEFT;
  next.curAction = Action.BACK_WITH_VEGETABLE;

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
function IsProcessedState(states, newState){
  let it;
  for (var i = 0; i < states.length; i++) {
    if(states[i].IsSameState(newState)){
      it = i;
    }
  }
  return it != states.length-1;
}
function IsCurrentStateValid(current){
  if(current.wolf === current.sheep && current.sheep !== current.farmer){
    return false;
  }
  if( current.vegetable === current.sheep && current.sheep != current.farmer){
    return false;
  }
  return current;
}


function SearchStates( states ){
  let current = states[states.length-1];
  if(current.IsFinalState()){
    console.log(current);
    return false;
  }
  var next;
  for( let act in Action ){
    next = Action[act](current, next);
    if(next && typeof next === 'object'){
      if(!IsProcessedState(states, next)){
        states.push(next);
        SearchStates( states );
        states.pop();
      }
    }
  }
}
let states = []
states.push(new ItemState())
SearchStates( states )
