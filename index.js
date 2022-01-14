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

  getTrainByNumber(number) {
    return this.trains.find(train => train.trainNumber === number);
  }

  sortByDestinationName() {
    this.trains.sort((a, b) => {
      if(a.destinationName > b.destinationName) { return 1 }
        else if (a.destinationName < b.destinationName) {return -1}
          else if (a.destinationName === b.destinationName && a.departureTime > b.departureTime)
            {return 1} else {return -1}
    })
  }

  showTrains() {
    console.log('trains = ', this.trains);
  }
}

let railWayStation = new RailwayStation(trains);

railWayStation.sortByNumbers();
railWayStation.addTrain([new Train('Berlin', 333, new Date(2022, 1, 1, 15, 30)),
                         new Train('Tokio', 777, new Date(2022, 1, 7, 9, 20))]);
railWayStation.addTrain(new Train('Berlin', 334, new Date(2022, 1, 1, 7, 40)));
railWayStation.addTrain([new Train('Berlin', 335, new Date(2021, 11, 12, 40)),
  new Train('Tokio', 770, new Date(2022, 1, 6, 11, 10))]);
console.log(railWayStation.getTrainByNumber(777));
railWayStation.sortByDestinationName();
railWayStation.showTrains();

// ----------Task 2----------------
const books = [];
class Book {
  constructor(author, title, year) {
    this.author = author;
    this.title = title;
    this.year = year;
  }
}



class Library {
  constructor(books) {
    this.books = books;
  }

  add(book) {
    this.books =  this.books.concat(book);
  }

  del(book) {
    const ind = this.books.findIndex(el => JSON.stringify(el) === JSON.stringify(book));
    this.books.splice(ind, 1);
  }

  show() {
    console.log('books = ', this.books);
  }

  find(prop, value) {
    return this.books.find(book => {
      if(book[prop]) {
        return book[prop] === value;
      }
    })
  }

  sort(prop) {

  }
}

const myLibrary = new Library([]);

myLibrary.add([new Book('author1', 'title1', 2000),
              new Book('author2', 'title2', 2015)])
myLibrary.add(new Book('author3', 'title3', 2003));
console.log('find = ', myLibrary.find('author', 'author2'));
myLibrary.show();

myLibrary.del({author:'author3', title:'title3', year:2003})
myLibrary.show();
