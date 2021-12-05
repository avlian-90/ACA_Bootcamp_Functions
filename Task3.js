/* Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

- If the phone number is less than 10 digits assume that it is a bad number
- If the phone number is longer than 10, then it is a bad number
- If the phone number is 10 digits assume that it is good
- If the phone number consists of 11 symbols and the first one is + and others are numbers, then trim +
and return remaining 10 digits.
- If the phone number contains + symbol more than one, consider it as a bad number.
- If the phone number contains + symbol not as the first character, consider it as a bad number. */

function validateNum(num) {
  if (
    getCountOfDigits() < 10 ||
    getCountOfDigits() > 10 ||
    getCountOfPlus() > 1 ||
    isFirstPlus()
  ) {
    console.log("Bad number");
  } else if (getCountOfDigits() === 10) {
    console.log("Good");
  } else if (getCountOfDigits() === 11 && isFirstPlus()) {
    num = trimPlus();
  }
  return num;
}

function getCountOfDigits(num) {
  let count = 0;
  while (num > 0) {
    let digit = num % 10;
    num = (num - digit) / 10;
    count++;
  }
  return count;
}
function getCountOfPlus(num) {
  let count = 0;
  while (num > 0) {
    let digit = num % 10;
    num = (num - digit) / 10;
    if (digit === "+") {
      count++;
    }
  }
  return count;
}
function isFirstPlus(num) {
  let isFirstPlus = false;
  if (num.charAt(0) === "+") {
    isFirstPlus = true;
  }
  return isFirstPlus;
}
function trimPlus(num) {
  let newNum;
  if (isFirstPlus(num)) {
    newNum = num.substring(1);
  }
  return newNum;
}
console.log(validateNum("+1452361245"));

// Didn't solve, but tried :)
