//Task 1
class Train {
   constructor(dest, number, time) {
      this.dest = dest;
      this.number = number;
      this.time = new Date(time);
   }
}

class RailwayStation {
   static trains = [];
   addTrains(trains) {
      trains.forEach(el => {
         RailwayStation.trains.push(el)
      });
   }
   sortByNumbers() {
      RailwayStation.trains.sort((a, b) => a.number - b.number);
   }
   displayInfo(number) {
      return RailwayStation.trains.find(el => el.number === number);
   }
   sortByDestination() {
      RailwayStation.trains.sort((a, b) => {
         if (a.dest === b.dest) {
            return a.time < b.time ? -1 : 1;
         }
         return a.dest < b.dest ? -1 : 1
      });
   }
}

//Task 2
class Library {
   static collection = [];
   findBy(criterion, value) {
      return Library.collection.find(el => el[criterion] === value);
   }
   addBook(title, author, year) {
      Library.collection.push({
         title,
         author,
         year,
      })
   }
   deleteBook(title) {
      const index = Library.collection.findIndex(el => el.title === title);
      Library.collection.splice(index, 1);
   }
   sortBy(criterion) {
      Library.collection.sort((a, b) => a[criterion] < b[criterion] ? -1 : 1);
   }
}