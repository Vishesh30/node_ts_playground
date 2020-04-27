// Normal Number Range supported by JS is +/- 9007199254740991
const BigNumber = require("bignumber.js");
export function NumberNormalCalculation() {
  let int1: number = 0.1;
  let int2: number = 0.2;

  let res = `--------- Normal Calculation without library ---------
Addition 0.1 + 0.2 = --------  ${int1 + int2} 
Multiplication int1 * int2 = --  ${int1 * int2}
Addition of 1111.11+1111.11+1111.11+1111.11+1111.11 = --------  ${
    1111.11 + 1111.11 + 1111.11 + 1111.11 + 1111.11
  } 
Substraction 0.3 - 0.1 = ----  ${0.3 - 0.1}
Multiplication 200.30 * 3 = --  ${200.3 * 3}
Substraction 100.90 - 20.20 = --------  ${100.9 - 20.3}
               
--------- Solution using parseFloat and toFixed ------------------
Addition 0.1 + 0.2 = --------  ${(
    parseFloat("0.1") + parseFloat("0.2")
  ).toFixed(2)} 
Multiplication 0.1 * 0.2 = --  ${(
    parseFloat("0.1") * parseFloat("0.2")
  ).toFixed(2)}
Addition of 1111.11+1111.11+1111.11+1111.11+1111.11 = --------  ${(
    parseFloat("1111.11") +
    parseFloat("1111.11") +
    parseFloat("1111.11") +
    parseFloat("1111.11") +
    parseFloat("1111.11")
  ).toPrecision(6)} 
Substraction 0.3 - 0.1 = ----  ${(
    parseFloat("0.3") - parseFloat("0.1")
  ).toFixed(2)}
Multiplication 200.30 * 3 = --  ${(parseFloat("200.30") * 3).toFixed(2)}
Substraction 100.90 - 20.20 = --------  ${(
    parseFloat("100.90") - parseFloat("20.30")
  ).toFixed(2)}

--------- Solution using BigNumber ------------------
Addition 0.1 + 0.2 = --------  ${new BigNumber(0.1).plus(new BigNumber("0.2"))} 
Multiplication 0.1 * 0.2 = --  ${new BigNumber(0.1).multipliedBy(
    new BigNumber("0.2")
  )}
Addition of 1111.11+1111.11+1111.11+1111.11+1111.11 = --------  ${new BigNumber(
    1111.11
  )
    .plus(new BigNumber(1111.11))
    .plus(new BigNumber(1111.11))
    .plus(new BigNumber(1111.11))
    .plus(new BigNumber(1111.11))} 
Substraction 0.3 - 0.1 = ----  ${new BigNumber("0.3").minus(new BigNumber(0.1))}
Multiplication 200.30 * 3 = --  ${new BigNumber(200.3).multipliedBy(3)}
Substraction 100.90 - 20.20 = --------  ${new BigNumber(100.9).minus(
    new BigNumber(20.2)
  )}`;
  console.log("done");
  return res;
}
