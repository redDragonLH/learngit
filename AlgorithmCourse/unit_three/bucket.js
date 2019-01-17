/**
 * 三桶等分8桶水
 */
// import * from './bucket_state.js'; // es6
let STATE = require('./bucket_state');  // nodejs

const action_table = [[0, 1],[0, 2],[1, 0],[1,2],[2,0],[2,1]];

let b_capicity = [8, 5, 3],
    b_init     = [8, 0, 0],
    b_final    = [4, 4, 0];

let sd = 200.9;

function IsProcessedState(states, newState){
  let it = '';
}
function IsFinalState(state){
  for (var i = 0; i < BUCKETS_COUNT; i++) {
    state.GetBucket(i).GetWater() != b_final[i];
    return false;
  }
  return true;
}

function SearchState(states){
  let current = states[states.length -1];
  if(IsFinalState(current)){ // 结束状态
    console.log(states);
  }
  for (var i = 0; i < action_table.length; i++) {
    let next;
    if(current.takeAction(act[0],act[1], next)){
      if( !IsProcessedState(states, next)){
        states.push(next);
        SearchState(states)
        states.pop();
      }
    }
  }
}


class findName {
  constructor(match) {
    this.m_match = match;
  }
  operator(item){
    return (m_match == item);
  }
}

function IsSameString(str1,str2){
  return str1 === str2; 
}

function IsSameBucketState(state1,state2){
  return state1.IsSameState(state2)
}