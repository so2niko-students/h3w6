//1
const NUMBERS_Name_RUS = {
    1: 'один',
    2: 'два',
    3: 'три',
    4: 'четыре',
    5: 'пять',
    6: 'шесть',
    7: 'семь',
    8: 'восемь',
    9: 'девять',
    10: 'Десять',
    11: 'Одиннадцать',
    12: 'Двенадцать',
    13: 'Тринадцать',
    14: 'Четырнадцать',
    15: 'Пятнадцать',
    16: 'Шестнадцать',
    17: 'Семнадцать',
    18: 'Восемнадцать',
    19: 'Девятнадцать',
    20: 'Двадцать',
    30: 'Тридцать',
    40: 'Сорок',
    50: 'Пятьдесят',
    60: 'Шестьдесят',
    70: 'Семьдесят',
    80: 'Восемьдесят',
    90: 'Девяносто'

}

const numberToString = function(number) {
    if (String(number).length != 2) {
        return new Error('Incorect data!');
    }
    if (NUMBERS_Name_RUS[number]) {
        return NUMBERS_Name_RUS[number];
    }

    return String(number).split('').map((digit, i, arr) => {
        let currentDigit = arr[i] = digit + '0'.repeat(arr.length - 1 - i)
        return NUMBERS_Name_RUS[currentDigit]
    }).join(' ');

}


// console.log(numberToString(81))
//2

const rowStatistics = function(string) {
    let statistics = {
        letters: 0,
        numbers: 0,
        symbols: 0
    };

    if (string.match(/\d/g) != null) {
        statistics.numbers = string.match(/\d/g).length;
    }
    if (string.match(/[a-zA-Z]/g) != null) {
        statistics.letters = string.match(/[a-zA-Z]/g).length;

    }
    if (statistics.numbers + statistics.letters < string.length) {
        statistics.symbols = string.length - (statistics.numbers + statistics.letters);
    }

    return statistics;
}

// console.log(rowStatistics('asdasd'))
//3
const transformString = function(string) {
    return string
        .split('')
        .map(element => {
            if (element.match(/\d/)) {
                return '_';
            }
            if (element.match(/[a-z]/)) {
                return element.toUpperCase();
            }
            return element.toLowerCase();
        })
        .join('')
}


// console.log(transformString('asdasd12  @@@@3AS D____'))


//reduce tasks

//4
const getCapitalLettersFromsentence = function(sentence) {
    const getCapitalLetter = (string) => string.slice(0, 1).toUpperCase();
    return sentence.split(' ').reduce((arr, item, index) => {
        if (item != '') {
            arr[index] = getCapitalLetter(item);
        }
        return arr;
    }, [])
}

//5
const findWordsStartingLetter = function(sentence, letter) {
    return sentence.split(' ').reduce((arr, word, index) => {
        if (word.toLowerCase().split('')[0] == letter.toLowerCase()) {
            arr.push(word)
        }
        return arr
    }, [])
}


//6
const getListOfWords = function(sentence) {
    return sentence.split(' ').reduce((arr, word, index) => {
        arr.push(`${index + 1}: ${word}`);
        return arr;
    }, [])
}

console.log(getListOfWords('Asdasd asdasd asd'))



// 7
const repeatNum = (num, amount) => {
    let res = []
    for (let i = 0; i < amount; i++) {
        res.push(num)
    }
    return res
}
const getNextPatrition = function(prePatrition) {
        if (prePatrition.length == 1) return false
        let minIndex = 0;
        for (let i = 0; i < prePatrition.length - 1; i++) {
            if (prePatrition[i] < prePatrition[minIndex]) {
                minIndex = i
            }
        }
        prePatrition[minIndex] += 1;
        prePatrition[prePatrition.length - 1] -= 1;
        if (prePatrition[prePatrition.length - 1] == 0) {
            prePatrition.pop()
        }
        let sum = prePatrition.reduce((acc, item, index) => {
            if (index < minIndex + 1) return acc
            return acc += item
        }, 0)
        return [...prePatrition.slice(0, minIndex + 1), ...repeatNum(1, sum)]
    }
    // console.log(getNextPatrition(ferstPatrition))

const getListOfPatrition = function(number) {
    let variantOfPatrition = [],
        currentPatrition = [];
    for (let i = 0; i < number; i++) {
        currentPatrition.push(1)
    }
    do {
        variantOfPatrition.push([...currentPatrition])
        currentPatrition = getNextPatrition(currentPatrition)
    }
    while (currentPatrition != false)


    //     while (currentPatrition != false) {

    //     }
    return variantOfPatrition.reverse()
}


const multiplyArr = (arr) => arr.reduce((acc, element) => element > 0 ? acc * element : acc, 1);


const findPartMaxProd = function(num) {
        let listOfPatrition = getListOfPatrition(num);
        let maxProduct = 0;
        return listOfPatrition.reduce((arr, element) => {
            let currentProduct = multiplyArr(element);
            if (maxProduct < currentProduct) {
                maxProduct = currentProduct
                arr = [element, maxProduct]
                return arr
            }
            if (maxProduct == currentProduct) {
                arr = [...arr.slice(0, arr.length - 1), element, maxProduct]
            }
            return arr
        }, [])
    }
    // console.log(findPartMaxProd(10))