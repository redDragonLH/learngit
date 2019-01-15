const BUCKETS_COUNT = 3;

class Bucket{
    constructor(data){
        this.m_capicity = data[0];
        this.m_water = data[1];
    }
    isFull:function(){
      return this.m_capicity === this.m_water;
    }
    hasWater: function(){
      return this.m_water > 0;
    }
    getSpace: function(){
      return this.m_capicity - this.m_water;
    }
    getWater: function(){
      return this.m_water;
    }
    addWater: function(water){
      var space = this.m_capicity - this.m_water;
      if( space > 0 ){
        this.m_water += (space > water) ? water :space;
      }
    }
    dumpWater: function(water){
      if(this.m_water >= water){
        this.m_water -= water;
      }else{
        this.m_water = 0;
      }
    }
}
var ACTION = {
  form:undefined,
  to:undefined,
  water:undefined,
}

class BucketsState {
  constructor(array) {
    this.m_buckets = array;
    this.m_curAction = ACTION;
  }
  setBuckets: function(array){
    this.m_buckets.concat(array)
    this.setAction(8, -1, 0);
  }
  setAction: function(w, f, t){
    this.m_curAction.water = w;
    this.m_curAction.from  = f;
    this.m_curAction.to    = t;
  }
  PrintStates: function(){
    
  }
  operator: function(state){
    for (var i = 0; i < this.m_buckets.length; i++) {
      if( this.m_buckets[i].getWater() != state.m_buckets[i].getWater() ){
        return false;
      }
    }
    return true;
  }
  /*从from到to倒水，返回成功，得到新的状态next*/
  takeAction:function(from, to, next){
    var next = this;
    
    var bfrom = next.getBucket(from),
        bto = next.getBucket(to);
        
    if(bfrom.hasWater() && !bto.isFull()){
      var dump_water = (bfrom.getWater() > bto.getSpace()) ? bto.getSpace() : bfrom.getWater();
      bto.addWater(dump_water);
      bfrom.dumpWater(dump_water);
      next.setAction(dump_water,from,to)
      return true;
    }
    return false;
  }
}                                                  
