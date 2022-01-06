const sortString = (str) => {
    const findIndex = (word) => word.split('').reduce((acc, val) => +val ? +val : acc, 0);
    const arr = str.split(' ');
    const sorted = (a, b) => {return findIndex(a) - findIndex(b)};
    arr.sort(sorted);
    return arr.join(' ');
 };











console.log(sortString("4of Fo1r pe6ople g3ood th5e the2"));

