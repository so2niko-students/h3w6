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
    let ssdfsdf = number.length - 1
    for (let i = 0, j = 10 ** ssdfsdf; i < number.length; i++, j = j / 10) {
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
console.log(numberToStr('35'))
console.log(numberToStr('27'))
console.log(numberToStr('25'))
console.log(numberToStr('11'))
console.log(numberToStr('9'))
console.log(numberToStr('19'))
console.log(numberToStr('101'))
console.log(numberToStr('111'))

//2
function getStaticStr(str) {
    //й: количество букв, количество цифр и количество других знаков.
    const letters = str.match(/[a-zA-Z]/gi).length;
    const numbers = str.match(/[0-9]/gi).length;
    const symbols = str.length - (letters + numbers);
    return { 'letters': letters, 'numbers': numbers, 'symbols': symbols }
}


//3
function chengeStr() {



    function replacer(match, p1, p2, p3, offset, string) {
        // p1 - не цифры, p2 - цифры, p3 - не буквы и не цифры
        return [p1, p2, p3].join(' - ');
    }
    var newString = 'abc345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
}
chengeStr();