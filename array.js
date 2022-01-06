/*
forEach
map
filter
findIndex
find
some
every
reduce
reduceRight
*/

const users = ['Mykola', 'Yevhen', 'Anatolii', 'Ivan', 'Oleksandr', 'Oleksii', 'Nadiia', 'Mykhailo'];

//! forEach - тупо проход по массиву
// el, i, arr
users.forEach(console.log);

//! map - Генерация нового массива на базе предыдущего. Размер нового массива будет таким же, как и старого
const log = (el, i) => `Hello, ${ el }. Your ID is #${ i }. `;
console.log(users.map(log));

//! filter - Вернуть новый отфильтрованый массив. Ожидает от callback функции что-то true/false
const containsA = el => (/a/i).test(el);
console.log(users.filter(containsA));

//! find vs findIndex - Нахождение элемента или его порядкового номера
//? Умеют останавливаться
const doubleI = el => el.includes('ii');
console.log(users.find(doubleI));
console.log(users.findIndex(doubleI));

//! some vs every - Проверка массива на условие
// some - хотя-бы один элемент должен соответствовать условию
// every - все элементы должны соответствовать условию
console.log('some', users.some(doubleI));
console.log('every', users.every(doubleI));

//! reduce vs reduceRight - Анализ и один результат по массиву
// acc, el, i, arr
// default value == 0 element
const join = (acc, el) => acc + el;
const len = (acc, el) => acc + el.length;
console.log(users.reduce(join));
console.log(users.reduce(len, 0));
console.log(users.reduceRight(len));