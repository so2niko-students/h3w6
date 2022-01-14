//Task 1
class Train {
    constructor(destination, numberTrain, timeDepartures) {
        this.destination = destination;
        this.numberTrain = numberTrain;
        this.timeDepartures = new Date(timeDepartures);
    }
}
class RailwayStation {
    constructor() {
        this.trains = [];
    }
    addTrains(newTrains) {
        this.trains = this.trains.concat(newTrains)
    }
    sortByNumber() {
        return this.trains.sort((a, b) => {
            if (a.numberTrain > b.numberTrain) {
                return 1;
            }
            if (a.numberTrain < b.numberTrain) {
                return -1;
            }
            return 0;
        });
    }
    getInfo(number) {
        try {
            const result = this.trains.filter(trainNumber => trainNumber.numberTrain == number)
            console.log(result);
        } catch {
            console.log('[]')
        }
    }
    sortByDestination() {
        const result = this.trains.sort((a, b) => {

            if (a.destination > b.destination) {
                return 1;
            }
            if (a.destination < b.destination) {
                return -1;
            }

            return a.timeDepartures - b.timeDepartures;

        })
        return result;
    }


}

const arrTrain = [new Train('Dnipro', 'E775', '2022-03-13 15:33'),
    new Train('Dnipro', 'A775', '2022-03-15 14:33'),
    new Train('Kyiv', 'C775', '2022-03-14 14:33'),
    new Train('Dnipro', 'D775', '2022-05-14 16:33'),
    new Train('Dnipro', 'A775', '2022-06-20 18:33')
]

const station = new RailwayStation();
station.addTrains(arrTrain);


console.log(station.sortByDestination())
    // in Progress 
    //Task 2
class HomeLibrary {
    static lastId = 0;
    constructor() {
        this.books = [];

    }
    addBook(author, title, yearPublished) {
        this.books.push({
            'id': lastId,
            'author': author,
            'title': title,
            'yearPublished': new Date(yearPublished)
        })
        lastId += 1;
    }
    removeBook(id) {

    }
}