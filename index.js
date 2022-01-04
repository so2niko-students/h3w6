"use strict";

// Task 1
const paintToCoverOffice = (L, W, H) => {
  const canSize = 16;
  const officeWallsArea = 2 * (L * W + L * H + H * W);
  const canNumber = Math.ceil(officeWallsArea / canSize);
  if (L <= 1000 && W <= 1000 && H <= 1000) {
    return canNumber;
  } else {
    return `Incorrect input values`;
  }
};

// Task 2
const fraudMoneyMaking = (A1, A2, A3, B1, B2, B3) => {
  const priceArray = [A1, A2, A3].sort((a, b) => {
    return b - a;
  });
  const bucketsArray = [B1, B2, B3].sort((a, b) => {
    return b - a;
  });
  let moneyAmount = 0;
  for (let i = 0; i < 3; i++) {
    moneyAmount += priceArray[i] * bucketsArray[i];
  }
  if (A1 < 100 && A2 < 100 && A3 < 100 && B1 < 100 && B2 < 100 && B3 < 100) {
    return moneyAmount;
  } else {
    return `Incorrect input values`;
  }
};

// Task 3
const isHappyTicket = (num) => {
  let firstSum = 0;
  let secondSum = 0;
  let splitNumber = num.toString().split("");
  const n = splitNumber.length;
  for (let i = 0; i < n / 2; i++) {
    firstSum += +splitNumber[i];
    secondSum += +splitNumber[n - i - 1];
  }
  if (firstSum === secondSum && num < Math.pow(10, 6)) {
    return `YES`;
  } else {
    return `NO`;
  }
};
