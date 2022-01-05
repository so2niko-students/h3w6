const sumMin = arr => arr.reduce((sum, el) => sum += el.sort((a, b) => a - b)[0], 0);

// console.log(sumMin([[1, 2, 3, 4, 5],[5, 6, 7, 8, 9],[20, 21, 34, 56, 100]]));
// console.log(sumMin([[1,2,3],[33,22,55],[16,42,345,79,1]]));
// console.log(sumMin([[11,2],[323,2,55]]));
// console.log(sumMin([[13,11,2],[3,23,23,55],[23,55,3,77],[39,7,89,94]]));

const twoOldestAges = arr => arr.sort((a, b) => a - b).splice(arr.length - 2, 2);

// console.log(twoOldestAges([1, 2, 10, 8]));

const shortestWord = str => str.split(' ').sort((a, b) => a.length > b.length ? 1 : -1)[0].length;

// console.log(shortestWord("bitcoin take over the world maybe who knows perhaps"));
// console.log(shortestWord("turns out random test cases are easier than writing out basic ones"));
// console.log(shortestWord("lets talk about javascript the best language"));
// console.log(shortestWord("i want to travel the world writing code one day"));
// console.log(shortestWord("Lets all go on holiday somewhere very cold"));

function yourOrderPlz(str) {
  const wordsArr = str.split(' ');
  const REG_EX = /\d/;
  return wordsArr.reduce((acc, el) => {
    acc[el.match(REG_EX) - 1] = el;
    return acc;
  }, []).join(' ')
}

// console.log(yourOrderPlz("is2 Thi1s T4est 3a"));
