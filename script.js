//Task 1
function ipsBetween(ip1, ip2) {
   const apiToDecimal = (ip) => {
      let i = 3;
      let array = ip.split('.').map(el => Number(el)).reduce((acc, el) => acc + el * (256 ** i--), 0);
      return array;
   };
   return apiToDecimal(ip2) - apiToDecimal(ip1);
}

//Task 2
let morseCode = {
   "0": "-----",
   "1": ".----",
   "2": "..---",
   "3": "...--",
   "4": "....-",
   "5": ".....",
   "6": "-....",
   "7": "--...",
   "8": "---..",
   "9": "----.",
   "a": ".-",
   "b": "-...",
   "c": "-.-.",
   "d": "-..",
   "e": ".",
   "f": "..-.",
   "g": "--.",
   "h": "....",
   "i": "..",
   "j": ".---",
   "k": "-.-",
   "l": ".-..",
   "m": "--",
   "n": "-.",
   "o": "---",
   "p": ".--.",
   "q": "--.-",
   "r": ".-.",
   "s": "...",
   "t": "-",
   "u": "..-",
   "v": "...-",
   "w": ".--",
   "x": "-..-",
   "y": "-.--",
   "z": "--..",
   ".": ".-.-.-",
   ",": "--..--",
   "?": "..--..",
   "!": "-.-.--",
   "-": "-....-",
   "/": "-..-.",
   "@": ".--.-.",
   "(": "-.--.",
   ")": "-.--.-"
};

function decoder(inputCode) {
   let result = '';
   let letters = inputCode.split('   ').map(word => word.split(' '));
   for (let j = 0; j < letters.length; j++) {
      for (let i = 0; i < letters[j].length; i++) {
         result += getKeyByValue(morseCode, letters[j][i]);
      }
      result += ' ';
   }
   return result.toUpperCase();
}

function getKeyByValue(object, value) {
   return Object.keys(object).find(key => object[key] === value);
}

//Task 3
function tictactoe(array2d) {
   for (const array1d of array2d) {
      if (array1d.some(el => el === 0)) {
         return -1;
      }
   }
   return (checkWin(1, array2d) || checkWin(2, array2d) || 0)
}

function checkWin(num, array2d) {
   const triple = `${num}${num}${num}`
   if (array2d[0].join('') === triple ||
      array2d[1].join('') === triple ||
      array2d[2].join('') === triple ||
      String(array2d[0][0]) + array2d[1][0] + array2d[2][0] === triple ||
      String(array2d[0][1]) + array2d[1][1] + array2d[2][1] === triple ||
      String(array2d[0][2]) + array2d[1][2] + array2d[2][2] === triple ||
      String(array2d[0][0]) + array2d[1][1] + array2d[2][2] === triple ||
      String(array2d[0][2]) + array2d[1][1] + array2d[2][0] === triple) {
      return num;
   }
}

//Task 4
function findChair(rooms, need) {
   if (need <= 0) {
      return 'Game On';
   }
   let result = [];
   for (let [used, all] of rooms) {
      if (all - used.length > 0 && need > 0) {
         all = Math.min(all - used.length, need)
         result.push(all);
         need -= all;
         continue;
      }
      if (all - used.length <= 0 && need > 0) {
         result.push(0);
      }
   }
   return (need > 0 ? 'Not enough!' : result);
}

//Task 5
function giveChange(billsArray) {
   let bill25 = 0, bill50 = 0;
   for (const bill of billsArray) {
      if (bill === 25) {
         bill25++;
      }
      if (bill === 50) {
         bill25--;
         bill50++;
      }
      if (bill === 100) {
         if (bill25 >= 3) {
            bill25 -= 3;
         }
         else {
            bill50--;
            bill25--;
         }
      }
      if (bill25 < 0 || bill50 < 0) {
         return 'NO';
      }
   }
   return 'YES';
}

//Task 6
function calc(quipu) {
   let number = eval(quipu.replace(/@+/g, dogs => dogs.length).replace(/~(?=~)/g, 0).replace(/~/g, ''));
   let result = [...'' + number].map(el => '@'.repeat(el)).join('~');
   if (number % 10 === 0) {
      result += '~';
   }
   return result;
}

//Task 7
function maxProd(n) {

}