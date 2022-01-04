function airToGold(A1, A2, A3, B1, B2, B3){    
    if (A1 > 0 && A1 < 100 && A2 > 0 && A2 < 100 && A3 > 0 && A3 < 100 && B1 > 0 && B1 < 100 && B2 > 0 && B2 < 100 && B3 > 0 && B3 < 100) {
        let arr1 = [A1, A2, A3];
        arr1.sort(function(a, b) { return b - a; });
        let arr2 = [B1, B2, B3];
        arr2.sort(function(a, b) { return b - a; });
        console.log(`${arr1[0]*arr2[0]+arr1[1]*arr2[1]+arr1[2]*arr2[2]} rubles total profit.`)}
        else console.log(
            "A1, A2, A3, B1, B2, B3 should be in range from 0 to 100. Please check function params."
          );
}
airToGold(0, 2, 1, 6, 5, 7)
airToGold(3, 2, 1, 6, 5, 7)
airToGold(1, 2, 10, 10, 5, 1)