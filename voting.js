const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

//chooseStations(stations);

//station: >= 20
//school || community

const chooseStations = function (stations) {
  let count = 0;
  let votingStation = [];
  for (const station of stations) {
    //console.log(count + ': ' + station[0]);
    for (var i = 0; i < station.length; i++) {
      const isStation = (station[1] >= 20) ? (((station[2] == 'school') || (station[2] == 'community centre')) ? true : false) : false;
      if (isStation) {
        //console.log(isStation);
        votingStation.push(station[0])
        break;
      }
    }
    count++;
  }
  return votingStation;
}

console.log(chooseStations(stations));
//console.log(votingStation);