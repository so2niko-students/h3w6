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
    let nameA = a.trainDestination.toUpperCase(); // ignore upper and lowercase
    let nameB = b.trainDestination.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
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
  sortTrainByNumber() {
    return this.trains.sort(this.compareNumbers(a, b));
  }
  sortTrainByDestinationTime() {
    return this.trains.sort(this.compareDestination(a, b));
  }


}

let trainsArr = new RailwayStation([
  new Train("Berlin", "1000", "12:05"),
  new Train("Hamburg", "1234", "14:15"),
  new Train("Amsterdam", "420", "04:20"),
  new Train("Paris", "10300", "02:05"),
  new Train("Rome", "4000", "01:05"),
]);

console.log(trainsArr);
trainsArr.addTrain(new Train("Kiev", "1433", "14:33"));
console.log(trainsArr);
console.log(trainsArr.showTrainInfo(1433));
console.log(trainsArr.showTrainInfo(14333));
trainsArr.sortTrainByNumber();
console.log(trainsArr.trains[5]);
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
