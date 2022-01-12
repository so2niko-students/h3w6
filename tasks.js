//Task 1 Hex class
class Hex {
    constructor(num) {
        this.number = num;
    }
    toString() {
        return `0x${this.number.toString(16).toUpperCase()}`;
    }
    valueOf() {
        return this.number;
    }
    plus(arg) {
        const result = this.number + arg;
        return new Hex(result);
    }
    minuse(arg) {
        const result = this.number - arg;
        return new Hex(result);
    }
    static parse(str) {
        return parseInt(str, 16);
    }
}
//Task 2  Interactive Dictioary
class Dictionary {
    data = {};
    newEntry(word, description) {
        this.data[word] = description;
    }
    look(word) {
        if (word in this.data) {
            return this.data[word];
        }
        return `Can't find entry for ${word}`;
    }
}

let d = new Dictionary();


//Task 3 PaginationHelper
class PaginationHelper {
    constructor(arrContent, countContentOnPage) {
        this.countContentOnPage = countContentOnPage;
        this.arrContent = arrContent;
        //ask about lodash
    }
    pageCount() {
        return Math.ceil(this.arrContent.length / this.countContentOnPage)
    }
    itemCount() {
        return this.arrContent.length;
    }
    pageItemCount(numPage) {
        const countPage = this.pageCount()
        if (numPage < countPage && numPage >= 0) {
            // if for last page
            if (numPage == countPage - 1) {
                return this.arrContent.length - ((countPage - 1) * this.countContentOnPage);
            }
            return this.arrContent.slice(numPage, numPage + this.countContentOnPage).length;
        }
        return -1;

    }
    pageIndex(indexItem) {
        if (indexItem < this.arrContent.length && indexItem >= 0) {
            return Math.floor(indexItem / this.countContentOnPage)
        }
        return -1;
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