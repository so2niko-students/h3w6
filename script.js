//Task 1
function findMinCans(L, W, H) {
   const coverageSquare = 2 * (L * H + W * H);
   return Math.ceil(coverageSquare / 16); //Math.ceil() is round up
}

//Task 2
function goldenSand(A1, A2, A3, B1, B2, B3) {
   const sandsArr = [A1, A2, A3].sort((a, b) => a - b); //sort arrays ascending
   const containersArr = [B1, B2, B3].sort((a, b) => a - b);

   let sum = 0;
   for (let i = 0; i < 3; i++) {
      if (sandsArr[i] >= containersArr[i]) {
         sum += containersArr[i] * sandsArr[i];
      }
   }
   return sum;
}

//Task 3
function isHappy(number) {
   if (number < 100000) {
      return new Error('Invalid input');
   }
   const sumLeft = String(number).split('').slice(0, 3).reduce((a, b) => Number(a) + Number(b));
   const sumRigth = String(number).split('').slice(3, 6).reduce((a, b) => Number(a) + Number(b));
   return sumLeft === sumRigth ? 'YES' : 'NO';
}
