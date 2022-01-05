function correctTicketNumber(N) {
  const nulls = ['000000', '00000', '0000', '000', '00', '0', ''];
  return `${ nulls[String(N).length] }${ N }`;
  // let str = String(N);
  // if (str.length == 5) {
  //   str = "0" + str;
  // }
  // if (str.length == 4) {
  //   str = "00" + str;
  // }
  // if (str.length == 3) {
  //   str = "000" + str;
  // }
  // if (str.length == 2) {
  //   str = "0000" + str;
  // }
  // if (str.length == 1) {
  //   str = "00000" + str;
  // }
  // return str;
}

function luckyTicket(N) {
  let ourTicket = correctTicketNumber(N);
  let sumFirstThree =
    Number(ourTicket[0]) + Number(ourTicket[1]) + Number(ourTicket[2]);
  let sumLastThree =
    Number(ourTicket[3]) + Number(ourTicket[4]) + Number(ourTicket[5]);
  if (N > 0 && N < 10 ** 6) {
    if (sumFirstThree == sumLastThree) {
      console.log(`${ourTicket} - YES`);
    } else console.log(`${ourTicket} - NO`);
  } else console.log(`Ticket number is incorrect`);
}

luckyTicket(1);
luckyTicket(8224);
luckyTicket(111111);
luckyTicket(134404);