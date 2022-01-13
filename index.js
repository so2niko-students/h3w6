"use strict";

// Task 1
class Train {
  destination;
  route;
  departureTime;
  constructor(destination, route, departureTime) {
    this.destination = destination;
    this.route = route;
    this.departureTime = departureTime;
  }
}

class RailwayStation {
  trains = [];
  constructor(trains) {
    this.trains = trains;
  }

  addTrains(newTrains) {
    this.trains = this.trains.concat(newTrains);
  }

  sortTrainsByRoute() {
    this.trains.sort((a, b) => {
      if (a.route === b.route) {
        return 0;
      }
      return a.route > b.route ? 1 : -1;
    });
  }

  sortTrainsByDepartureTime(a, b) {
    if (a.departureTime === b.departureTime) {
      return 0;
    }
    return a.departureTime > b.departureTime ? 1 : -1;
  }

  sortTrainsByDestination() {
    this.trains.sort((a, b) => {
      if (a.destination === b.destination) {
        return this.sortTrainsByDepartureTime(a, b);
      }
      return a.destination > b.destination ? 1 : -1;
    });
  }

  showInfo(route) {
    return (
      this.trains.find((train) => train.route === route) ||
      `There is no such route scheduled`
    );
  }
}

const trainStation = new RailwayStation([
  new Train(`Kyiv`, 72, new Date(`2022-01-17T03:30:00`)),
  new Train(`Lviv`, 12, new Date(`2022-01-18T01:50:00`)),
  new Train(`Lisbon`, 123, new Date(`2022-05-14T15:30:00`)),
  new Train(`Amsterdam`, 25, new Date(`2022-03-17T22:30:00`)),
  new Train(`Goa`, 1, new Date(`2022-03-01T00:30:00`)),
]);

trainStation.addTrains([
  new Train(`Lisbon`, 56, new Date(`2022-02-15T05:30:00`)),
  new Train(`Barcelona`, 88, new Date(`2022-03-10T08:00:00`)),
  new Train(`Lisbon`, 56, new Date(`2022-01-15T08:30:00`)),
]);

// trainStation.sortTrainsByRoute();

// console.log(trainStation.trains);

// trainStation.sortTrainsByDestination();

// console.log(trainStation.trains);

// console.log(trainStation.showInfo(72));
// console.log(trainStation.showInfo(11));

class Library {
  books;
  constructor(books) {
    this.books = books;
  }

  addBooks(newBooks) {
    this.books = this.books.concat(newBooks);
  }

  removeBook(bookName) {
    const index = this.books.findIndex((book) => book.name === bookName);
    this.books.splice(index, 1);
  }

  showInfo(bookName) {
    return (
      this.books.find((book) => book.name === bookName) ||
      `There is no such book`
    );
  }

  sortByKey(key) {
    if (!(key in this.books[0])) {
      console.warn(`Can't find ${key} key in book`);
      return;
    }
    this.books.sort((a, b) => {
      if (a[key] === b[key]) {
        return 0;
      }
      return a[key] > b[key] ? 1 : -1;
    });
  }

  // sortBooksByName() {
  //   this.books.sort((a, b) => {
  //     if (a.name === b.name) {
  //       return 0;
  //     }
  //     return a.name > b.name ? 1 : -1;
  //   });
  // }

  // sortBooksByAuthor(a, b) {
  //   if (a.author === b.author) {
  //     return 0;
  //   }
  //   return a.author > b.author ? 1 : -1;
  // }

  // sortBooksByPages(a, b) {
  //   if (a.pages === b.pages) {
  //     return 0;
  //   }
  //   return a.pages > b.pages ? 1 : -1;
  // }

  // sortBooksByPublishDate(a, b) {
  //   if (a.publishedAt === b.publishedAt) {
  //     return 0;
  //   }
  //   return a.publishedAt > b.publishedAt ? 1 : -1;
  // }
}

class Book {
  name;
  author;
  pages;
  publishedAt;

  constructor(name, author, pages, publishedAt) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.publishedAt = publishedAt;
  }
}

const library = new Library([
  new Book(
    `Who Knows`,
    `JS for beginners`,
    200,
    new Date(`2022-01-17T03:30:00`)
  ),
  new Book(
    `Someone Smart`,
    `Scrum usage`,
    900,
    new Date(`2010-01-17T03:30:00`)
  ),
  new Book(`Kto-to Tam`, `React`, 400, new Date(`2018-01-17T09:30:00`)),
  new Book(
    `James`,
    `Angular for everyone`,
    1500,
    new Date(`2020-05-17T09:30:00`)
  ),
  new Book(
    `Who Knows`,
    `JS for beginners`,
    200,
    new Date(`2022-01-17T03:30:00`)
  ),
]);

// library.sortByKey("author");
// library.sortByKey("names");

// library.addBooks(new Book(`N`, `Hello`, 300, new Date(`2015-01-10T03:30:00`)));

// library.removeBook(`N`);
// console.log(library.books);
