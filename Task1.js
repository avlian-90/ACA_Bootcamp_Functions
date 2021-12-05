// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

let oddNumbers = [];
let evenNumbers = [];
let newArr = [];
function getSeparatedArrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] % 2 === 0 ? evenNumbers.push(arr[i]) : oddNumbers.push(arr[i]);
  }
  newArr = [oddNumbers, evenNumbers];
  return newArr;
}
console.log(getSeparatedArrays([45, 12, 3, 6, 17, 0]));
