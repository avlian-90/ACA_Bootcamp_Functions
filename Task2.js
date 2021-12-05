/* Write a function that calculates sum, difference, multiplication and division between given array
elements depending on passed operation symbol. Write appropriate function for each operation. */

function getResultOfOperation(arr, operator) {
  let sum = 0;
  let difference = 2 * arr[0];
  let mult = 1;
  let division = arr[0] ** 2;
  let result;
  for (let i = 0; i < arr.length; i++) {
    switch (operator) {
      case "+":
        result = sum += arr[i];
        break;
      case "-":
        result = difference -= arr[i];
        break;
      case "*":
        result = mult *= arr[i];
        break;
      case "/":
        result = division /= arr[i];
        break;
      default:
        console.log("Good Bye!");
        break;
    }
  }
  return result;
}
console.log(getResultOfOperation([45, 12, 3, 6, 17, 0], "+"));
