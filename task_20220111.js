//TASK 1
class Hex {
  constructor(number) {
    this.number = number;
  }
  toString() {
    return `0x${this.number.toString(16).toUpperCase()}`;
  }
  toJSON() {
    return this.toString();
  }
  valueOf() {
    return this.number;
  }
  plus(number) {
    return new Hex(this.valueOf() + number.valueOf());
  }
  minus(number) {
    return new Hex(this.valueOf() - number.valueOf());
  }
  static parse(str) {
    return parseInt(str, 16);
  }
}
// let FF = new Hex(255);
// console.log(FF.toString());
// console.log(FF.valueOf() + 1);
// const a = new Hex(10);
// const b = new Hex(5);
// console.log(a.plus(b).toJSON());
// console.log(a.minus(b).toJSON());
// console.log(Hex.parse("0xFF"));
// console.log(Hex.parse("FF"));

//TASK2
class Dictionary {
  newEntry(word, entry) {
    this[word] = entry;
  }
  look(word) {
    return this[word] ?? `Can't find entry for Banana`;
  }
}
let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");
// console.log(d.look("Apple"));
// console.log(d.look("Banana"));

//TASK3
class PaginationHelper {
  constructor(arr, int) {
    this.arr = arr;
    this.int = int;
  }
  pageCount() {
    return Math.ceil(this.arr.length / this.int);
  }
  itemCount() {
    return this.arr.length;
  }
  pageItemCount(page) {
    let currentPage = this.arr.length - this.int * page; 
    if (currentPage > 0 && page >= 0) {
      return currentPage > this.int ? this.int : currentPage;
    }
    //  return this.arr.length - (pagesTotal*this.int)}
    //  else if (this.arr.length - (pagesTotal*this.int) > this.int) {
    //      return this.int;}
    else return -1;
  }

  pageIndex(index) {
      if (index>this.arr.length || index <0){
        return -1;
      }
      else return Math.floor(index/ this.int);
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(-1)); // should == -1 since the page is invalid
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid
// // pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(0)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1
