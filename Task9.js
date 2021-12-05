/* Write a function which receives an array and a number as arguments and returns a new array from
the elements of the given array which are larger than the given number. */

function getNewArr(arr, num) {
  return arr.filter((el) => el > num);
}
console.log(getNewArr([10, 25, 16, -5, 30, 15, 24], 16));
