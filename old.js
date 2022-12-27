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