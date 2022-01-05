const myError = new Error('You entered incorrect data!');


//first task
Array.prototype.getMinValue = function() {
    return this.sort((a, b) => a - b)[0]
}

const sumOfMinValue = function(arr) {
    if (arr.length == 0 || arr.flat().some(item => item < 0)) return myError;
    return arr.reduce((total, item) => total += item.getMinValue(), 0);
}

// let sumOfMinValue = (arr) => arr.reduce((total, item) => total += item.getMinValue(), 0)


// second task


const twoOldestAges = (arr) => arr.sort((a, b) => a - b).splice(arr.length - 2, arr.length);


// console.log(twoOldestAges([1, 2, 10, 8]))


//third task

// const getLength = (string) => string.trim().split(' ').sort((a, b) => a.length - b.length)[0].length;


const getLength = function(string) {
    if (string.trim() == '') return myError
    return string.trim().split(' ').sort((a, b) => a.length - b.length)[0].length;
}

console.log(getLength("     фыв фвыаф ываыва фываыфва a"))