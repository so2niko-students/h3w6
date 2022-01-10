"use strict";

// Task 1
const ipsBetween = (ip1, ip2) => {
  let count = 0;
  const aIp1 = ip1.split(".");
  const aIp2 = ip2.split(".");
  for (let i = 0; i < 4; i++) {
    count += (aIp1[i] - aIp2[i]) * 256 ** (3 - i);
  }
  return count;
};

// Task 2
const MORSE_CODE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "|": " ",
};

const decodeMorse = (data) => {
  const words = data.split(" ");
  return words
    .map((word) => {
      return word
        .split()
        .map((letter) => MORSE_CODE[letter])
        .join(" ");
    })
    .join("");
};

// Task 3
function isSolved(board) {
  function checkHor() {
    let res;
    board.forEach(function (item) {
      if (
        item[0] == item[1] &&
        item[0] == item[2] &&
        item[1] == item[2] &&
        item[0] != 0
      )
        res = item[0];
    });
    return res;
  }

  function checkVer() {
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] == board[1][i] &&
        board[1][i] == board[2][i] &&
        board[2][i] == board[0][i] &&
        board[0][i] != 0
      )
        return board[0][i];
    }
  }

  function checkA1() {
    if (
      (board[0][0] == board[1][1] &&
        board[1][1] == board[2][2] &&
        board[2][2] == board[0][0]) ||
      (board[0][2] == board[1][1] &&
        board[1][1] == board[2][0] &&
        board[2][0] == board[0][2])
    )
      return board[1][1];
  }

  function gameOver() {
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++) if (board[i][j] == 0) return -1;
    return 0;
  }

  return checkHor() || checkVer() || checkA1() || gameOver();
}

// Task 5
const tickets = (peopleInLine) => {
  let a25 = 0;
  let a50 = 0;
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      a25 += 1;
    }
    if (peopleInLine[i] === 50) {
      a25 -= 1;
      a50 += 1;
    }
    if (peopleInLine[i] === 100) {
      if (a50 === 0 && a25 >= 3) {
        a25 -= 3;
      } else {
        a25 -= 1;
        a50 -= 1;
      }
    }
    if (a25 < 0 || a50 < 0) {
      return "NO";
    }
  }
  return "YES";
};
