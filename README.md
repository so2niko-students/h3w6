**Links:**
-  [Classes](https://javascript.info/classes) 
- [html/css cheat sheet ](https://htmlcheatsheet.com/)
- на будущее почитать паттерны Посредник и Наблюдатель. [Паттерны](https://refactoring.guru/ru/design-patterns/)
- *regExp* cheat sheet 
![Is there a reliable Regex Document / Cheat sheet? - Salesforce Stack  Exchange](https://i.stack.imgur.com/BBPrT.png)


# Task 1:

**Hex class**

Create a class Hex which takes a number as an argument.
Adding a hex object to a number (by using *valueOf*) generates a number, but calling *toString* or *toJSON* will show its hexadecimal value starting with "*0x*". To make hex objects comparable you have to provide a method equals.
*Example*:

    var FF = new Hex(255);
    FF.toString() == "0xFF";
    FF.valueOf() + 1 == 256;

Also create two methods, plus and minus which will add or subtract a number or Hex object and return a new Hex object.

    const a = new Hex(10);
    const b = new Hex(5);
    a.plus(b).toJSON() == "0xF";

Also, create a parse class method that can parse Hexadecimal numbers and convert them to standard decimal numbers:

    Hex.parse("0xFF") == 255;
    Hex.parse("FF") == 255;

*Note*: If you define both *valueOf* and *toString*, "Hex value:" + new Hex(255) may not behave as expected!

_________________________
# Task 2:
**Interactive Dictionary**

Create a class Dictionary which you can add words to and their entries. 
*Example*:

    let d = new Dictionary();
    d.newEntry("Apple", "A fruit that grows on trees");
    console.log(d.look("Apple"));
    A fruit that grows on trees
    console.log(d.look("Banana"));
    Can't find entry for Banana

_________________________
# Task 3:

**PaginationHelper**
You will complete the *PaginationHelper* class, which is a utility class helpful for querying paging information related to an array.
The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.
The following are some examples of how this class is used:

    const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
    helper.pageCount(); //should == 2
    helper.itemCount(); //should == 6
    helper.pageItemCount(0); //should == 4
    helper.pageItemCount(1); // last page - should == 2
    helper.pageItemCount(2); // should == -1 since the page is invalid
    
    // pageIndex takes an item index and returns the page that it belongs on
    helper.pageIndex(5); //should == 1 (zero based index)
    helper.pageIndex(2); //should == 0
    helper.pageIndex(20); //should == -1
    helper.pageIndex(-10); //should == -1

_________________________
