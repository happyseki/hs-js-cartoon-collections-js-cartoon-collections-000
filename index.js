var dwarves=["Doc", "Dopey", "Bashful", "Grumpy"];
function dwarfRollCall(dwarves) {
  var arr=[];
  for(var i=0; i<dwarves.length; i++){
    var string = `${i+1}. ${dwarves[i]} `;
    arr.push(string);
  }
  return arr.join('');
}

var planeteerCalls = ["earth", "wind", "fire", "water", "heart"];
function summonCaptainPlanet(planeteerCalls){
   var arr=[];
  for(var i=0; i<planeteerCalls.length; i++){
   var string = `${planeteerCalls[i]}!`;
    arr.push(string.toUpperCase());
  }
  return arr;
}

function longPlaneteerCalls(words) {
  if(words.length>3){
    return true;
  }
  return false;
}

function findTheCheese (foods) {
  var cheese = ['cheddar', 'gouda', 'camembert'];
  for(var i=0;i<cheese.length;i++){
    for(var j=0; j<foods.length; j++){
      if(cheese[i]===foods[j]){
      return cheese[i];
    }
   }
  }
   return `no cheese!`;
}
