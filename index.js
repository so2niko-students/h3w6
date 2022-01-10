// Task 1

function ipsBetween(firstIP, secondIP) {

	const calc = (total, curent, index) => {
    	total += Number(curent) * (256 ** (3 - index));
    	return total; 
    };

    const firstNum = firstIP.split('.').reduce(calc, 0);
    const secondtNum = secondIP.split('.').reduce(calc, 0);

    return firstNum - secondtNum

 };

ipsBetween('10.0.0.0', '10.0.0.50');
ipsBetween("10.0.0.0", "10.0.1.0");
ipsBetween("20.0.0.10", "20.0.1.0");

// Task 2

function decodeMorse(morseCode) {
	const alphabet = { 
	    "-----":  "0",
        ".----":  "1",
        "..---":  "2",
        "...--":  "3",
        "....-":  "4",
        ".....":  "5",
        "-....":  "6",
        "--...":  "7",
        "---..":  "8",
        "----.":  "9",
        ".-": 	  "A",
        "-...":   "B",
        "-.-.":   "C",
        "-..":    "D",
        ".":      "E",
        "..-.":   "F",
        "--.":    "G",
        "....":   "H",
        "..":     "I",
        ".---":   "J",
        "-.-":    "K",
        ".-..":   "L",
        "--":     "M",
        "-.":     "N",
        "---":    "O",
        ".--.":   "P",
        "--.-":   "Q",
        ".-.":    "R",
        "...":    "S",
        "-":      "T",
        "..-":    "U",
        "...-":   "V",
        ".--":    "W",
        "-..-":   "X",
        "-.--":   "Y",
        "--..":   "Z",
        "-.-.--": "!",
        ".-.-.-": ".",
        "--..--": ",",
	};

  return morseCode
    .split('   ')
    .map(
      a => a
        .split(' ')
        .map(
          b => alphabet[b]
        ).join('')
    ).join(' ');
}

const decoded = decodeMorse('.... . -.-- .--- ..- -.. .');
console.log(decoded);

// Task 3

const board =  [[0, 0, 1],
 				[0, 1, 2],
 				[2, 1, 0]];

function checkWinner(board) {

	// игра не закончена
	for (let i = 0; i <= 2; i++) {
        for (let j = 0; j <= 2; j++) {
            if (board[i][j] === 0) {
                return -1;
            } else {
            	for (let i = 0; i <= 2; i++) {
					// горизонталь
					if (board[i][0] === board[i][1] && 
						board[i][0] === board[i][2] && 
						board[i][0] !==0) {
						return board[i][0];
					};
					
					// вертикаль
					if (board[0][i] == board[1][i] &&
			            board[0][i] == board[2][i] &&
			            board[0][i] !== 0) {
						return board[0][i];
					};

					// диагональ 1
					if (board[0][0] == board[1][1] &&
				    	board[0][0] == board[2][2] &&
				    	board[0][0] !== 0) {
						return board[0][0];
					};

					// диагональ 2
					if (board[2][0] == board[1][1] &&
				    	board[2][0] == board[0][2] &&
				    	board[2][0] !== 0) {
						return board[2][0];
					};
				};
            };
        };
    };

    // ничья
    return 0;
 };

// Task 4

function meeting(rooms, needChairs) {

	const result = [];
	
	if (!needChairs) {
		return 'Game On';
	};

	for (let i = 0; i < rooms.length; i++) {
		if (needChairs > 0) {
			const freeChairsInRoom = rooms[i][1] - rooms[i][0].length;
			const correctCountChairs = freeChairsInRoom > needChairs ? needChairs : freeChairsInRoom;
			result.push(freeChairsInRoom > 0 ? correctCountChairs : 0);

			if (freeChairsInRoom > 0) {
				needChairs -= freeChairsInRoom;
			};

		} else {
			return result;
		};
	};
	
	return needChairs <= 0 ? result : "Not enough!";
};

meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4);

// Task 5

function tickets(queue) {

	const cash = {
		'25' : 0,
		'50' : 0,
		'100' : 0
	};

	for (let i = 0; i < queue.length; i++) {

		if (queue[i] === 25) {
			cash['25'] += 1;

		} else if (queue[i] === 50) {
			if (cash['25'] > 0) {
				cash['50'] += 1;
				cash['25'] -= 1;
			} else {
				return 'NO'
			};	

		} else if (queue[i] === 100) {
			if (cash['25'] > 0 && cash['50'] > 0) {
				cash['50'] -= 1;
				cash['25'] -= 1;
				cash['100'] += 1;
			} else if (cash['25'] >= 3) {
				cash['25'] -= 3;
				cash['100'] += 1;
			} else {
				return 'NO'
			};
		};
	};
	return 'YES'
};

console.log(tickets([25, 25, 50]));
console.log(tickets([25, 25, 50, 50, 100]));

// Task 6

// Task 7

const prod = [
    [4, 3], 
    [3, 3, 2, 2],
    [3, 3, 2, 9, 1, 2],
    [1, 2, 3, 1],
    [2, 2, 3, 1, 2],
];

function findPartMaxProd() {
    const arr = [];
    const calc = (sum, cur) => sum *= cur;

    for (let i = 0; i < prod.length; i++) {
        arr.push(prod[i].reduce(calc));
    };

    const indexMaxValue = arr.indexOf(Math.max(...arr));
    const res = [prod[indexMaxValue], Math.max(...arr)];

    return res;
};

findPartMaxProd();

// Task 7(2)
// ----------------------
function findPartMaxProd(inx) {
	const prod = [
	    [4, 3], 
	    [3, 3, 2, 2],
	    [3, 3, 2, 9, 1, 2],
	    [1, 2, 3, 1],
	    [2, 2, 3, 1, 2],
	];

	const calc = (sum, cur) => sum *= cur;

	const total = prod[inx].reduce(calc);
	console.log([prod[inx], total]);

};

findPartMaxProd(2);
