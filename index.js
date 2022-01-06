"use strict";

// Task 1
const calcSumOfMins = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i][0];
    const innerArrLength = arr[i].length;
    for (let j = 1; j < innerArrLength; j++) {
      if (arr[i][j] < min) {
        min = arr[i][j];
      }
    }
    sum += min;
  }
  return sum;
};

// Task 2
const findTwoMaxValues = (arr) => {
  if (arr.length < 2) {
    return `Incorrect input values`;
  }
  arr.sort((a, b) => b - a);
  return [arr[0], arr[1]];
};

// Task 3
const findShortestWord = (str) => {
  const wordsArr = str.split(" ");
  let shortestWordLength = wordsArr[0].length;
  for (let i = 1; i < wordsArr.length; i++) {
    if (wordsArr[i].length < shortestWordLength) {
      shortestWordLength = wordsArr[i].length;
    }
  }
  return shortestWordLength;
};

// Task 4
const sortNumberedWords = (str) => {
  const wordsArr = str.split(" ");
  const n = wordsArr.length;
  const sortedArr = [...Array(n)];
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < n; i++) {
      if (wordsArr[i].includes(j + 1)) {
        sortedArr[j] = wordsArr[i];
        break;
      }
    }
  }
  return sortedArr.join(" ");
};
