function dwarfRollCall(dwarves) {
  var str = "";
  for(var i=0; i<dwarves.length-2; i++){
  str += (i+1).toString() + ". " + dwarves[i] + " " ;
  }
  return str;
}

function summonCaptainPlanet(planeteerCalls){
   var arr=[];
  for(var i=0; i<planeteerCalls.length; i++){
  arr.push(planeteerCalls[i].toUpperCase() + "!" );
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
  cheese.push("name");
  apple, cheddar, banana
  for(var i=0;i<foods.length;i++){
    for(var j=0; j<cheese.length; j++){
      if(foods[i]===cheese[j]){
      return foods[i];
    }
   }
  }
   return `no cheese!`;
}
function wordsWithB(words){
  var arr=[];
for(var i=0; i<words.length; i++){
  if(words[i][0]==="b"){
    arr.push(words[i]);

  }

}
return arr;
}