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

const str2 = 'is2 Thi1s T4est 3a';
function correctSentence(str2) {
    let newArr2 = [];
    str2 = str2.split(' ');

    for (let i = 0; i < str2.length; i++) {
    	for (let j = 0; j < str2[i].length; j++) {
    		let inx = str2[i].match(/\d+/);
    		newArr2[inx - 1] = str2[i];
    	}
    }
    const newStr2 = newArr2.join(' ');
    console.log(newStr2);

}
correctSentence(str2);