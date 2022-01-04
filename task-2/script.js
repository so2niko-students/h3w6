const a1 = +prompt("Enter A1:", 0);
const a2 = +prompt("Enter A2:", 0);
const a3 = +prompt("Enter A3:", 0);
const b1 = +prompt("Enter B1:", 0);
const b2 = +prompt("Enter B2:", 0);
const b3 = +prompt("Enter B3:", 0);
let sum = 0;
const priceArr = [a1, a2, a3].sort((a, b) => b - a);
const capacityArr = [b1, b2, b3].sort((a, b) => b - a);

for (let i = 0; i < priceArr.length; i++) {
    sum += priceArr[i] * capacityArr[i];
}
alert(`Sum = ${sum}`);