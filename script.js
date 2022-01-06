//Task 1
function sumOfMin(array) {
   let result = 0;
   for (let i = 0; i < array.length; i++) {
      result += array[i].sort((a, b) => a - b)[0];
   }
   return result;
}

//Task 2
function twoOldestAges(array) {
   return array.sort((a, b) => a - b).slice(-2);
}

//Task 3
function shortestWord(string) {
   return string.split(' ').sort((a, b) => a.length - b.length)[0].length;
}

//Task 4
function yourOrder(string) {
   return string.split(' ').sort((a, b) => a.match(/\d/) - b.match(/\d/));
}