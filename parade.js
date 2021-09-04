const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


function finalPosition(moves) {
  let yAxis = 0;
  let xAxis = 0;
  let position = [];
  for (const move of moves) {
    (move == 'north') ? yAxis++ : ((move == 'south') ? yAxis-- : yAxis);
    (move == 'east') ? xAxis++ : ((move == 'west') ? xAxis-- : xAxis);
  }
  position.push(xAxis);
  position.push(yAxis);
  return position;
}

//const position = finalPosition(moves);
console.log(finalPosition(moves));
