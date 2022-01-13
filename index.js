// Task 1
class Hex {
	constructor(num) {
		this.num = num;
	}

	toString() {
		return `0x${this.num.toString(16).toUpperCase()}`;
	}

	toJSON() {
		return this.toString();
	}

	valueOf() {
		return this.num;
	}

	plus() {
		return new Hex(this.valueOf() + this.num.valueOf());
	}

	minus() {
		return new Hex(this.valueOf() - this.num.valueOf());
	}

	static parse(str) {
		return parseInt(str, 16);
	}

}

// Task 2
class Dictionary {

	newEntry(word, meaning) {
		this[word] = meaning;
	}

	look(word) {
		return this[word] || `Can't find entry for ${word}`
	}
}

let d = new Dictionary();
d.newEntry("Apple", "A fruit that grows on trees");
console.log(d.look("Apple"));
console.log(d.look("Banana"));

// Task 3

