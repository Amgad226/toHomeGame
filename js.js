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
    bus[x][y]=new edge(dist,waitingTime,v,y);
}
fillEdgeTaxi();


//----------------------------------------------------

class state{
    constructor(money,helth,time, lastState , lastVehicle,station){
        this.money = money;
        this.helth = helth;
        this.time = time;
        this.lastState = lastState;
        this.lastVehicle = lastVehicle;
        this.station = station;
    }

    getPossibleState()
    {
        var busArray = [] ;
        for (let x = 0; x < bus[this.station].length; x++) {

            if(bus[this.station][x] != null ){
                // bus[this.station][x].to=x;
                console.log(111,bus[this.station][x]);
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
console.log( edge);
        var m =this.money -400;
        var h= this.helth-(5*edge.dist)
        var t = (this.time + (edge.dist/edge.v)*60);
        var lastS= this;
        var lastVehicle= 1;
        // var lastVehicle= this.vehicle;
        var station = edge.to;
        // var vehicle =1



        return new state(m,h,t,lastS,lastVehicle,station)
    }
    goTaxi(edge)
    {
    
        var m =this.money -(1000*edge.dist);
        var h= this.helth+(5*edge.dist)
        var t = (this.time + (edge.dist/edge.v)*60);
        var lastS= this;
        var lastVehicle= 2;
        // var lastVehicle= this.vehicle;
        var station = edge.to;
        // var vehicle =1

        return new state(m,h,t,lastS,lastVehicle,station)
    }
    goWalk(edge)
    {
    // console.log(edge);
        var m =this.money ;
        var h= this.helth-(10*edge.dist)

        var t = (this.time + (edge.dist/5.5)*60);
        var lastS= this;
        var lastVehicle= 0;
        // var lastVehicle= this.vehicle;
        var station = edge.to;
        // var vehicle =1



        return new state(m,h,t,lastS,lastVehicle,station)
    }

    // UCS() {
    //   var structureArray = _.cloneDeep(structureArrayy);
    //   var isVi = 0
    
    //   var hashedArray ;hashedArray = hashArray(structureArray.element.array);
    //   for (let i = 0; i < visited.length; i++) {
    //     if (hashedArray==visited[i]) {
    //       isVi++;
    //       break;
    //     }    
    //   }
    //   if (isVi == 0) {
    //     visited.push(hashedArray)
    //   }
    
    //   // if (isEqualArray(structureArray.element.array, ttWin) == 0) {
    //     if (hashedTTWin==hashedArray) {
    //     var path = [...structureArray.element.perant, structureArray.element.array,]
    //     console.log(path, 'path is');
    //     console.log(path.length, 'path');
    //     console.log(visited.length, 'visitied');
    //     console.log(visited, 'visitied node ');
    //     console.log(structureArray.element.cost, 'cost');
    //     console.log('win');
    //     return true
    //   }
    
    //   var sons = get_next_state(structureArray.element);
    //   for (let i = 0; i < sons[0].length; i++) {
    //     sons[0][i].perant = (structureArray.element.perant?.length > 0 ? [...structureArray.element.perant, structureArray.element.array] : [structureArray.element.array])
    //     sons[0][i].cost = structureArray.element.cost + 1;
    
    //   var hashedSon;hashedSon = hashArray(sons[0][i].array);
    //   for (let i = 0; i < visited.length; i++) {
    //       var c = 0
    //     if ( hashedSon==visited[i]) {
    //           c++;
    //           break;
    //     }    
    //   }
    
    //     if (c == 0) {
    //       pQueue.enqueue(sons[0][i], sons[0][i].cost)
    //     }
    
    //   }
    
    //   if (!pQueue.isEmpty()) {
    //     UCS(pQueue.dequeue());
    //   }
    
    // }

}      

var state0 =new state(2000,100,0,null,null,0);
// state0.UCS()



            
var vertix = ['همك','مينا','عباسسين','كراج','جسر','شارع الثورة','حامييش','بيت']
 var state0 =new state(2000,100,0,null,null,0);
// console.log(state0);

 var next0 = state0.getPossibleState()
 console.log(next0);

// var state1 = state0.goBus(next0[0][0])
// console.log(state1);

// var next1= state1.getPossibleState();

// var state2 = state1.goBus(next1[0][1]);
// // console.log(state2);

// var next2= state2.getPossibleState();

// var state3= state2.goBus(next2[0][1])
// // console.log(state3);

// var next3  = state3.getPossibleState();

// var state4  = state3.goWalk(next3[2][0])

// while(state4.lastState!=null){

//     console.log(state4.lastState);
//     state4=state4.lastState;
// }
// console.log(next3);
