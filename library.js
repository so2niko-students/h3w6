const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
    year: 1988,
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
    year: 1995,
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
    year: 1897,
  },
];

class HomeLibrary {
  constructor(books) {
    this.bookStorage = books;
  }
  addBook(newBook) {
    return this.bookStorage.push(newBook);
  }
  removeBook(title) {
    const index = this.bookStorage.indexOf(title);
    if (index === -1) {
      return;
    } else {
      this.bookStorage.splice(index, 1);
    }
  }

  getBookByTitle(title) {
    const index = this.bookStorage.indexOf(title);
    if (index === -1) {
      return "Sorry, no book found";
    } else {
      this.bookStorage[index];
    }
  }
  sortByAuthor() {
    return this.bookStorage.sort((bookA, bookB) =>
      bookA.author.localeCompare(bookB.author)
    );
  }
  sortByYear() {
    return this.bookStorage.sort(
      (a, (b) => parseFloat(a.number) - parseFloat(b.number))
    );
  }
}

const library = new HomeLibrary();

library.addBook();
library.removeBook();
library.getBookByTitle();
library.sortByAuthor();
library.sortByYear();
