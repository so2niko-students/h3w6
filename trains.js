class Train {
  constructor(destination, number, departureTime) {
    this.destination = destination;
    this.number = number;
    this.departureTime = departureTime;
  }
}

const trainA = new Train();
const trainB = new Train();
const trainC = new Train();
const trainD = new Train();
const trainE = new Train();

const trains = [trainA, trainB, trainC, trainD, trainE];

class RailwayStation {
  constructor(trains) {
    this.trains = trains;
  }

  addTrain(newTrain) {
    return this.trains.push(newTrain);
  }
  sortTrainsByNumber() {
    return this.trains.sort(
      (a, (b) => parseFloat(a.number) - parseFloat(b.number))
    );
  }
  getTrain(n) {
    const index = this.trains.indexOf(n);
    if (index === -1) {
      return;
    } else {
      return this.trains[index];
    }
  }
  sortTrainsByDestination() {
    this.trains.sort((firstTrain, secondTrain) => {
      firstTrain.destination.localeCompare(secondTrain.destination);
      if (firstTrain.destination === secondTrain.destination)
        firstTrain.departureTime.localeCompare(secondTrain.departureTime);
    });
  }
}

const railwayStation = new RailwayStation();

railwayStation.getTrain();
railwayStation.addTrain();
railwayStation.sortTrainsByNumber();
