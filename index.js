// Task 1
function textNumber(number) {
	let first = ['Ноль', 'Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
	let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадцать'];
	let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
	if (number >= 0 && number <= 9) {
	  return first[number];
	}
	if (number >= 10 && number <= 20) {
	  return second[number - 10];
	}
	if (number > 20 && number <= 99) {
	  let str = `${number}`;
	  str = str.split('');
	  let firstNumber = str[0];
	  let secondNumber = str[1];
	  if (secondNumber == 0) {
	  	return `${third[firstNumber - 2]}`
	  }
	  return `${third[firstNumber - 2]} ${first[secondNumber]}`;
	}
}

console.log(textNumber(0));
console.log(textNumber(1));
console.log(textNumber(9));
console.log(textNumber(10));
console.log(textNumber(17));
console.log(textNumber(20));
console.log(textNumber(30));
console.log(textNumber(44));
console.log(textNumber(88));
console.log(textNumber(90));
console.log(textNumber(99));


function getInfo(str) {
    const letters = str.match(/[a-zA-Z]/gi).length;
    const numbers = str.match(/[0-9]/g).length;
    const symbols = str.match(/\W/g).length;
    return  `'letters': ${letters}, 'numbers': ${numbers}, 'symbols': ${symbols}`     
}


function replacer(str) {
	return str.replace(/[a-zа-я]/gi, x => 
		x.toLowerCase() === x ? x.toUpperCase() 
		: x.toLowerCase()).replace(/\d/g, '_');
};
console.log(replacer('Hello World! 1@3, Привет Мир!'));


// Task 2 look index.html


// Task 3

const fruits = ['Яблоко', 'Банан', 'Ананас'];

const mapToReduce = arr => arr.reduce((acc, el) => [...acc, el[0]], []);
console.log(mapToReduce(fruits));

const filterToReduce = arr => arr.reduce((acc, el) => 
	el[0].toLowerCase() === 'а' ? acc + el : acc, []);
console.log(filterToReduce(fruits));

const forEachToReduce = arr => arr.reduce((acc, el, i) => acc + ` ${i + 1}: ${el}`, '');
console.log(forEachToReduce(fruits));

// Task 7

function repeatNum(x, a) {
	let res = 1;
	while (a > 0) {
		if ((a & 1) > 0) 
            res = res * x; 
        x = x * x; 
        a >>= 1;
	}

	return res;
};

function breakInteger(N) {
	if (N == 2) {
		return 1
	};

	if (N == 3) {
		return 2
	};

	let maxProduct = 0;

	if (N % 3 == 0) {
		maxProduct = repeatNum(3, (N / 3));  
        return maxProduct;
	} else if (N % 3 == 1) {
		maxProduct = 2 * 2 * repeatNum(3, (N / 3) - 1);  
        return maxProduct;
	} else if (N % 3 == 2) {
		maxProduct = 2 * repeatNum(3, (N / 3)); 
        return maxProduct;
	}
};

maxProduct = breakInteger(8);  
console.log(maxProduct);

