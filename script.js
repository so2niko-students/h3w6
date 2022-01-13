//Task 1
class Hex {
   constructor(number) {
      this.number = number;
   }
   valueOf() {
      return this.number;
   }
   toString() { //decimal to hex
      return `0x${this.number.toString(16).toUpperCase()}`;
   }
   static parse(number) { //hex to decimal
      return parseInt(number, 16);
   }
   plus(b) {
      return new Hex(this.number + b);
   }
   minus(b) {
      return new Hex(this.number - b);
   }
}

//Task 2
class Dictionary {
   dict = {};
   newEntry(key, value) {
      this.dict[key] = value;
   }
   look(key) {
      return this.dict[key] || `Can't find entry for ${key}`;
   }
}

//Task 3
class PaginationHelper {
   constructor(items, elPerPage) {
      this.items = items;
      this.elPerPage = elPerPage;
   }
   pageCount() {
      return Math.ceil(this.items.length / this.elPerPage);
   }
   itemCount() {
      return this.items.length;
   }
   pageItemCount(page) {
      if (page > this.pageCount() - 1) {
         return -1;
      }
      return page === this.pageCount() - 1 ? this.items.length % 4 : this.elPerPage;
   }
   pageIndex(index) {
      if (index < 0 || index > this.items.length) {
         return -1;
      }
      return index > this.elPerPage ? Math.floor(index % this.elPerPage) : Math.floor(index / this.elPerPage);
   }
}
