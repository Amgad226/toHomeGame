var vertix = ['همك','مينا','عباسسين','كراج','جسر','شارع الثورة','حامييش','بيت']
var Transportation= ['مشي','مكرو','تكسي' ]
class state{
    constructor(money,health,time, parents , lastVehicle,station,cost=0){
        this.station = station;
        this.stationName = vertix[this.station]
        this.money = money;
        this.health = health;
        this.time = time;
        this.parents = parents;
        this.lastVehicle = lastVehicle;
        this.lastVehicleName=Transportation[this.lastVehicle]
        this.cost=cost; 
        this.h=0

    }
    getPossibleStatesByBus(){
        var statesArray=[];
        for (let x = 0; x < bus[this.station].length; x++) {

            if(bus[this.station][x] != null ){
                if(this.money -400 <0){
                    continue;
                  }
                var m =this.money -400;
                var h= this.health-(5*bus[this.station][x].dist)
                var t = (this.time + (bus[this.station][x].dist/bus[this.station][x].v)*60);
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
          if(1000*taxi[this.station][x].dist>this.money){
            continue;
          }
                var m =this.money -(1000*taxi[this.station][x].dist);
                // console.log(1000*taxi[this.station][x].dist,'taxi cost ');
                var h= this.health+(5*taxi[this.station][x].dist)
                var t = (this.time + (taxi[this.station][x].dist/taxi[this.station][x].v)*60);
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
                if(this.health  <0){
                    // continue;
                  }
                  var m =this.money ;
                  var h= this.health-(10*walk[this.station][x].dist)
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

            
 var state0 =new state(4000,100,0,null,null,0,0);
var state7 = new state(0,0,0,null,null,7,0)

function chackInVisited(hashedState){
  for (let i = 0; i < visited.length; i++) {
    if ( hashedState==visited[i]) {
         return true
    }    
  }
  return false 
}
  
  var visited= [] ; 
  var pQueue = new PriorityQueue();
  var myState =state0;


var heur ;
function heuristicTime(state){
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
  var number =0 ;
var t = 0
  var temp=state; 

  while(temp.station!=  7){
// if(t==3)
// break;
    // console.log('in while',temp);
    var sons= [...temp.getPossibleStatesByBus(),...temp.getPossibleStatesByTaxi(),...temp.getPossibleStatesByWalk()]//all steps
    console.log(sons,888);
    // console.log(sons.length , 'son.lenght');
     temp=sons[0]; 
  for (let i = 0; i < sons.length; i++) {
    // console.log('*********************************');
    if(temp.time>sons[i].time)
    {
      // console.log('in if');
      temp=sons[i];
      // temp = null;
      // temp = sons[i]
      // console.log(temp,'temp----------------------------------------------');
      // console.log(sons[i],'son[]');
    }
  }
  // break;
  console.log(temp, 'temp after for ');
  number+=temp.time
  t++; 
 }
  console.log(number,' number in heuristic');
  return number 
}
var vState=[];
function aStar(state) {
  console.log('***********************************************************************************************');
vState.push(state)
  // console.log(state.element);
  var isVi = 0
  myState= state.element
  var hashedArray = state.element.hashState();
  
  if(! chackInVisited(hashedArray)){
    visited.push(hashedArray)
  }

  if (state.element.checkWin()) {
    console.log('\n-----------------------------win---------------------------------\n \n');
      console.log(isVi,'IsvI');
      console.log(visited.length, 'visitied');
      console.log(state.element.cost, 'cost');
      console.log('\n my state is :',myState,'\n');
    console.log('\n-----------------------------win---------------------------------\n \n');
    return true
  }
  // if(state.element.money<400){
  // console.log('\n++++++++++++++++++++++++++++++++money++++++++++++++++++++++++++++++++\n \n');
  //     console.log('end money',state.element.money );
  //     console.log(visited.length, 'visitied');
  //     console.log(state.element.cost, 'cost');
  //     console.log('\n my state is :',myState,'\n');
  // console.log('\n++++++++++++++++++++++++++++++++money++++++++++++++++++++++++++++++++\n \n');
  //     return true
  // }

  // if(state.element.health<=0){
  // console.log('\n********************************health********************************\n \n');
  //     console.log('end health :', state.element.health );
  //     console.log(visited.length, 'visitied');
  //     console.log(state.element.cost, 'cost');
  //     console.log('\n my state is :',myState,'\n');
  // console.log('\n********************************health********************************\n \n');
  //   return true
  // }
  
  // var sons = state.element.getPossibleStatesByBus()
  // var sons = state.element.getPossibleStatesByTaxi()
  // var sons = state.element.getPossibleStatesByWalk()

  sons= [...state.element.getPossibleStatesByBus(),...state.element.getPossibleStatesByTaxi(),...state.element.getPossibleStatesByWalk()]//all steps
  // console.log(sons,'merage sons');

  for (let i = 0; i < sons.length; i++) {
        sons[i].parents = (state.element.parents?.length > 0 ? [...state.element.parents, state.element] : [state.element])
        sons[i].cost = state.element.cost + 1;
        sons[i].h = heuristicTime(sons[i]);
        // sons[i].h = heuristicTime(sons[i]);
        // sons[i].h = heuristicTime(sons[i]);
        // sons[i].h = heuristicTime(sons[i]);
        // console.log(sons[i],11111);
        var hashedSon = sons[i].hashState();
    
        if(! chackInVisited(hashedSon)){
          console.log(sons[i]);
          pQueue.enqueueStar(sons[i],  sons[i].cost + sons[i].h     ,sons[i].h)
        }
        // console.log(sons[i],'in a*');
  }

  if (!pQueue.isEmpty()) {
    aStar(pQueue.dequeue());
  }

}
  // UCS( {element:state0,priority:0 })
  aStar( {element:state0,priority:0 });
  // heuristicTime(state0)