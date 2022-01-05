const myError = 'You entered incorrect data!';

Array.prototype.getMinValue = function() {
    return this.sort((a, b) => a - b)[0]
}


let sumOfMinValue = function(arr) {
    if (arr.length == 0 || arr.flat().some(item => item < 0)) return new Error(myError);
    return arr.reduce((total, item) => total += item.getMinValue(), 0);
}

// let sumOfMinValue = (arr) => arr.reduce((total, item) => total += item.getMinValue(), 0)



const x = [
    [1, 2, 3, 4, 5], // minimum value of row is 1
    [5, 6, 7, 8, 9], // minimum value of row is 5
    [20, 21, 34, 56, 100] // minimum value of row is 20
];