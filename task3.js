function returnShortest(str) {
  let arr = str.split(" ");
  arr.sort(function (a, b) {
    return a.length - b.length;
  });
  console.log(`${str} --> ${arr[0].length}`);
}

returnShortest("test req hello man qq re tt");
