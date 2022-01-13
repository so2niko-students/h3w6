"use strict";

// Task 1
class Hex {
  constructor(num) {
    this.num = num;
  }

  toString() {
    return "0x" + this.num.toString(16).toUpperCase();
  }

  toJSON() {
    return this.toString();
  }

  valueOf() {
    return this.num;
  }

  minus(n) {
    return new Hex(this.num - n);
  }

  plus(n) {
    return new Hex(this.num + n);
  }

  static parse(value) {
    return parseInt(value, 16);
  }
}

// var FF = new Hex(255);
// console.log(FF.toString());
// console.log(FF.valueOf() + 1);

// const a = new Hex(10);
// const b = new Hex(5);
// console.log(a.plus(b).toJSON());

// console.log(Hex.parse("0xFF"));
// console.log(Hex.parse("FF"));

// Task 2
class Dictionary {
  constructor() {
    this.dict = {};
  }

  newEntry(key, value) {
    this.dict[key] = value;
  }

  look(key) {
    return this.dict[key] || `Can't find entry for ${key}`;
  }
}

// let d = new Dictionary();
// d.newEntry("Apple", "A fruit that grows on trees");
// console.log(d.look("Apple"));
// console.log(d.look("Banana"));

// Task 3
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    Object.assign(this, { collection, itemsPerPage });
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  pageItemCount(pageIndex) {
    return pageIndex < 0 || pageIndex >= this.pageCount()
      ? -1
      : pageIndex < this.pageCount() - 1
      ? this.itemsPerPage
      : this.itemCount() % this.itemsPerPage;
  }

  pageIndex(itemIndex) {
    return itemIndex < 0 || itemIndex >= this.itemCount()
      ? -1
      : (itemIndex / this.itemsPerPage) ^ 0;
  }
}
