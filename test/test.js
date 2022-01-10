let assert = require('assert');
const ipsBetween = require('../tasks').ipsBetween;
const decodeMorse = require('../tasks').decodeMorse;
const ticTacToeChek = require('../tasks').ticTacToeChek;
const meeting = require('../tasks').meeting;
const tickets = require('../tasks').tickets;
const calculate = require('../tasks').calculate;
const findPartMaxProd = require('../tasks').findPartMaxProd

describe('Task #1 Count IP Addresses', function() {
    it('should return 50', function() {
        assert.equal(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
    });
    it('should return 256', function() {
        assert.equal(ipsBetween("10.0.0.0", "10.0.1.0"), 256);
    });
    it('should return 246', function() {
        assert.equal(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
    });
});
describe('Task #2 Morse', function() {
    it('should return HEYJUDE', function() {
        assert.equal(decodeMorse('.... . -.-- .--- ..- -.. .'), "HEYJUDE");
    });
});


describe('Task #3 Tic-Tac-Toe Checker', function() {
    it('should return 2', function() {
        assert.equal(ticTacToeChek([
            [0, 0, 2],
            [0, 2, 2],
            [2, 1, 0]
        ]), 2);
    });
    it('should return 1', function() {
        assert.equal(ticTacToeChek([
            [0, 0, 2],
            [0, 2, 2],
            [1, 1, 1]
        ]), 1);
    });
    it('should return -1', function() {
        assert.equal(ticTacToeChek([
            [0, 0, 2],
            [0, 2, 2],
            [0, 1, 1]
        ]), -1);
    });
    it('should return 1 vertical', function() {
        assert.equal(ticTacToeChek([
            [1, 0, 2],
            [1, 2, 2],
            [1, 1, 1]
        ]), 1);
    });
});


describe('Task #4 Find a Chair', function() {

    it('should return [0, 1, 3]', function() {
        assert.deepEqual(meeting([
            ['XXX', 3],
            ['XXXXX', 6],
            ['XXXXXX', 9]
        ], 4), [0, 1, 3]);
    });
    it('should return [0, 0, 1, 2, 2]', function() {
        assert.deepEqual(meeting([
            ['XXX', 1],
            ['XXXXXX', 6],
            ['X', 2],
            ['XXXXXX', 8],
            ['X', 3],
            ['XXX', 1]
        ], 5), [0, 0, 1, 2, 2]);
    });
    it('should return  "Game On"', function() {
        assert.equal(meeting([
            ['XX', 2],
            ['XXXX', 6],
            ['XXXXX', 4]
        ], 0), 'Game On');
    });
    it('should return "Not enough!"', function() {
        assert.deepEqual(meeting([
            ['XX', 2],
            ['XXXX', 6],
            ['XXXXX', 4]
        ], 4), 'Not enough!');
    });


});


describe('Task #5 Vasya - Clerk', function() {
    it('should return YES', function() {
        assert.equal(tickets([25, 25, 50]), "YES");
    });

    it('should return NO', function() {
        assert.equal(tickets([25, 100]), "NO");
    });
    it('should return NO when we have [25, 25, 50, 50, 100]', () => {
        assert.equal(tickets(tickets([25, 25, 50, 50, 100])), "NO");
    });

});

describe('Task #6 Quipu Calculator', function() {
    it('should return "@@~@@@@"', function() {
        assert.equal(calculate("@~@@*@@"), "@@~@@@@");
    });

    it('should return "@@@~@@"', function() {
        assert.equal(calculate("@~@@+@@~~"), "@@@~@@");
    });


});

describe('Task #7 Find the Partition with Maximum Product Value', function() {
    it('should return  [[3, 3, 2], 18]', function() {
        assert.deepEqual(findPartMaxProd(8), [
            [3, 3, 2], 18
        ]);
    });

    it('should return  [4, 3, 3], [3, 3, 2, 2], 36]', function() {
        assert.deepEqual(findPartMaxProd(10), [
            [4, 3, 3],
            [3, 3, 2, 2], 36
        ]);
    });

});