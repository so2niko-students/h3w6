// ========================================================================
// Task 1
// ========================================================================
const calc = (index, ip1, ip2, num = 1) => (ip2[index] - ip1[index]) * num;

function countIpsBetween(firstIp, lastIp) {
  const firstSpread = firstIp.split('.');
  const lastSpread = lastIp.split('.');

  return calc(0, firstSpread, lastSpread, 256 ** 3) + calc(1, firstSpread, lastSpread, 256 ** 2) + calc(2, firstSpread, lastSpread, 256) + calc(3, firstSpread, lastSpread);
}

// console.log(countIpsBetween("10.0.0.0", "10.0.0.50"));
// console.log(countIpsBetween("10.0.0.0", "10.0.1.0"));
// console.log(countIpsBetween("20.0.0.10", "20.0.1.0"));

// ========================================================================
// Task 2
// ========================================================================
const ALPHABET = {
  "-----":"0",
  ".----":"1",
  "..---":"2",
  "...--":"3",
  "....-":"4",
  ".....":"5",
  "-....":"6",
  "--...":"7",
  "---..":"8",
  "----.":"9",
  ".-"   :"a",
  "-..." :"b",
  "-.-." :"c",
  "-.."  :"d",
  "."    :"e",
  "..-." :"f",
  "--."  :"g",
  "...." :"h",
  ".."   :"i",
  ".---" :"j",
  "-.-"  :"k",
  ".-.." :"l",
  "--"   :"m",
  "-."   :"n",
  "---"  :"o",
  ".--." :"p",
  "--.-" :"q",
  ".-."  :"r",
  "..."  :"s",
  "-"    :"t",
  "..-"  :"u",
  "...-" :"v",
  ".--"  :"w",
  "-..-" :"x",
  "-.--" :"y",
  "--.." :"z",
  "/"    :" ",
  "-.-.--":"!",
  ".-.-.-":".",
  "--..--":","
};

function decodeMorse(str) {
  const words = str.trim().split('   ');
  const letters = words.map(el => el.split(' '));

  let sentence = [];
  letters.forEach(letter => {
    letter.map(el => sentence.push(ALPHABET[el]));
    sentence.push(' ')
  });

  return sentence.join('').trim().toUpperCase();
}

//  Task 2 version 2 - cool
const decodeLetter = letter => {
  return MORSE_CODE[letter];
}

const decodeWord = word => {
  return word.split(' ').map(decodeLetter).join('');
}

const decodeMorse2 = morseCode => {
  return morseCode.trim().split('   ').map(decodeWord).join(' ');
}

// console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

// ========================================================================
// Task 3
// ========================================================================
function ticTacToeChecker(board){
  for(let i = 0; i < board.length; i++){
   if (board[i].every(el => el === 1)) return 'player X won!'
   if (board[i].every(el => el === 2)) return 'player Y won!'
   if (board.every(el => el[i] === 1)) return 'player X won!'
   if (board.every(el => el[i] === 2)) return 'player Y won!'
   if (board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1) return 'player X won!'
   if (board[0][0] === 2 && board[1][1] === 2 && board[2][2] === 2) return 'player Y won!'
   if (board[2][0] === 1 && board[1][1] === 1 && board[0][2] === 1) return 'player X won!'
   if (board[2][0] === 2 && board[1][1] === 2 && board[0][2] === 2) return 'player Y won!'
  }
  return -1;
}

function tucTacToeChecker2(board){
  const flatBoard = board.flat();
  const lines = '012,345,678,036,147,258,048,246'.split(',')
                                                    .map(str => str.split(''))
                                                    .map(indices => indices
                                                    .map(i => flatBoard[i])
                                                    .join(''))

  for (const line of lines) {
    if (line === 111) return 'player X won!';
    if (line === 222) return 'player Y won!';
  }
  return -1;
}

// console.log(ticTacToeChecker([[0, 2, 1],
//                               [1, 2, 2],
//                               [1, 2, 1]]));

// ========================================================================
// Task 4
// ========================================================================
const sumOfChairs = (arr) => arr.reduce((a, b) => a + b, 0);

function meeting(meetingRooms, needOfChairs){
  const freeChairs = [];
  if (!needOfChairs) return "Game on";

  for (const room of meetingRooms) {
    if (sumOfChairs(freeChairs) >= needOfChairs) return freeChairs;

    const usedChairs = room[0].length;
    let notUsed = room[1] - usedChairs;

    if (notUsed < 0) notUsed = 0;
    if (!usedChairs) freeChairs.push(0);

    freeChairs.push(notUsed);
  }
  return sumOfChairs(freeChairs) < needOfChairs ? 'Not enough!' : freeChairs;
}


// ========================================================================
// Task 5
// ========================================================================
function tickets(payment){
  const PRICE = 25;
  const register = {
    '25' : 0,
    '50' : 0,
  }

  if (payment[0] > PRICE) return 'NO';

  for(let i = 0; i < payment.length; i++){
    if (payment[i] === 25) register[payment[i]]++;
    if (payment[i] === 50) {
      if (!register['25']) return 'NO';
      register['25']--;
      register[payment[i]]++;
    }
    if (payment[i] === 100) {
        if (register['25'] < 1) return 'NO';
        if (register['50'] < 1 && register['25'] < 3) return 'NO';
    }
  }

  return 'YES';
}

// ========================================================================
// Task 6
// ========================================================================
function quipuToDecimal (quipu) {
  const digits = quipu.split('~').reverse();
  let decimal = 0;
  let place = 1;

  if (quipu.lastIndexOf('@') !== quipu.length - 1) {
      digits.shift();
  }

  for (let i = 0; i < digits.length; i++) {
      decimal += digits[i].length * place;
      place *= 10;
  }

  return decimal.toString();
}

function decimalToQuipu(decimal){
  const quipu = [];

  let digits = decimal.toString();

  for (let d of digits) {
    quipu.push('@'.repeat(d));
  }

  digits = quipu.join('~');

  if (digits.lastIndexOf('@') !== digits.length - 1) digits += '~';

  return digits;
}

function calculate(quipu){
  const REG_EX = /([\+\-\*\/\(\)])/;
  const parts = quipu.split(REG_EX);

  for (let i = 0; i < parts.length; i++){
    if (!'*/-+()'.includes(parts[i])){
      parts[i] = quipuToDecimal(parts[i]);
    }
  }

  return decimalToQuipu(eval(parts.join('')));
}


// ========================================================================
// Task 7
// ========================================================================

const partitions = [];
function createPartitions(number, maxValue, storage, partitions) {
  if (number === 0) {
    partitions.push(storage);
  } else {
    if (maxValue > 1)
      createPartitions(number, maxValue-1, storage, partitions);
    if (maxValue <= number)
      createPartitions(number-maxValue, maxValue, [maxValue, ...storage], partitions);
  }
}

createPartitions(10, 10, [], partitions);

function multiplyAll(partitions){
  let maxMultiply = null;
  let targetArr = [];

  for (let i = 0; i < partitions.length; i++) {
    let temp = partitions[i].reduce((a, b) => a * b);
    if (temp > maxMultiply) {
      maxMultiply = temp;
      targetArr.pop();
      targetArr.push(partitions[i]);
    }
  }
  for (let i = 0; i < partitions.length; i++){
    let temp = partitions[i].reduce((a, b) => a * b);
    if (temp === maxMultiply) {
      targetArr.push(partitions[i]);
    }
  }
  return targetArr;
}

// console.log(multiplyAll(partitions));

const URL = "https://gist.githubusercontent.com/mohayonao/094c71af14fe4791c5dd/raw/8399262545d0d88507ce42069b0b50043f0eddbc/morse-code.json";
async function getAlphabet(url){
  const resp = await fetch(url);
  const data = await resp.json();

  console.log(data);
}

getAlphabet(URL);