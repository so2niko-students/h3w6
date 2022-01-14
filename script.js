class Train {
    constructor(finalPoint, numberOfTrain, time) {
        this.finalPoint = finalPoint;
        this.numberOfTrain = numberOfTrain;
        this.time = time
    }
}

class RailwayStation {
    constructor() {
        this.trains = []
    }
    addNewTrain(config) {
        config.forEach((train) => {
            this.trains.push(new Train(train[0], train[1], train[2]));
        })
    }
    getTrainInfo(numberOfTrain) {
        return this.trains.filter((train) => train.numberOfTrain == numberOfTrain)
    }
    stationSort() {
        this.trains.sort((a, b) => a.finalPoint > b.finalPoint ? 1 : -1);
        this.trains.sort((a, b) => {
            if (a.finalPoint == b.finalPoint) {
                return a.time - b.time
            }
        })
    }
}
const station = new RailwayStation();


station.addNewTrain([
    ['hit Row', 1, 3],
    ['Dnipro', 2, 6],
    ['Krivoe Ragu', 3, 5],
    ['Dnipro', 5, 4],
    ['Dnipro', 6, 5],
    ['1', 7, 5]
])

// console.log(station.trains)
// console.log(station.getTrainInfo(2))
// console.log(station.stationSort())

// console.log(station.trains)



class Book {
    constructor(title, author, year, publisher) {

        this.title = title;
        this.author = author;

        this.year = year;

        this.publisher = publisher;


    }
}

class Library {
    constructor() {
        this.libraryData = []
        this.libraryHelper = {
            sortedBy: false,
        }
    }

    addNewBook(title, author, year, publisher) {
        this.libraryData.push(new Book(title, author, year, publisher))

    }

removeBook(key, value) {
        this.libraryData = this.libraryData.filter(book => book[key] != value)
    }

    findBookBy(key, value) {
        return this.libraryData.reduce(function(acc, book) {
            if (book[key] == value) {
                acc.push(book)
            }
            return acc
        }, [])
    }

    sortBy(key) {
        // let atr = atribute
        this.libraryData.sort((a, b) => a.key > b.key ? 1 : -1);
    }

}

const library = new Library()
