function twoOldestAges(arr) {
  let oldest = (arr.sort((a, b) => a - b)).slice(-2);
  console.log(arr);
  console.log(oldest);
}

twoOldestAges([7, 5, 55, 33, 22, 11 , 3313, 3, 77 , 122]);
