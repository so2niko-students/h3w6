function calculatePaintCans(L, W, H) {
  if (L > 0 && L < 1000 && W > 0 && W < 1000 && H > 0 && H < 1000) {
    console.log(`The square is ${L * W * H} metres.`);
    console.log(`${Math.ceil(((L + W) * H) * 2  / 16)} cans required.`);
  } else
    console.log(
      "L,W,H should be in range from 0 to 1000. Please check function params."
    );
}
calculatePaintCans(1, 1, 1);
calculatePaintCans(3, 3, 16);
calculatePaintCans(0, 3, 16);