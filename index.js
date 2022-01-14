// Task 1
class Train {
	constructor(finalDestination, trainNum, departureTime) {
		this.finalDestination = finalDestination;
		this.trainNum = trainNum;
		this.departureTime = departureTime;
	}
}

class RailwayStation {
	trains = [];
	constructor(trains) {
		this.trains = trains;
	}

	addTrains(newTrain) {
		return this.trains = [...this.trains,...newTrain];
	}

	sortTrainsByNum() {
		return this.trains.sort((a, b) => a.trainNum - b.trainNum);
	}

	sortTrainsByDepartureTime() {
		return this.trains.sort((a, b) => a.departureTime - b.departureTime);
	}

	sortTrainsByFinalDestination() {
		this.trains.sort((a, b) => {
			if (a.finalDestination === b.finalDestination) {
				return this.sortTrainsByDepartureTime();
			}
			return a.finalDestination > b.finalDestination ? 1 : -1;
		});
	}

	infoAboutTrain(trainNum) {
		return (
			this.trains.find((train) => train.trainNum === trainNum) ||
			`Нет такого поезда`
		);
	}
}


const railwayStation = new RailwayStation([
	new Train('Dnipro', 1, new Date('2022-02-15T08:30:00')),
	new Train('Alchevsk', 8, new Date('2022-02-15T23:30:00')),
	new Train('Dnipro', 7, new Date('2022-02-15T07:30:00')),
	new Train('Kyiv', 2, new Date('2022-01-15T14:57:00')),
	new Train('Odesa', 5, new Date('2022-01-15T19:35:00')),
	new Train('Lviv', 11, new Date('2022-02-10T22:00:00')),
	new Train('Zaporizhzhia', 18, new Date('2022-01-20T10:10:00')),
  ]);
  
railwayStation.addTrains([
	new Train('Kharkiv', 3, new Date('2022-02-18T02:37:00')),
	new Train('Krivoy Rog', 9, new Date('2022-01-25T012:30:00')),
]);
  
railwayStation.sortTrainsByNum();
console.log(railwayStation.trains);
  
railwayStation.sortTrainsByFinalDestination();
console.log(railwayStation.trains);
  
console.log(railwayStation.infoAboutTrain(8));
console.log(railwayStation.infoAboutTrain(16));

// Task 2
class Book {
	constructor(name, author, year) {
		this.name = name;
		this.author = author;
		this.year = year;
	}
}

class Library {
	books = [];
	constructor(books) {
		this.books = books;
	}

	addBook(newBook) {
		return this.books = [...this.books,...newBook];
	}

	deleteBook(name) {
		this.books = this.books.filter(book => book.name !== name);
	}

	sortBooksByYear() {
		return this.books.sort((a, b) => a.year - b.year);
	}

	sortBooksByName() {
		return this.books.sort((a, b) => a.name > b.name ? 1 : -1);
	}

	sortBooksByAuthor() {
		return this.books.sort((a, b) => a.author > b.author ? 1 : -1);
	}
}


const homeLibrary = new Library([
	new Book('Book9', 'Author9', 2009),
	new Book('Book2', 'Author2', 2002),
	new Book('Book3', 'Author3', 2003),
	new Book('Book4', 'Author4', 2004),
	new Book('Book5', 'Author5', 2005),
]);
  
homeLibrary.addBook([
	new Book('Book6', 'Author6', 2006),
	new Book('Book7', 'Author7', 2007),
]);
  
homeLibrary.sortBooksByYear();
console.log(homeLibrary.books);
  
homeLibrary.sortBooksByName();
console.log(homeLibrary.books);
  
homeLibrary.sortBooksByAuthor();
console.log(homeLibrary.books);

homeLibrary.deleteBook('Book3');
console.log(homeLibrary.books);