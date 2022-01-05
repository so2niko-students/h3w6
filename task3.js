function returnShortest(str) {
    let arr = str.split(' ');
    arr.sort(function(a, b) { return a - b; });
    console.log(`${str} --> ${arr[0].length}`);
}

returnShortest("hello erwrwer eewe www")