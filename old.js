var bus =
[
    [0, new edge(4,15,50,busName[0]),new edge(6,15,50,busName[0]),new edge(8,15,50,busName[0]),new edge(10,25,40,busName[1]),0,0,0],
    [0,0,new edge(2,10,50,busName[0]),new edge(3,10,50,busName[0]),0,0,0,0],
    [0,0,0,new edge(2,5,50,busName[0]),0,0,0,0 ],
    [0,0,0,0,0,new edge(5,10,60, busName[2]) ,new edge(4,5,50,busName[3]) ,0],
    [0,0,0,new edge(13,20,50,busName[1]) , 0,new edge(1,10,30,busName[1])  ,0,0],
    [0,0,0, new edge(5,10,60, busName[2]) ,0,0, new edge(6,7,50,busName[4]) , 0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0]
];


var taxi = [
    [0,new edge(4,12,100) ,new edge(6,12,100) ,new edge(7,12,100) ,new edge(8,4,120)  ,new edge(9,4,120), new edge(13,4,120),0 ],
    [0,0 ,new edge(2,12,100),new edge(3,12,100) ,0  ,0, new edge(7,4,120),0 ],
    [0,0 ,0,new edge(2,12,100) ,0  , new edge(12,4,120), new edge(6,4,120),0 ],
    [0,0 ,0,0 ,0  , 0, new edge(6,4,120),0 ],
    [0,0 ,0,new edge(13,5,80) , 0,new edge(1,4,70), new edge(8,4,120),0 ],
    [0,0 ,0,new edge (12,5,80) ,0  , 0, new edge(7,4,90),0 ],
    [0,0 ,0,0 ,0  , 0, 0,0 ],
    [0,0 ,0,0 ,0  , 0, 0,0 ],
];



// test user play 

var state0 =new state(2000,100,0,null,null,0,0);

// console.log(state0);

var next0 = state0.getPossibleEdges()
//  console.log(next0);

var state1 = state0.goBus(next0[0][0])
// console.log(state1);

var next1= state1.getPossibleEdges();

var state2 = state1.goBus(next1[0][1]);
// console.log(state2);

// var next2= state2.getPossibleEdges();

// var state3= state2.goBus(next2[0][1])
// // console.log(state3);

// var next3  = state3.getPossibleEdges();

// var state4  = state3.goWalk(next3[2][0])

// while(state4.parents!=null){

//     console.log(state4.parents);
//     state4=state4.parents;
// }
// console.log(next3);


