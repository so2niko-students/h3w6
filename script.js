class Hex {
    constructor(num) {
        this.num = num;
        this.hexadecimal = num.toString(16)
    }

    static parse(hex) {
        return parseInt(hex, 16)
    }

    toString() {
        return `0x${this.hexadecimal.toUpperCase()}`
    }

    valueOf() {
        return this.num
    }

    toJSON() {
        return this.toString()
    }

    plus(num) {
        return new Hex(this.valueOf() + num.valueOf())
    }

    minus(num) {
        return new Hex(this.valueOf() - num.valueOf())
    }

}


class PaginationHelper {
    constructor(arrayOfitem, itemOnPage) {
        this.arrayOfitem = arrayOfitem
        this.itemOnPage = Math.ceil(itemOnPage);
    }

    pageCount() {
        return Math.ceil(this.lengthOfArr / this.itemOnPage)
    }

    itemCount() {
        return this.lengthOfArr
    }
    pageItemCount(page) {
        let isThatLastPage = this.lengthOfArr - this.itemOnPage * (page);
        if (isThatLastPage < 0) { return -1 }
        return isThatLastPage > this.itemOnPage ? this.itemOnPage : isThatLastPage
    }

    pageIndex(itemIndex) {
        itemIndex++
        if (itemIndex < 0 || itemIndex > this.lengthOfArr) return -1
        return Math.ceil(itemIndex / this.itemOnPage) - 1
    }

    get lengthOfArr() {

        return this.arrayOfitem.length;
    }
}


class Dictionary {
    newEntry(key, value) {
      this[key] = value;
    }
    look(key) {
      return this[key] || `Can\'t find entry for ${key}`;
    }
  }

