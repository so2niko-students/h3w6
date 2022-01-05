function paintCounter(H, L, W) {
  const ONE_CANE_OF_PAINT = 16;
  const args = [...arguments];

  if (args.some(a => a >= 1000)) return;
  let paintinArea = ((L + W) * 2) * H;

  return Math.ceil(paintinArea / ONE_CANE_OF_PAINT);
}

// console.log(paintCounter(4, 4, 10));

function maxProfit2(a1, a2, a3, b1, b2, b3){
  const args = [...arguments];
  if (args.some(a => a >= 100)) return;

  const sandPrices = [a1,a2,a3].sort((a,b) => a - b);
  const containers = [b1,b2,b3].sort((a,b) => a - b);

  return sandPrices.reduce((sum, price, i) => sum + (price * containers[i]), 0);
}

console.log(maxProfit2(1, 2, 3, 1, 2, 3))

function maxProfit(a1, a2, a3, b1, b2, b3) {
  const args = [...arguments];
  if (args.some(a => a >= 100)) return;

  let temp = null;

  if (a1 < a2) {
    temp = a2;
    a2 = a1;
    a1 = temp;
  }

  if (a1 < a3) {
    temp = a3;
    a3 = a2;
    a2 = a1;
    a1 = temp;
  }

  if (b1 < b2) {
    temp = b2;
    b2 = b1;
    b1 = temp;
  }

  if (b1 < b3) {
    temp = b3;
    b3 = b2;
    b2 = b1;
    b1 = temp;
  }

  return a1 * b1 + a2 * b2 + a3 * b3;
}
// console.log(maxProfit(1, 2, 3, 1, 2, 3));

function isTicketLucky(num) {
  const arr = [...num.toString()];
  let sum1 = null;
  let sum2 = null;

  if (num < 0 || num > 10 ** 6 ) return;
  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      sum1 += +arr[i];
    }
    if (i > 2) {
      sum2 += +arr[i];
    }
  }

  return sum1 === sum2 ? 'YES' : 'NO';
}

// console.log(isTicketLucky(233521));