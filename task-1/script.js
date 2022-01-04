const enterLenght = +prompt("Enter lenght:", 0);
const enterWight = +prompt("Enter Width:", 0);
const enterHeight = +prompt("Enter Height:", 0);
const sizeTinPaint = 16;

const res = ((enterLenght * 2) + (enterWight * 2)) * enterHeight;
alert(`You need to buy ${Math.ceil(res / sizeTinPaint)} tin of paint`);