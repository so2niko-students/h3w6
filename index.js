"use strict";

// Task 1
const nameTheNumber = (num) => {
  const units = [
    "",
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
    "одиннадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ];
  const decimals = [
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];
  const numString = num.toString();
  if (num === 0) {
    return `ноль`;
  }
  if (num < 20) {
    return units[num];
  }
  return decimals[numString[0]] + " " + units[numString[1]];
};

const displayStrStats = (str) => {
  const letterCount = str.match(/[a-zA-Z]/gi).length;
  const numberCount = str.match(/[0-9]/gi).length;
  const specialCharCount = str.match(/[$&+,:;=?@#|'<>.^*()%!-]/gi).length;
  return `count of letters - ${letterCount}, count of numbers - ${numberCount}, count of special chars - ${specialCharCount}`;
};

// const replaceLetter = (str) => {
//   let res = "";
//   for (let i = 0; i < str.length; i++) {
//     if (typeof +str[i] === "number") {
//       console.log(str[i]);
//       res += "_";
//     } else {
//       if (str[i] === str[i].toLowerCase()) {
//         res += str[i].toUpperCase();
//       }
//       if (str[i] === str[i].toUpperCase()) {
//         res += str[i].toLowerCase();
//       }
//     }
//   }
//   return res;
// };

// Task 2 - Traffic lights
const toggleButton = document.querySelector(".color-toggler");
const redLight = document.querySelector("#red");
const yellowLight = document.querySelector("#yellow");
const greenLight = document.querySelector("#green");
const lightStates = {
  red: 0,
  yellow: 1,
  green: 2,
};
let currentState = lightStates.red;

const changeState = () => {
  clear();
  switch (currentState) {
    case lightStates.red:
      {
        redLight.className = "light red";
        currentState = lightStates.yellow;
      }
      break;
    case lightStates.yellow:
      {
        yellowLight.className = "light yellow";
        currentState = lightStates.green;
      }
      break;
    case lightStates.green:
      {
        greenLight.className = "light green";
        currentState = lightStates.red;
      }
      break;
  }
};

toggleButton.onclick = () => {
  changeState();
};

const clear = () => {
  redLight.className = "light off";
  yellowLight.className = "light off";
  greenLight.className = "light off";
};

// Task 3 - Array methods

// ["Яблоко", "Банан", "Ананас"].map((el) => el[0]);
// ["Я", "Б", "А"]

["Яблоко", "Банан", "Ананас"].reduce((acc, el) => [...acc, el[0]], []);

// ["Яблоко", "Банан", "Ананас"].filter((el) => el[0].toLowerCase() == "а");
// ["Ананас"]

["Яблоко", "Банан", "Ананас"].reduce((acc, el) => {
  if (el[0].toLowerCase() === "а") {
    return [...acc, el];
  }
  return acc;
}, []);

["Яблоко", "Банан", "Ананас"].forEach(
  (el, i, arr) => (arr[i] = `${i + 1}: ${el};`)
);
