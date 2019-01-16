const BUCKETS_COUNT = 3;

class Bucket{
    constructor(data){
        this.m_capicity = data[0];
        this.m_water = data[1];
    }
    isFull(){
      return this.m_capicity === this.m_water;
    }
    hasWater(){
      return this.m_water > 0;
    }
    getSpace(){
      return this.m_capicity - this.m_water;
    }
    getWater(){
      return this.m_water;
    }
    addWater(water){
      var space = this.m_capicity - this.m_water;
      if( space > 0 ){
        this.m_water += (space > water) ? water :space;
      }
    }
    dumpWater(water){
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
  setBuckets(array){
    this.m_buckets.concat(array)
    this.setAction(8, -1, 0);
  }
  setAction(w, f, t){
    this.m_curAction.water = w;
    this.m_curAction.from  = f;
    this.m_curAction.to    = t;
  }
  PrintStates(){
    
  }
  operator(state){
    for (var i = 0; i < this.m_buckets.length; i++) {
      if( this.m_buckets[i].getWater() != state.m_buckets[i].getWater() ){
        return false;
      }
    }
    return true;
  }
  /*从from到to倒水，返回成功，得到新的状态next*/
  takeAction(from, to, next){
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
exports.BucketsState = BucketsState;
exports.Bucket = Bucket;
exports.BUCKETS_COUNT = BUCKETS_COUNT;
exports.ACTION = ACTION;