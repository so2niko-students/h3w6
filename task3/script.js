let arr = ['Яблоко', 'Банан', 'Ананас'];

const reduceLikeMap = arr.reduce((acc, item) => {
    return acc.concat(item[0])
}, []);

const reduceLikeFilter = arr.reduce((acc, element) => {
    if (element[0].toLowerCase() == 'а') {
        return acc.concat(element);
    }
    return acc;
}, []);

const reduceLikeForEach = arr.reduce((acc, element, i) => {
    return acc.concat(`${i+1}: ${element}`)
}, [])