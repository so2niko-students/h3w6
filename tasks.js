//Task #1 Count IP Addresses 
function ipsBetween(firstIp, secondIp) {
    // (a * (256*3)) + (b * (256*2)) + (c * 256)) + d + 1
    let result = [];
    let ip2bit = [firstIp, secondIp];

    ip2bit.forEach(item => {
        let arr = item.split('.');
        let arrNum = arr.map(Number);
        const numberIp = (arrNum[0] * (256 ** 3)) + (arrNum[1] * (256 ** 2)) + (arrNum[2] * 256) + arrNum[3];
        result.push(numberIp);

    })

    return (result[1] - result[0]);
}

//Task #2 Morse
function decodeMorse(message) {

    const alphabet = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "-.-.--": "!",
        ".-.-.-": ".",
        "--..--": ",",

    };
    let result = [];
    message.trim().split("   ").map(function(word) {
        word.split(" ").map(function(letter) {
            result.push(alphabet[letter]);
        });
    });
    return result.join("");



}

//Task #3 Tic-Tac-Toe Checker 
function ticTacToeChek(arr) {
    let result = -1;


    // horizontal check 
    for (let i = 0; i < arr.length; i++) {
        let uniqueArr = [...new Set(arr[i])];
        if (uniqueArr.length == 1 && uniqueArr[0] != 0) {
            result = uniqueArr[0];
            break;
        }
    }

    //vertical check
    if (result == -1) {

        for (let i = 0; i < arr.length; i++) {
            let rowArr = []
            for (let j = 0; j < arr[i].length; j++) {

                rowArr.push(arr[j][i])
            }
            let uniaueCollum = [...new Set(rowArr)];
            if (uniaueCollum.length == 1 && uniaueCollum[0] != 0) {
                result = uniaueCollum[0];
                break;
            }
        }

    }
    //diagonal check
    if (result == -1) {
        let arrLetfDiagonal = [];
        let arrRightDiagonal = [];
        for (let i = 0, j = 0; i < arr.length; i++, j++) {
            arrRightDiagonal.push(arr[i][j])
        }

        for (let i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
            arrLetfDiagonal.push(arr[i][j])
        }
        const setLeftDiagonal = [...new Set(arrLetfDiagonal)];
        const setRightDiagonal = [...new Set(arrRightDiagonal)];
        if (setLeftDiagonal.length == 1 && setLeftDiagonal[0] != 0) {
            result = setLeftDiagonal[0];
        }
        if (setRightDiagonal.length == 1 && setRightDiagonal[0] != 0) {
            result = setRightDiagonal[0];
        }
    }




    return result;

}

//Task #4 Find a Chair
function meeting(roomsArr, chairs) {
    let result = [];

    if (chairs == 0) {
        return 'Game On';
    }

    for (const iterator of roomsArr) {
        if (result.reduce((a, b) => a + b, 0) === chairs) {
            break;
        }
        if (iterator[0].length < iterator[1]) {
            result.push(iterator[1] - iterator[0].length);
        } else {
            result.push(0);
        }
    }
    if (result.reduce((a, b) => a + b, 0) == chairs) {
        return result;
    }
    if (result.reduce((a, b) => a + b, 0) < chairs) {
        return 'Not enough!';
    }


}

//Task #5 Vasya - Clerk
function tickets(clientsMoneyArr) {

    const priceTicket = 25;
    let cashRegister = {
        25: 0,
        50: 0,
        100: 0,
    }

    for (const element of clientsMoneyArr) {
        if (element == priceTicket) {
            cashRegister[element] += 1;
        } else {

            let change = element - priceTicket;
            while (change >= 25) {
                if (100 <= change && cashRegister[100] > 0) {
                    cashRegister[100] -= 1;
                    change -= 100;
                    continue;
                } else if (50 <= change && cashRegister[50] > 0) {
                    cashRegister[50] -= 1;
                    change -= 50;
                    continue;
                } else if (25 <= change && cashRegister[25] > 0) {
                    cashRegister[25] -= 1;
                    change -= 25;
                    continue;
                } else {
                    break;
                }
            }
            if (change == 0) {
                cashRegister[element] += 1;
            } else {
                return "NO"
            }
        }

    }

    return "YES"

}
//Task #6 Quipu Calculator
function calculate(str) {

    const mathOperations = {
        '+': (x, y) => Number(x) + Number(y),
        '-': (x, y) => x - y,
        '*': (x, y) => x * y,
        '/': (x, y) => x / y,

    }

    const separators = ['(\\\+', '-',
        '\\*', '/)',
    ];

    // convert from the numbering system of the ancient Incas.
    let resultFromAncientIncas = []
    const arr = str.split(new RegExp(separators.join('|'), 'g'));

    for (let i = 0; i < arr.length; i++) {

        if (arr[i][0] != '@') {
            resultFromAncientIncas.push(arr[i]);
            continue;
        }

        if (arr[i].slice(-2) == '~~') {
            arr[i] = arr[i].slice(0, -1)
        }

        let knotArr = arr[i].split('~');


        // a.pop()
        let arrNumber = []
        knotArr.forEach(element => {
            arrNumber.push(element.length)
        });
        resultFromAncientIncas.push(arrNumber.join(''))
    }
    //get result of math operation
    let resultMathOperation = mathOperations[resultFromAncientIncas[1]](resultFromAncientIncas[0], resultFromAncientIncas[2]);

    //convert reuslt of math operation to arr 
    let arrResultMatOperation = String(resultMathOperation).split('').map(Number);

    //convert to numbering system of the ancient Incas
    let numberAncientIncas = [];
    arrResultMatOperation.forEach(element => {
        if (element == 0) {
            numberAncientIncas.push('~')
        }
        numberAncientIncas.push('@'.repeat(element));
    });

    return numberAncientIncas.join('~')
}
//task #7 Find the Partition with Maximum Product Value
//!!! in Progres
function findPartMaxProd(num) {
    let resultArr = [];
    let arr = [num];
    while (arr[0] > 1) {
        resultArr.push([...arr]);


        if (arr.length == 1) {
            arr[0] -= 1;
            arr.push(1);
            continue;
        }
        for (let i = arr.length - 1; i >= 0; i--) {
            if (arr[i] > 1 && i > 0) {

                if (arr[i] - 1 == 1 && arr.length < 3) {
                    arr[i] -= 1;
                    arr.push(1);
                    break;
                } else {
                    arr[i] -= 1;
                    arr.push(1);

                    let sum = 0;
                    let someArr = arr.slice(i);

                    for (let j = i + 1; j < arr.length; j++) {
                        sum += arr[j]
                    }
                    someArr.push(sum)
                    arr = someArr;


                }




            }
            if (i == 0) {
                arr[i] -= 1;
                arr.push(1);
                let sum = 0;
                let someArr = [];
                someArr.push(arr[i])




                for (let j = 1; j < arr.length; j++) {
                    sum += arr[j]

                    if (arr[i] == sum) {
                        someArr.push(sum)
                        sum = 0;
                    }

                }
                if (sum != 0) {
                    someArr.push(sum)
                }



                arr = someArr;
            }


        }

    }
    return arr;
}





module.exports.ipsBetween = ipsBetween;
module.exports.decodeMorse = decodeMorse;
module.exports.ticTacToeChek = ticTacToeChek;
module.exports.meeting = meeting;
module.exports.tickets = tickets;
module.exports.calculate = calculate;
module.exports.findPartMaxProd = findPartMaxProd;