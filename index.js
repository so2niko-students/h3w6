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
class PaginationHelper {
	constructor(arr, itemOnPage) {
	  this.arr = arr;
	  this.itemOnPage = itemOnPage;
	}

	itemCount() {
		return this.arr.length;
	}

	pageCount() {
		return Math.ceil(this.arr.length / this.itemOnPage);
	}

	pageItemCount(page) {
		let currentPage = this.arr.length - this.itemOnPage * page; 
    	if (currentPage > 0 && page >= 0) {
     		return currentPage > this.itemOnPage ? this.itemOnPage : currentPage;
    	} else {
			return -1;
		}	
    }

	pageIndex(index) {
		if (index > this.arr.length || index < 0) {
		  return -1;
		} else {
			return Math.floor(index / this.itemOnPage);
		}
	}	  
}

const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f', ], 4);

console.log(helper.pageCount()); //should == 2
console.log(helper.itemCount()); //should == 6
console.log(helper.pageItemCount(0)); //should == 4
console.log(helper.pageItemCount(1)); // last page - should == 2
console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1
