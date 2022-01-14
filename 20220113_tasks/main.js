// ========================================================================
// Task 1 Train Class
// ========================================================================
class Train {
  constructor(destination, trainNumber, departure) {
    this.destination = destination;
    this.trainNumber = trainNumber;
    this.departure = departure;
  }
}

class RailwayStation {
  constructor(){
    this.trains = [];
  }

  addTrain(...newTrains){
    [...newTrains].forEach(train => this.trains.push(train));
  }

  findTrain(num){
    let trainIndex = this.trains.findIndex(train => train.trainNumber === num);
    return trainIndex === -1 ? 'Train not found' : `Train information: Destination City: ${this.trains[trainIndex].destination}; Train number: ${this.trains[trainIndex].trainNumber}; Departure time: ${this.trains[trainIndex].departure}`;
  }

  sortTrainsByNumber() {
    return this.trains.sort((a, b) => a.trainNumber - b.trainNumber);
  }
  sortTrainsByDestination() {
    return this.trains.sort((a, b) => a.destination === b.destination ? a.departure.split(':').join('') - b.departure.split(':').join('') : a.destination.localeCompare(b.destination));
  }
}

const myStation = new RailwayStation();
const trainToLviv = new Train('Lviv', 101, '17:50');
const trainToDnipro = new Train('Dnipro', 405, '10:00');
const trainToKharkiv = new Train('Kharkiv', 302, '09:10');
const trainToKyiv = new Train('Kyiv', 250, '09:30');
const trainToKherson = new Train('Kherson', 155, '11:15');
const trainToKherson2 = new Train('Kherson', 156, '11:30');
myStation.addTrain(trainToLviv, trainToDnipro, trainToKharkiv, trainToKyiv, trainToKherson, trainToKherson2);

// console.log(myStation.sortTrainsByDestination());
// console.log(myStation.findTrain(250));

// ========================================================================
// Task 2 Books Library
// ========================================================================

class Book {
  constructor(title, author, issueDate){
    this.title = title;
    this.author = author;
    this.issueDate = issueDate;
  }
}

class HomeLibrary {
  constructor(){
    this.library = [];
  }

  addBook(...books) {
    [...books].forEach(book => this.library.push(book));
  }
  findBook(title){
    let bookIndex = this.library.findIndex(book => book.title === title);
    return bookIndex === -1 ? 'Sry Book not found' : `Book information: Title: ${this.library[bookIndex].title}; Author: ${this.library[bookIndex].author}; Issue date: ${this.library[bookIndex].issueDate}`;
  }

  sortBookByTitle(criterio){
    if (criterio !== 'issueDate'){
      return this.library.sort((a, b) => a[criterio] > b[criterio]);
    }
    return this.library.sort((a, b) => a[criterio] - b[criterio]);
  }

  removeBook(bookName){
    this.library = this.library.filter(book => book.name !== bookName);
  }
}

const myHomeLibrary = new HomeLibrary();

const deadline2 = new Book('Deadline2', 'Bla Bla2', 2019);
const deadline = new Book('Deadline', 'Bla Bla', 2015);
const deadline4 = new Book('Deadline4', 'Bla Bla4', 2011);
const deadline3 = new Book('Deadline3', 'Bla Bla3', 2020);

myHomeLibrary.addBook(deadline, deadline2, deadline3, deadline4);
// console.log(myHomeLibrary.sortBookByTitle('issueDate'));