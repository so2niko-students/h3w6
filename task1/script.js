//1
function numberToStr(number) {
    let result = '';
    const NumberInWords = {
        0: 'ноль',
        10: 'десять',
        100: 'сто',
        1: 'один',
        11: 'одиннадцать',
        20: 'двадцать',
        200: 'двести',
        2: 'два',
        12: 'двенадцать',
        30: 'тридцать',
        300: 'триста',
        3: 'три',
        13: 'тринадцать',
        40: 'сорок',
        400: 'четыреста',
        4: 'четыре',
        14: 'четырнадцать',
        50: 'пятьдесят',
        500: 'пятьсот',
        5: 'пять',
        15: 'пятнадцать',
        60: 'шестьдесят',
        600: 'шестьсот',
        6: 'шесть',
        16: 'шестнадцать',
        70: 'семьдесят',
        700: 'семьсот',
        7: 'семь',
        17: 'семнадцать',
        80: 'восемьдесят',
        800: 'восемьсот',
        8: 'восемь',
        18: 'восемнадцать',
        90: 'девяносто',
        900: 'девятьсот',
        9: 'девять',
        19: 'девятнадцать'
    }

    let arr = [];
    let rank = number.length - 1
    for (let i = 0, j = 10 ** rank; i < number.length; i++, j = j / 10) {
        arr.push(number[i] * j)

    }

    if (arr[arr.length - 2] < 20) {
        arr[arr.length - 2] += arr[arr.length - 1];
        arr.pop();
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0) {
            result += NumberInWords[arr[i]] + " ";

        }

    }
    return result;

}


//2
function getStaticStr(str) {
    const letters = str.match(/[a-zA-Z]/gi).length;
    const numbers = str.match(/[0-9]/gi).length;
    const symbols = str.length - (letters + numbers);
    return { 'letters': letters, 'numbers': numbers, 'symbols': symbols }
}


//3
function chengeStr(str) {

    const checkUpper = /[A-Z]/;
    const checkLow = /[a-z]/;
    const checkNumner = /[\d]/;
    let result = str.split('').reduce((acc, item) => {

        if (checkUpper.test(item)) {
            return acc.concat(item.toLowerCase());
        }
        if (checkLow.test(item)) {
            return acc.concat(item.toUpperCase());
        }
        if (checkNumner.test(item)) {
            return acc.concat('_');
        }
        return acc.concat(item);

    }, '');

    return result;

}