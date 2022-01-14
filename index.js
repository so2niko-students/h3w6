// ----------Task 1----------------
const cities = ['Dnipro', 'Kyiv', 'Rovno', 'Lviv', 'Odessa', 'Poltava'];
const trains = [];
const n = 5;

class Train {
  constructor(destinationName, trainNumber, departureTime) {
    this.destinationName = destinationName;
    this.trainNumber = trainNumber;
    this.departureTime = departureTime;
  }
}

for (let i = 0; i < n; i++) {
  let city = Math.floor(n * Math.random());
  let number = Math.floor(100 + 900 * Math.random());
  let month = Math.floor(1 + 12 * Math.random());
  let day = Math.floor(1 + 30 * Math.random());
  let train = new Train(cities[city], number, new Date(2021, month, day));
  trains.push(train);
}
console.log('trains = ', trains);

class RailwayStation {
  constructor(trains) {
    this.trains = trains;
  }

  addTrain(args) {
    if (!args.length) {
      this.trains.push(arguments[0]);
    } else { this.trains = [...this.trains, ...args] }
    console.log('added trains = ', this.trains);

    return this.trains;
  }

  sortByNumbers() {
    this.trains.sort((a, b) => (a.trainNumber - b.trainNumber))
  }

  getTrainInfoByNumber() {

  }

  sortTrainByDestinationName() {

  }
}

let railWayStation = new RailwayStation(trains);

railWayStation.sortByNumbers();
railWayStation.addTrain([new Train('Berlin', 333, new Date(2022, 1, 1)),
                         new Train('Tokio', 777, new Date(2022, 1, 7))]);
railWayStation.addTrain(new Train('Berlin', 333, new Date(2022, 1, 1)));
// railWayStation.addTrain(
//   new Train('Berlin', 333, new Date(2022, 1, 1)),
//   new Train('Tokio', 777, new Date(2022, 1, 7)),
//   new Train('London', 111, new Date(2022, 12, 7))
// );
