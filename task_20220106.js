//TASK 1
const ipsBetween = function (startIp, lastIp) {
  let startArr = startIp.split(".");
  let lastArr = lastIp.split(".");
  let result = 0;
  for (let i = 0; i < 4; i++) {
    result += (lastArr[i] - startArr[i]) * 256 ** (3 - i);
  }
  return result;
};
// console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
// console.log(ipsBetween("10.0.0.0", "10.0.1.0"));
// console.log(ipsBetween("20.0.0.10", "20.0.1.0"));

//TASK 2
const MORSE = {
    '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F',
    '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L',
    '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R',
    '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
    '-.--': 'Y', '--..': 'Z',
    '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
    '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
    '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'", '-.-.--': '!',
    '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&', '---...': ':',
    '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_',
    '.-..-.': '"', '...-..-': '$', '.--.-.': '@', '...---...': 'SOS'
  };
const decodeMorse = function(input){
    function decodeMorseLetter(phrase) {
    console.log(phrase);
      return MORSE[phrase];
    }
    function decodeMorseWord(word) {
        console.log(word);
      return word.split(' ').map(decodeMorseLetter).join('');
    }
    return input.trim().split('   ').map(decodeMorseWord).join(' ');
  }
//  console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));

//TASK 3

//TASK 4
const meeting = function (roomsArr, chairsRequired){

}


console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4)); 
console.log(meeting([['XXX', 1], ['XXXXXX', 6], ['X', 2], ['XXXXXX', 8], ['X', 3], ['XXX', 1]], 5));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 0));
console.log(meeting([['XX', 2], ['XXXX', 6], ['XXXXX', 4]], 4));

//TASK 5

//TASK 6

//TASK 7

