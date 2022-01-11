// ========================================================================
// Task 1.1
// ========================================================================

const NUMBERS_AKA_STRINGS = {
  '1': 'один',
  '2': 'два',
  '3': 'три',
  '4': 'четыре',
  '5': 'пять',
  '6': 'шесть',
  '7': 'семь',
  '8': 'восемь',
  '9': 'девять',
  '10': 'Десять',
  '11':'Одиннадцать',
  '12': 'Двенадцать',
  '13': 'Тринадцать',
  '14': 'Четырнадцать',
  '15': 'Пятнадцать',
  '16': 'Шеснадцать',
  '17': 'Семнадцать',
  '18': 'Восемнадцать',
  '19': 'Девятнадцать',
  '20': 'Двадцать',
  '30': 'Тридцать',
  '40': 'Сорок',
  '50': 'Пятьдесят',
  '60': 'Шестьдесят',
  '70': 'Семьдесят',
  '80': 'Восемьдесят',
  '90': 'Девяносто',
}
function stringAkaNumber(num){
  const secondNumber = num % 10;
  const decimal = num - secondNumber;

  if (!secondNumber) return `${NUMBERS_AKA_STRINGS[num]}`;
  if (num < 20) return `${NUMBERS_AKA_STRINGS[num]}`;

  return `${NUMBERS_AKA_STRINGS[decimal]} ${NUMBERS_AKA_STRINGS[secondNumber]}`;
}

// console.log(stringAkaNumber(17));

// ========================================================================
// Task 1.2
// ========================================================================

const REG_EX_NUM = /[0-9]/g;
const REG_EX= /[A-Za-z]/g;

function stringInfo(str){
  const stats = {
    lettersCounter: null,
    numbersCounter: null,
    symbolsCounter: null,
  }

  stats.lettersCounter = str.match(REG_EX).length;
  stats.numbersCounter = str.match(REG_EX_NUM).length;
  stats.symbolsCounter = str.length -  stats.lettersCounter - stats.numbersCounter;

  return `This string includes: ${stats.lettersCounter} letters, ${stats.numbersCounter} digits, ${stats.symbolsCounter} symbols`;
}

// console.log(stringInfo('Some< string> 2to~ count- 4'));

// ========================================================================
// Task 1.3
// ========================================================================
function swapCase(str){
  let swapedStr = '';
  for (let i = 0; i < str.length; i++){
    str[i] !== str[i].toLowerCase() ? swapedStr += str[i].toLowerCase() : swapedStr += str[i].toUpperCase();
  }
  return swapedStr.replace(REG_EX_NUM, '_');
}

// console.log(swapCase('HeLlO 1wOrLd5'));

// ========================================================================
// Task 2
// ========================================================================
const lights = document.querySelectorAll('div.light');
const btn = document.querySelector('.btn');
let index = 0;

function lightsOff() {
  lights.forEach(light => light.classList.remove(`active-${light.dataset.color}`));
}

function lightsOn(light, index){
  if (index === 0) {
    light.classList.add(`active-red`);
  }
  if (index === 1) {
    light.classList.add(`active-yellow`);
  }
  if (index === 2) {
    light.classList.add(`active-green`);
  }
}

function handleClick(){
  if (index === lights.length) {
    index = 0;
  }
  lightsOff();
  lightsOn(lights[index], index);
  index++;
}
btn.addEventListener('click', handleClick);

// ========================================================================
// Task 3
// ========================================================================


// const firstLetters = ['Apples', 'Bananas', 'Pineapple'].map(el => el[0]);
const firstLetters = ['Apples', 'Bananas', 'Pineapple'].reduce((acc, el) => acc.concat(el[0]), []);
const firstLetters2 = ['Apples', 'Bananas', 'Pineapple'].reduce((acc, el) => [...acc, el[0]], []);

// const arrFilterToLowerCase = ['Apples', 'Bananas', 'Pineapple'].filter(el => el[0].toLowerCase() === 'a');
const arrFilterToLowerCase = ['Apples', 'Bananas', 'Pineapple'].reduce((acc, el) => {
  return el[0].toLowerCase() === 'a' ? [...acc, el] : acc;
}, []);

const arrForEachElementChange = ['Apples', 'Bananas', 'Pineapple'].reduce((acc, el, i) => acc.concat(`${i + 1}: ${el};`), []);



// console.log(arrForEachElementChange);