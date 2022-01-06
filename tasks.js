// Task#1
function sumMin(arr) {
    let result = 0;
    arr.forEach(element => result += Math.min.apply(Math, element));
    return result;
}

// Task #2
function twoOldestAges(arr) {
    // delete not unique items, sort, and retrun the last two
    return [...new Set(arr)].sort((a, b) => a - b).slice(-2)

}
// Task #3
function shortestWord(sentence) {
    const arr = sentence.split(' ');
    let result = arr[0].length;
    for (const iterator of arr) {
        if (result > iterator.length) {
            result = iterator.length;
        }
    }

    // short version
    // let result = 999;
    // sentence.split(' ').forEach(element => { if (result > element.length) { result = element.length; } })
    return result;
}

function yourOrderPlease(sentence) {
    const regex = /\d+/g;
    const arr = sentence.split(' ').sort((a, b) => {
        return Number(a.match(regex)) - Number(b.match(regex))
    })
    return arr.join(' ');
}

module.exports.sumMin = sumMin;
module.exports.twoOldestAges = twoOldestAges;
module.exports.shortestWord = shortestWord;
module.exports.yourOrderPlease = yourOrderPlease;