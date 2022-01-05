function sumMin(arr) {
  let sum = [];
  arr.forEach(function (min) {
    sum.push(Math.min(...min));
    console.log(sum);
  });
  return sum.reduce((x, y) => x + y);
  //arr.forEach((min) => sum.push(Math.min(...min)));
  //console.log(min);
  //console.log(sum);
  //   for (let i = 0; i < arr.length; i++) {
  //     let min = (Math.min(...arr[i]));
  //     console.log(arr[i]);
  //     console.log(min);
  //     console.log(arr2);
  //console.log(sum);
}

console.log(
  sumMin([
    [7, 5, 55],
    [3, 2, 1],
    [9, 11, 3],
  ])
);
