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
console.log(d.look("Apple"));
console.log(d.look("Banana"));

//TASK3
