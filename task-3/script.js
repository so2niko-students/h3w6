let numberTicket = prompt("Enter your ticket number").split('');
let sumFirstPart = 0;
let sumSecondPart = 0;

if (numberTicket.length % 2 == 0) {
    let indexMedium = numberTicket.length / 2;
    for (let index = 0; index < numberTicket.length; index++) {
        if (index < indexMedium) {
            sumFirstPart += Number(numberTicket[index]);
        } else {
            sumSecondPart += Number(numberTicket[index]);
        }
    }
    sumFirstPart == sumSecondPart ? alert('YES') : alert('NO');


} else {
    alert('NO')
}