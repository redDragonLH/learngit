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
    return (farmer == state.farmer) && (wolf == state.wolf) && (sheep == state.sheep) && (vegetable == state.vegetable);
  }
  PrintStates(){
    
  }
  IsFinalState(){
    return ( (farmer == LOCATION.RIGHT) && (wolf == LOCATION.RIGHT) && (sheep == LOCATION.RIGHT) && (vegetable == LOCATION.RIGHT) );
  }
}

function ProcessFarmerGo(current, next){
  if(current.farmer !=== LOCATION.LEFT){
    return false;
  }
  next = current;
  next.farmer = LOCATION.RIGHT;
  next.curAction = Action.GO_SELF;
  
  return IsCurrentStateValid(next)
}
function ProcessFarmerGoTakeWolf(){}
function ProcessFarmerGoTakeSheep(){}
function ProcessFarmerGoTakeVegetable(){}
function ProcessFarmerBack(){}
function ProcessFarmerBackTakeWolf(){}
function ProcessFarmerBackTakeSheep(){}
function ProcessFarmerBackTakeVegetable(){}
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
const actMap = [
    {GO_SELF: ProcessFarmerGo},
    {GO_WITH_WOLF: ProcessFarmerGoTakeWolf },
    {GO_WITH_SHEEP: ProcessFarmerGoTakeSheep},
    {GO_WITH_VEGETABLE: ProcessFarmerGoTakeVegetable},
    {BACK_SELF: ProcessFarmerBack},
    {BACK_WITH_WOLF: ProcessFarmerBackTakeWolf},
    {BACK_WITH_SHEEP: ProcessFarmerBackTakeSheep},
    {BACK_WITH_VEGETABLE:ProcessFarmerBackTakeVegetable}
]
function IsProcessedState(states, newstates){
  let it
  return it != states.end();
}
function IsCurrentStateValid(current){
  if(current.wolf === current.sheep && current.sheep !== current.farmer){
    return false;
  }
  if( current.vegetable === current.sheep && current.sheep != current.farmer){
    return false;
  }
  return true;
}


function SearchStates( states ){
  
}

