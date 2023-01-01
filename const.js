var busName=['دويلعة كراجات' ,'باص احمر', 'مزة جبل', 'دوار شمالي', 'برزة',''];

function fillEdgeWalk() {
    EdgeWalk(0,1,4);
    EdgeWalk(0,2,6);
    EdgeWalk(0,3,8);
    EdgeWalk(0,4,10);
    EdgeWalk(0,5,11);
    EdgeWalk(0,6,12);
    EdgeWalk(0,7,14);
   
    // EdgeWalk(1,2,2);
    // EdgeWalk(1,3,4);
    // EdgeWalk(1,6,8);
    // EdgeWalk(1,7,10);

    EdgeWalk(1,2,4);
    EdgeWalk(1,3,6);
    EdgeWalk(1,6,8);
    EdgeWalk(1,7,9);

   
    // EdgeWalk(2,3,2);
    // EdgeWalk(2,6,6);
    // EdgeWalk(2,7,8);
       
    EdgeWalk(2,3,2);
    EdgeWalk(2,4,6);
    EdgeWalk(2,5,7);

   
    EdgeWalk(3,6,2);
    EdgeWalk(3,6,6);
   
    EdgeWalk(4,3,13);
    EdgeWalk(4,5,1);
    EdgeWalk(4,6,10);

    EdgeWalk(4,7,11);
   
    EdgeWalk(5,3,12);
    EdgeWalk(5,6,6);
    EdgeWalk(5,7,7);
    EdgeWalk(6,7,1);
 }
 
 function fillEdgeBus(){
    //0
    EdgeBus(0,1  , 4,15,50,busName[0]);
    EdgeBus(0,2  , 6,15,50,busName[0]);
    EdgeBus(0,3  , 8,15,50,busName[0]);
    EdgeBus(0,4  , 10,25,40,busName[1]);
    //1   
    EdgeBus(1,2  , 2,10,50,busName[0]);
    EdgeBus(1,3  , 3,10,50,busName[0]);
    //2   
    EdgeBus(2,3  , 2,5,50,busName[0]);
    //3   
    EdgeBus(3,5  , 5,10,60,busName[2]);
    EdgeBus(3,6  , 2,5,50,busName[3]);
    //4   
    EdgeBus(4,3  , 13,5,50,busName[1]);
    EdgeBus(4,5  , 1,10,40,busName[1]);
    //5   
    EdgeBus(5,3  , 5,10,60, busName[2]);
    EdgeBus(5,6  , 6,7,50,busName[4]);
}


function fillEdgeTaxi(){
    EdgeTaxi(0,1,4,12,100);
    EdgeTaxi(0,2,6,12,100);
    EdgeTaxi(0,3,8,12,100);
    EdgeTaxi(0,4,9,4,120);
    EdgeTaxi(0,5,10,4,120);
    EdgeTaxi(0,6,13,4,120);

    EdgeTaxi(1,2,2,12,100);
    EdgeTaxi(1,3,3,12,100);
    EdgeTaxi(1,6,7,4,120);

    EdgeTaxi(2,3,2,12,120);
    EdgeTaxi(2,5,12,4,120);
    EdgeTaxi(2,6,6,4,120);

    EdgeTaxi(3,5,5,4,120);//karag to share3 althora
    EdgeTaxi(3,6,2,4,120);// karag to 7amesh

    EdgeTaxi(4,3,13,5,80);
    EdgeTaxi(4,5,1,4,70);
    EdgeTaxi(4,6,8,4,120);

    EdgeTaxi(5,3,5,5,80);
    EdgeTaxi(5,6,6,4,90);


}


class edge{
    constructor(dist,waitingTime,v,to,name = null){
        this.dist=dist;
        this.waitingTime=waitingTime;
        this.v=v;
        this.to=to;
        this.name=name;
    }
}
class edgeWalk{
    constructor(dist,to){
        this.dist=dist;   
        this.to=to;
    }
}
 
// [new edge()]
//----------------------------------------------------

var walk = [[],[],[],[],[],[],[],[]];
function EdgeWalk(x,y,d){
    walk[x][y]=new edgeWalk(d,y);
 }
fillEdgeWalk();
 

//----------------------------------------------------
var bus =[ [],[],[],[],[],[],[],[]];

function EdgeBus(x,y,dist,waitingTime,v,name,){
    bus[x][y]=new edge(dist,waitingTime,v,y,name);
}
fillEdgeBus();
//----------------------------------------------------

var taxi =[ [],[],[],[],[],[],[],[]];
function EdgeTaxi(x,y,dist,waitingTime,v){
    taxi[x][y]=new edge(dist,waitingTime,v,y);
}
fillEdgeTaxi();
var vertix = ['همك','مينا','عباسسين','كراج','جسر','شارع الثورة','حامييش','بيت']
var Transportation= ['مشي','مكرو','تكسي' ]


class state{
    constructor(money,health,time, parents , lastVehicle,station,cost=0){
        this.time = time;
        this.lastVehicle = lastVehicle;
        this.lastVehicleName=Transportation[this.lastVehicle]
        this.station = station;
        this.stationName = vertix[this.station]
        this.money = money;
        this.health = health;
        this.parents = parents;
     
        this.cost=cost; 
        this.h=0

    }
    getPossibleStatesByBus(){
        var statesArray=[];
        for (let x = 0; x < bus[this.station].length; x++) {

            if(bus[this.station][x] != null ){
                var m =this.money -400;
                var h= this.health-(5*bus[this.station][x].dist)
                if(h <0 || m <0 ){continue;}

                var t = (this.time + (bus[this.station][x].dist/bus[this.station][x].v)*60)+bus[this.station][x].waitingTime;
                var parent= this;
                var lastVehicle= 1;
                var cost = this.cost +1; 
                var station = bus[this.station][x].to;
                statesArray.push(new state(m,h,t,parent,lastVehicle,station,cost));
            }

        }
        return statesArray
    }
    getPossibleStatesByTaxi(){
        var statesArray=[];
        // console.log(this.station);
        for (let x = 0; x < taxi[this.station].length; x++) {
            // console.log(22);
            if(taxi[this.station][x] != null ){
      
                var m =this.money -(1000*taxi[this.station][x].dist);
                
                var h= this.health+(5*taxi[this.station][x].dist)
                
                if(h <0 || m <0 ){continue;}
                if(h>=100){h=100;}

                var t = (this.time + (taxi[this.station][x].dist/taxi[this.station][x].v)*60)+taxi[this.station][x].waitingTime;
                var parent= this;
                var lastVehicle= 2;
                var station = taxi[this.station][x].to;
                var cost = this.cost +1; 
                
                statesArray.push(new state(m,h,t,parent,lastVehicle,station,cost));
            }

        }
        return statesArray
    }
    getPossibleStatesByWalk(){
        var statesArray=[];
        // console.log(this.station);
        // console.log(this);

        for (let x = 0; x < walk[this.station].length; x++) {
            // console.log('enter');
            // console.log( walk[this.station].length,22);
            if(walk[this.station][x] != null ){
                  var m =this.money ;
                  var h= this.health-(10*walk[this.station][x].dist)
                  if(h <0 || m <0 ){continue;}
                  var t = (this.time + (walk[this.station][x].dist/5.5)*60);
                  var parent= this;
                  var lastVehicle= 0;
                  var station = walk[this.station][x].to;
                  var cost = this.cost+1
                  statesArray.push(new state(m,h,t,parent,lastVehicle,station,cost));
            }

        }
        return statesArray
    }
    getPossibleEdges()
    {
        var busArray = [] ;
        for (let x = 0; x < bus[this.station].length; x++) {

            if(bus[this.station][x] != null ){
                // bus[this.station][x].to=x;
                // console.log(111,bus[this.station][x]);
                busArray.push(bus[this.station][x] );
            }
            
        }
        var taxiArray = [] ;
        for (let x = 0; x < taxi[this.station].length; x++) {

            if(taxi[this.station][x] != 0 ){
                // taxi[this.station][x].to=x;
                taxiArray.push(taxi[this.station][x] );

            }
            
        }
        var walkArray = [] ;
        for (let x = 0; x < walk[this.station].length; x++) {

            if(walk[this.station][x] != null ){
                walkArray.push(walk[this.station][x] );
            }
            
        }
        return [busArray,taxiArray,walkArray] ;
    
    }

    goBus(edge)
    {
        // console.log( edge);
        var m =this.money -400;
        var h= this.health-(5*edge.dist)
        var t = (this.time + (edge.dist/edge.v)*60);
        var parent= this;
        var lastVehicle= 1;
        var cost = this.cost+1
        var station = edge.to;
        return new state(m,h,t,parent,lastVehicle,station,cost)
    }
    goTaxi(edge)
    {
    
        var m =this.money -(1000*edge.dist);
        var h= this.health+(5*edge.dist)
        if(h>=100){h=100;}
        var t = (this.time + (edge.dist/edge.v)*60);
        var parent= this;
        var lastVehicle= 2;
        var station = edge.to;
        var cost = this.cost+1

        return new state(m,h,t,parent,lastVehicle,station,cost)
    }
    goWalk(edge)
    {
        var m =this.money ;
        var h= this.health-(10*edge.dist)
        var t = (this.time + (edge.dist/5.5)*60);
        var parent= this;
        var lastVehicle= 0;
        var station = edge.to;
        var cost = this.cost+1
        return new state(m,h,t,parent,lastVehicle,station,cost)
    }

    checkWin(){
      if (this.station==7 )
          return true ;

      return false ; 
    }
    hashState(){
      var string=JSON.stringify(this)
      var hash = 0;
      for (var i = 0; i < string.length; i++) {
          var code = string.charCodeAt(i);
          hash = ((hash<<5)-hash)+code;
          hash = hash & hash; // Convert to 32bit integer
      }
      return hash;
    }

}      