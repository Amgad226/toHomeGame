var busName=['دويلعة كراجات' ,'باص احمر', 'مزة جبل', 'دوار شمالي', 'برزة',''];

function fillEdgeWalk() {
    EdgeWalk(0,1,4);
    EdgeWalk(0,2,6);
    EdgeWalk(0,3,8);
    EdgeWalk(0,4,10);
    EdgeWalk(0,5,11);
    EdgeWalk(0,6,12);
    EdgeWalk(0,7,14);
   
    EdgeWalk(1,2,2);
    EdgeWalk(1,3,4);
    EdgeWalk(1,6,8);
    EdgeWalk(1,7,10);
   
    EdgeWalk(2,3,2);
    EdgeWalk(2,6,6);
    EdgeWalk(2,7,8);
   
    EdgeWalk(3,6,4);
    EdgeWalk(3,6,6);
   
    EdgeWalk(4,3,13);
    EdgeWalk(4,5,1);
    EdgeWalk(4,6,10);
    EdgeWalk(4,7,12);
   
    EdgeWalk(5,3,12);
    EdgeWalk(5,6,6);
    EdgeWalk(5,7,8);
    EdgeWalk(6,7,2);
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
    EdgeBus(3,6  , 4,5,50,busName[3]);
    //4   
    EdgeBus(4,3  , 13,20,50,busName[1]);
    EdgeBus(4,5  , 1,10,30,busName[1]);
    //5   
    EdgeBus(5,3  , 5,10,60, busName[2]);
    EdgeBus(5,6  , 6,7,50,busName[4]);
}


function fillEdgeTaxi(){
    EdgeTaxi(0,1,4,12,100);
    EdgeTaxi(0,2,6,12,100);
    EdgeTaxi(0,3,7,12,100);
    EdgeTaxi(0,4,8,4,120);
    EdgeTaxi(0,5,9,4,120);
    EdgeTaxi(0,6,13,4,120);

    EdgeTaxi(1,2,2,12,100);
    EdgeTaxi(1,3,3,12,100);
    EdgeTaxi(1,6,7,4,120);

    EdgeTaxi(2,3,2,12,120);
    EdgeTaxi(2,5,12,4,120);
    EdgeTaxi(2,6,6,4,120);

    EdgeTaxi(3,6,6,4,120);

    EdgeTaxi(4,3,13,5,80);
    EdgeTaxi(4,5,1,4,70);
    EdgeTaxi(4,6,8,4,120);

    EdgeTaxi(5,3,12,5,80);
    EdgeTaxi(5,6,7,4,90);


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
