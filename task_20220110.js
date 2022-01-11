//TASK 1
//SUBTASK 1
const textNumber = function (num) {
  const words = [
    [
      "ноль",
      "один",
      "два",
      "три",
      "четыре",
      "пять",
      "шесть",
      "семь",
      "восемь",
      "девять",
      "десять",
      "",
      "две",
      "",
      "четыр",
      "пят",
      "шест",
      "сем",
      "восем",
      "девят",
    ],
    ["", "", "двадцать", "тридцать", "сорок", "", "", "", "", "девяносто"],
  ];
  if (num >= 0 && num <= 10) return words[0][num];
  if (num > 10 && num <= 19)
    return (words[0][num] || words[0][num - 10]) + "надцать";
  if (num >= 20 && num <= 99) {
    const [units = 0, tens] = [...("" + num)].reverse().map(Number);
    return [
      tens ? words[1][tens] || words[0][tens] + "десят" : "",
      units ? words[0][units] : "",
    ].join(" ");
  }
};
//console.log(textNumber(83));
//Array.from({ length: 100 }, (_v, i) => i + ": " + textNumber(i)).join("\n")

//SUBTASK 2
const getStrStats = function (str) {
  return `${str.match(/[a-z]/gi).join("").length} letters, ${
    str.match(/\d/g).join("").length
  } digits, ${str.match(/[^\w]/g).join("").length} etc symbols`;
};
// console.log(getStrStats('test12345$$#@!@!@@@'));

//SUBTASK 3
const replaceStr = function (str) {
  let result = "";
  for (let char of str)
    result +=
      char === char.toUpperCase()
        ? char.toLowerCase().replace(/[0-9]/g, "_")
        : char.toUpperCase().replace(/[0-9]/g, "_");
  return result;
};
//console.log(replaceStr(`dDDDdaaaaddDDd11`));

//TASK 2
// const circles = document.querySelectorAll(".circle");
// const actionBtn = document.querySelector(".button");
// let activeLight = 1;
// actionBtn.addEventListener("click", function changeLight() {
//   circles[activeLight].className = 'circle';
//   activeLight++;
//   if(activeLight > 2) {
//    activeLight =0;
//   }
//   const currentLight = circles[activeLight];
//   currentLight.classList.add(currentLight.getAttribute("color"));
// });

//TASK 3
//SUBTASK 1
const arr = ["Яблоко", "Банан", "Ананас"];
console.log(arr.map((el) => el[0]));
console.log(arr.reduce((acc, val) => acc + val[0], "").split(""));
//SUBTASK 2
console.log(arr.filter((el) => el[0].toLowerCase() === "а"));
console.log(
  arr
    .reduce((acc, val) => (val[0].toLowerCase() === "а" ? acc + val : acc), "")
    .split(" ")
);
//SUBTASK 3
console.log(arr.forEach((el, i, arr) => (arr[i] = `${i + 1}: ${el};`)));
console.log(arr.reduce((acc, val, i) => acc + ` ${val}`, "").split(" "));
