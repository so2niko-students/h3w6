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
    return a.trainDeparture - b.trainDeparture;
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
// let trainsArr = new RailwayStation([
//   new Train("Berlin", "1000", new Date("1995-12-17T10:00:00")),
//   new Train("Hamburg", "1234", new Date("1995-12-17T12:34:00")),
//   new Train("Amsterdam", "420", new Date("1995-12-17T04:20:00")),
//   new Train("Paris", "12300", new Date("1995-12-17T12:30:00")),
//   new Train("Rome", "4300", new Date("1995-12-17T04:30:00")),
// ]);
// console.log(trainsArr);
// trainsArr.addTrain([
//   new Train("Kiev", "1433", new Date("1995-12-17T14:33:00")),
//   new Train("Paris", "1130", new Date("1995-12-17T11:30:00")),
//   new Train("Amsterdam", "428", new Date("1995-12-17T03:20:00")),
// ]);
// console.log(trainsArr);
// trainsArr.showTrainSchedule();
// console.log(trainsArr.showTrainInfo("1433"));
// console.log(trainsArr.showTrainInfo(14333));
// trainsArr.sortTrainByDestinationTime();
// trainsArr.showTrainSchedule();

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
  bookInfo() {
    return `${this.getTitle()}, Author: ${this.getAuthor()}, Year: ${this.getYear()}`;
  }
}
//book1 = new Book("Software requiremenets", "Karl Wiegers", 2013);
//console.log(book1.getAuthor());
//console.log(book1.bookInfo());
class HomeLibrary {
  library = [];
  constructor(library) {
    this.library = library;
  }
  addBook(newBook) {
    this.library = this.library.concat(newBook);
  }
  deleteBook(trashBook) {
    // this.library = this.library.filter(val => val.bookTitle == trashBook);
    const res = this.library.find((book) => book.bookTitle == trashBook);
    console.log(res);
    const i = this.library.indexOf(res);
    if (i >= 0) {
     return this.books.splice(i, 1);
    }
  }
  showByYear(year) {
    const res = this.library.find((book) => book.bookYear == year);
    return res
      ? res.bookInfo()
      : `No books for this year, please enter another.`;
  }
  showByAuthor(author) {
    const res = this.library.find((book) => book.bookAuthor == author);
    return res
      ? res.bookInfo()
      : `No books written by this author, please enter another.`;
  }
  showLibrary() {
    this.library.forEach((e) => {
      console.log(
        `${e.bookTitle} written by : ${e.bookAuthor} Year: ${e.bookYear}`
      );
    });
  }
  sortByYear() {
    return this.library.sort((a, b) => {
      return a.bookYear - b.bookYear;
    });
  }
  sortByAuthor() {
    return this.library.sort((a, b) => {
      let authA = a.bookAuthor.toLowerCase(),
        authB = b.bookAuthor.toLowerCase();
      if (authA < authB) {
        return -1;
      }
      if (authA > authB) {
        return 1;
      }
      return 0;
    });
  }
}
let libraryArr = new HomeLibrary([
  new Book("Software requiremenets", "Karl Wiegers", "2013"),
  new Book("You Don't Know JS Yet", "Kyle Simpson", "2020"),
  new Book("HOW TO TALK TO ANYONE, ANYTIME, ANYWHERE", "Larry King", "1995"),
]);

libraryArr.addBook(new Book("You Know JS ", "Kyle Simpson", "2022"));
libraryArr.showLibrary();
console.log(
  "======================================================================================"
);
libraryArr.deleteBook("You Know JS");
libraryArr.showLibrary();
// console.log(libraryArr.showByYear(1995));
// console.log(libraryArr.showByYear(2000));
// console.log(
//     "======================================================================================"
//   );
//   console.log(libraryArr.showByAuthor("Kyle Simpson"));
// console.log(
//     "======================================================================================"
//   );
// libraryArr.sortByYear();
// console.log(
//   "======================================================================================"
// );
// libraryArr.showLibrary();
// console.log(
//   "======================================================================================"
// );
// libraryArr.sortByAuthor();
// console.log(
//   "======================================================================================"
// );
// libraryArr.showLibrary();
