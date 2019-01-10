/**
 * 三桶等分8桶水
 */

class Bucket{
    constructor(data){
        this.m_capicity = data[0];
        this.m_water = data[1];
    }
}
const action_table = [[0, 1],[0, 2],[1, 0],[1,2],[2,0],[2,1]];
class ACTION {
    constructor() {
        this.form;
        this.to;
        this.water;
    }
}
class BucketsState {
  constructor() {
    this.m_buckets = [];
    this.m_curAction;
  }
}
function getWater(state,table){
    if(state[table[0]].m_water){
        var to = state[table[1]].m_capicity - state[table[1]].m_water;
        if(to){
          return state[table[0]].m_water > to ? to : state[table[0]].m_water
        }else{
            return 0;
        }
    }else{
        return 0;
    }
}
/**
 * 倒水动作
 * @constructor
 */
function takeAction(state,table){
    for (var i = 0; i < table.length; i++) {
        var action = new ACTION();
        action.form = table[i][0];
        action.to = table[i][1];
        action.water = getWater(state,table[i]);
        console.log(action.water);
    }
}
/**
 * 输入数据初始化
 */
function initData(data){
    var bucket = [];
    for (var i = 0; i < data.length; i++) {
        bucket.push(new Bucket(data[i]))
    }
    return bucket;
}

function Buckets(data){
    var bucket = initData(data);
    var newbucket = takeAction(bucket,action_table)
    
}
Buckets([[8,8],[5,0],[3,0]])