var vertix = ['همك','مينا','عباسسين','كراج','جسر','شارع الثورة','حامييش','بيت']
var Transportation= ['مشي','مكرو','تكسي' ]


var state0 =new state(2000,100,0,null,null,0,0);

  // var state7 = new state(0,0,0,null,null,7,0)
  function a (state){
    var  sons= [
      ...state.getPossibleStatesByTaxi(),
      ...state.getPossibleStatesByBus(),
      ...state.getPossibleStatesByWalk()
    ]
    console.log(sons);
  }
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

function heuristicTime(state){
  console.log('---------@start heuristicTime@----------- \n \n   ');
  var number =0 ;
  // var temp=state;
  var station= state.station
  console.log(station);
  var temp = state
    while(state!=null||station!=  7) {
      // while(station!=  7) {
    
    console.log('while');
 
    console.log(temp,'first temp');
    var sons= [...temp.getPossibleStatesByTaxi(),...temp.getPossibleStatesByBus(),...temp.getPossibleStatesByWalk()]//all steps

 
    console.log(sons);
    if(sons[0]==null)
     {
      number =temp.time 
      break;
     }
    temp=sons[0]; 
     
     console.log('sons',sons);
  
    
    console.log('start for');
      for (let i = 0; i < sons.length; i++) {
        console.log(temp.time,'temp');
        console.log(sons[0].time,'soms[0]');
        console.log(temp,'temp');
        console.log(sons[0],'soms[0]');
        console.log('for loop');
        if(temp.time>sons[i].time)  {
          console.log('goal');
          temp=sons[i];
        }
      }
    console.log('end for');

  number=temp.time
  console.log('end while');
  }  
  console.log(' \n \n    ',number,' @@@@@ End heuristicTime @@@@@');
  return number ;
}
function heuristicHealth(state){
  console.log('---------@start heuristicTime@----------- \n \n   ');
  var number =0 ;
  // var temp=state;
  var station= state.station
  console.log(station);
  var temp = state
    while(state!=null||station!=  7) {
      // while(station!=  7) {
        
    console.log('while');
     
    console.log(temp,'first temp');
    var sons= [...temp.getPossibleStatesByTaxi(),...temp.getPossibleStatesByBus(),...temp.getPossibleStatesByWalk()]//all steps

 
    console.log(sons);
    if(sons[0]==null)
     {
      number =temp.health 
      break;
     }
    temp=sons[0]; 
     
     console.log('sons',sons);
  
    
    console.log('start for');
      for (let i = 0; i < sons.length; i++) {
        console.log(temp.time,'temp');
        console.log(sons[0].time,'soms[0]');
        console.log(temp,'temp');
        console.log(sons[0],'soms[0]');
        console.log('for loop');
        if(temp.health<sons[i].health)  {
          console.log('goal');
          temp=sons[i];
        }
      }
    console.log('end for');

  number=temp.health
  console.log('end while');
  }  
  console.log(' \n \n    ',number,' @@@@@ End heuristicTime @@@@@');
  return number ;
}
function heuristicMoney(state){
  console.log('---------@start heuristic MONEY@----------- \n \n   ');
  var number =0 ;
  // var temp=state;
  var station= state.station
  console.log(station);
  var temp = state
    while(state!=null||station!=  7) {
      // while(station!=  7) {
        
    console.log('while');
     
    console.log(temp,'first temp');
    var sons= [...temp.getPossibleStatesByTaxi(),...temp.getPossibleStatesByBus(),...temp.getPossibleStatesByWalk()]//all steps

 
    console.log(sons);
    if(sons[0]==null)
     {
      number =temp.money 
      // console.log(temp , ' temp is is isisisisisi');
      // console.log(number , ' number is is isisisisisi');
      break;
     }
    temp=sons[0]; 
     
    //  console.log('sons',sons);  
    // console.log('start for');
      for (let i = 0; i < sons.length; i++) {
        // console.log(temp.time,'temp');
        // console.log(sons[0].time,'soms[0]');
        // console.log(temp,'temp');
        // console.log(sons[0],'soms[0]');
        // console.log('for loop');
        if(temp.money<sons[i].money)  {
          // console.log('goal');
          temp=sons[i];
        }
      }
    // console.log('end for');

  number+=temp.money
  // console.log('end while');
  }  
  // console.log(' \n \n    ',number,' @@@@@ End heuristic MONEY @@@@@');
  return number ;
}
function heuristicThree(state){
  console.log('---------@start heuristic THREE@----------- \n \n   ');
  var number =0 ;
  // var temp=state;
  var station= state.station
  console.log(station);
  var temp = state
    while(state!=null||station!=  7) {
      // while(station!=  7) {
    
    // console.log('while');
 
    // console.log(temp,'first temp');
    var sons= [...temp.getPossibleStatesByTaxi(),...temp.getPossibleStatesByBus(),...temp.getPossibleStatesByWalk()]//all steps

 
    console.log(sons);
    if(sons[0]==null)
     {
      number =temp.time+temp.money+temp.health 
      break;
     }
    temp=sons[0]; 
     
    //  console.log('sons',sons);
  
    
    // console.log('start for');
      for (let i = 0; i < sons.length; i++) {
        // console.log(temp.time,'temp');
        // console.log(sons[0].time,'soms[0]');
        // console.log(temp,'temp');
        // console.log(sons[0],'soms[0]');
        // console.log('for loop');
        if(temp.health<sons[i].health &&temp.money<sons[i].money&& temp.time>   sons[i].time  )  {
          alert()
          console.log('goal');
          temp=sons[i];
        }
      }
    // console.log('end for');

  number=temp.time+temp.money+temp.health
  // console.log('end while');
  }  
  console.log(' \n \n    ',number,' @@@@@ End heuristic THREE @@@@@');
  return number ;
}
function checkStop(state,heuristicName){
  // alert(heuristicName)
  if (state.element.checkWin()) {

    if(heuristicName=='time'){

      // alert()
      winArray.enqueue(state.element,state.element.time)
    }
    else if(heuristicName=='money'){
// alert()

      winArray.enqueue(state.element,state.element.money)
    }
    else if(heuristicName=='health')
    winArray.enqueue(state.element, state.element.health)
    else if (heuristicName== 'three')
    winArray.enqueue(state.element,  state.element.money+state.element.health)
   
    console.log('\n-----------------------------win---------------------------------\n \n');
      console.log(visited.length, 'visitied');
      console.log(state.element.cost, 'cost');
      console.log('\n my state is :',[...myState.parents,myState],'\n');

    console.log('\n-----------------------------win---------------------------------\n \n');
    return true
  }
  
  if(state.element.money<400){
  console.log('\n++++++++++++++++++++++++++++++++money++++++++++++++++++++++++++++++++\n \n');
      console.log('end money',state.element.money );
      console.log(visited.length, 'visitied');
      console.log(state.element.cost, 'cost');
      console.log('\n my state is :',[...myState.parents,myState],'\n');
  console.log('\n++++++++++++++++++++++++++++++++money++++++++++++++++++++++++++++++++\n \n');
      return true
  }
  if(state.element.health<=0){
  console.log('\n********************************health********************************\n \n');
      console.log('end health :', state.element.health );
      console.log(visited.length, 'visitied');
      console.log(state.element.cost, 'cost');
      // console.log('\n my state is :',state,'\n');
      console.log('\n my state is :',[...myState.parents,myState],'\n');

  console.log('\n********************************health********************************\n \n');
  // break;
    return true
  }
}
var winArray= new PriorityQueue()
function aStar(state , heuristicName) {
// alert(heuristicName)
  console.log('******************************************start aStar*****************************************************');

  myState= state.element
  var hashedArray = state.element.hashState();
  
  if(! chackInVisited(hashedArray)){
    visited.push(hashedArray)
  }


  if(checkStop(state,heuristicName)){
    // return true
    // console.log('');

  }

  
  var sons= [
    ...state.element.getPossibleStatesByTaxi(),
    ...state.element.getPossibleStatesByBus(),
    ...state.element.getPossibleStatesByWalk()
  ]
  // console.log(sons,'merage sons');
  
  for (let i = 0; i < sons.length; i++) {
        sons[i].parents = (
                            state.element.parents?.length > 0 
                            ? [...state.element.parents, state.element] 
                            : [state.element]
                          )
        sons[i].cost = state.element.cost + 1;

        if(heuristicName=='time')
        sons[i].h =heuristicTime(sons[i]);
        else if(heuristicName=='money')
        sons[i].h =heuristicMoney(sons[i]);
        else if(heuristicName=='health')
        sons[i].h =heuristicHealth(sons[i]);
        else if (heuristicName=='three')
        sons[i].h =heuristicThree(sons[i]);

        // console.log(sons[i].h ,'hhhhhhhhhhhhhhhhhhhhhh');


        var hashedSon = sons[i].hashState();
        if(! chackInVisited(hashedSon)){
          pQueue.enqueueStar(sons[i],  sons[i].cost + sons[i].h     ,sons[i].h)
        }
  }

  if (!pQueue.isEmpty()) {
    aStar(pQueue.dequeue(),heuristicName);
  }
  else {
    // alert()
    console.log('\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n');
    console.log('----------------------------------------------******----------------------------------------------');
    
    console.log(winArray);

    if(heuristicName=='time'){
      console.log(winArray.front());
      console.log([...winArray.front().element.parents,winArray.front().element]);
      console.log('time: ',winArray.front().element.time);
      console.log('money: ',winArray.front().element.money);
      console.log('health: ',winArray.front().element.health);
    }

   
    else if(heuristicName=='health'){
    console.log(winArray.rear());
    console.log([...winArray.rear().element.parents,winArray.rear().element]);
    console.log('time: ',winArray.rear().element.time);
    console.log('money: ',winArray.rear().element.money);
    console.log('health: ',winArray.rear().element.health);
  }
  else if(heuristicName=='money')
  {
    console.log(winArray.rear());
    console.log([...winArray.rear().element.parents,winArray.rear().element]);
    console.log('time: ',winArray.rear().element.time);
    console.log('money: ',winArray.rear().element.money);
    console.log('health: ',winArray.rear().element.health);
  }
    else if (heuristicName=='three'){
    console.log('هبد');
    console.log(winArray.rear());
    console.log([...winArray.rear().element.parents,winArray.rear().element]);
    console.log('time: ',winArray.rear().element.time);
    console.log('money: ',winArray.rear().element.money);
    console.log('health: ',winArray.rear().element.health);
  }
  console.log('----------------------------------------------******----------------------------------------------');

  console.log('\n\n\n\n\n\n\n\n\n\n');
    }

}

