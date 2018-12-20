function dwarfRollCall(dwarves) {
  var str = "";
  for(var i=0; i<dwarves.length; i++){
    
  str += (i+1).toString() + ". " + dwarves[i] + " ";
   
  }
  return str;
}

function summonCaptainPlanet(planeteerCalls){
   var arr=[];
  for(var i=0; i<planeteerCalls.length; i++){
   var string = `${planeteerCalls[i]}!`;
    arr.push(string.toUpperCase());
  }
  return arr;
}

function longPlaneteerCalls(words) {
  if(words.length>4){
    return true;
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for(var i=0;i<foods.length;i++){
    for(var j=0; j<cheese.length; j++){
      if(foods[i]===cheese[j]){
      return foods[i];
    }
   }
  }
   return `no cheese!`;
}
