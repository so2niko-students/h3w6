//TASK 1 
//SUBTASK 1
  const textNumber = function (num) {
    const dict = [
      ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', '', 'две', '', 'четыр', 'пят', 'шест', 'сем', 'восем', 'девят'], 
      ['', '', 'двадцать', 'тридцать', 'сорок', '', '', '', '', 'девяносто']
    ]; 
    if (num >= 0 && num <= 10)
      return dict[0][num]; 
    if (num > 10 && num <= 19)
      return (dict[0][num] || dict[0][num - 10]) + 'надцать'; 
    if (num >= 20 && num <= 99) {
      const [units=0, tens] = [...('' + num)].reverse().map(Number); 
      return [
        tens ? dict[1][tens] || (dict[0][tens] + 'десят') : '', 
        units ? dict[0][units] : ''
      ].join(' '); 
    }
  }
  console.log(Array.from({ length: 100 }, 
    (v, i) => i + ': ' + textNumber(i)
  ).join('\n')); 


//SUBTASK 2
const getStrStats = function(str) {
    return `${str.match(/[a-z]/gi).join('').length} letters, ${str.match(/\d/g).join('').length} digits, ${str.match(/[^\w]/g).join('').length} etc symbols`;
}
// console.log(getStrStats('test12345$$#@!@!@@@'));
//SUBTASK 3

