// Task 1

let arr = [[1,2,3],[33,22,55],[16,42,345,79,1]];

function sumOfMinimumValueInEachRow(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
        minValue = Math.min(...arr[i]);
		sum += minValue;
	}
	console.log(sum);
}

sumOfMinimumValueInEachRow(arr);

// Task 2

let arr2 = [1, 2, 10, 8];

function twoOldestAges(arr2) {
    arr2.sort((a, b) => b - a);
    const newArr2 = [arr2[1], arr2[0]];
    console.log(newArr2);
}

twoOldestAges(arr2);

// Task 3

const findShort = str => str.split(' ').sort((a, b) => a.length - b.length)[0].length;

// Task 4

