const assert = require('assert');
const sumMin = require('../tasks').sumMin;
const twoOldestAges = require('../tasks').twoOldestAges;
const shortestWord = require('../tasks').shortestWord;
const yourOrderPlease = require('../tasks').yourOrderPlease;

describe('Task #1 Sum of Minimums!', function() {

    it('should return 24', function() {
        assert.equal(sumMin([
            [1, 2, 3],
            [33, 22, 55],
            [16, 42, 345, 79, 1]
        ]), 24);
    });
    it('should return 4', function() {
        assert.equal(sumMin([
            [11, 2],
            [323, 2, 55]
        ]), 4);
    });
    it('should return 15', function() {
        assert.equal(sumMin([
            [13, 11, 2],
            [3, 23, 23, 55],
            [23, 55, 3, 77],
            [39, 7, 89, 94]
        ]), 15);
    });

});

describe('Task #2 Two Oldest Ages', function() {

    it('should return [8, 10]', function() {
        assert.deepEqual(twoOldestAges([1, 2, 10, 8]), [8, 10]);
    });


    it('should return [85, 89]', function() {
        assert.deepEqual(twoOldestAges([35, 51, 71, 46, 85, 63, 89, 80]), [85, 89]);
    });

});

describe('Task #3 Shortest Word ', function() {

    it('should return 3-1', function() {
        assert.equal(shortestWord("bitcoin take over the world maybe who knows perhaps"), 3);
    });
    it('should return 3-2', function() {
        assert.equal(shortestWord("turns out random test cases are easier than writing out basic ones"), 3);
    });
    it('should return 3-3', function() {
        assert.equal(shortestWord("lets talk about javascript the best language"), 3);
    });

    it('should return 1', function() {
        assert.equal(shortestWord("i want to travel the world writing code one day"), 1);
    });
    it('should return 2', function() {
        assert.equal(shortestWord("Lets all go on holiday somewhere very cold"), 2);
    });




});

describe('Task #4 Your order, please', function() {

    it('should return "Thi1s is2 3a T4est"', function() {
        assert.equal(yourOrderPlease("is2 Thi1s T4est 3a"), "Thi1s is2 3a T4est");
    });


    it('should return "Fo1r the2 g3ood 4of th5e pe6ople"', function() {
        assert.equal(yourOrderPlease("4of Fo1r pe6ople g3ood th5e the2"), "Fo1r the2 g3ood 4of th5e pe6ople");
    });
    it('should return ""', function() {
        assert.equal(yourOrderPlease(""), "");
    });

});