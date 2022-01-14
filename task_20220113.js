//TASK1
class Train {
  constructor(trainDestination, trainNumber, trainDeparture) {
    this.trainDestination = trainDestination;
    this.trainNumber = trainNumber;
    this.trainDeparture = trainDeparture;
  }
  trainInfo() {
    return `Train to: ${this.trainDestination}, Number: ${this.trainNumber}, Departure: ${this.trainDeparture} AM.`;
  }
  static compareNumbers(a, b) {
    return a.trainNumber - b.trainNumber;
  }
  static compareDestination(a, b) {
    let destA = a.trainDestination.toUpperCase();
    let destB = b.trainDestination.toUpperCase();
    if (destA < destB) {
      return -1;
    }
    if (destA > destB) {
      return 1;
    }
    return 0;
  }
}
class RailwayStation {
  trains = [];
  constructor(trains) {
    this.trains = trains;
  }
  addTrain(newTrain) {
    this.trains = this.trains.concat(newTrain);
  }
  showTrainInfo(number) {
    const res = this.trains.find((train) => train.trainNumber == number);
    return res ? res.trainInfo() : `No such number, please enter another.`;
  }
  showTrainSchedule() {
    this.trains.forEach((e) => {
      console.log(
        `TO: ${e.trainDestination} # ${e.trainNumber} TIME: ${e.trainDeparture}`
      );
    });
  }
  sortTrainByNumber() {
    return this.trains.sort((a, b) => {
      return a.trainNumber - b.trainNumber;
    });
  }
  //   sortTrainByTime() {
  //     return this.trains.sort((a, b) => {
  //       return a.trainDeparture - b.trainDeparture;
  //     });
  //   }
  sortTrainByTime(a, b) {
    if (a.trainDeparture === b.trainDeparture) {
      return 0;
    }
    if (a.trainDeparture < b.trainDeparture) {
      return -1;
    }
    if (a.trainDeparture > b.trainDeparture) {
      return 1;
    }
  }
  sortTrainByDestinationTime() {
    return this.trains.sort((a, b) => {
      let destA = a.trainDestination.toLowerCase(),
        destB = b.trainDestination.toLowerCase();
      if (destA === destB) {
        return this.sortTrainByTime(a, b);
      }
      if (destA < destB) {
        return -1;
      }
      if (destA > destB) {
        return 1;
      }
      return 0;
    });
  }
}

let trainsArr = new RailwayStation([
  new Train("Berlin", "1000", new Date("1995-12-17T10:00:00")),
  new Train("Hamburg", "1234", new Date("1995-12-17T12:34:00")),
  new Train("Amsterdam", "420", new Date("1995-12-17T04:20:00")),
  new Train("Paris", "10300", new Date("1995-12-17T10:30:00")),
  new Train("Rome", "4300", new Date("1995-12-17T04:30:00")),
]);
console.log(trainsArr);
trainsArr.addTrain([
  new Train("Kiev", "1433", new Date("1995-12-17T14:33:00")),
  new Train("Amsterdam", "428", new Date("1995-12-17T03:20:00")),
]);
console.log(trainsArr);
trainsArr.showTrainSchedule();
console.log(trainsArr.showTrainInfo(1433));
console.log(trainsArr.showTrainInfo(14333));
trainsArr.sortTrainByDestinationTime();
trainsArr.showTrainSchedule();
// console.log(trainsArr.showTrainsArr());

//TASK2
class Book {
  constructor(bookTitle, bookAuthor, bookYear) {
    this.bookTitle = bookTitle;
    this.bookAuthor = bookAuthor;
    this.bookYear = bookYear;
  }
  getTitle() {
    return this.bookTitle;
  }
  getAuthor() {
    return this.bookAuthor;
  }
  getYear() {
    return +this.bookYear;
  }
}
book1 = new Book("1st", "first", 1111);
book2 = new Book("2nd", "second", 2222);
book3 = new Book("3rd", "third", 3333);
//console.log(book1.getAuthor());

class HomeLibrary {}
