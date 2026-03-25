/*
You are given a list of integers that may contain up to 100000 numbers.
Determine how many distinct (different) numbers appear in the list.

Input format:
A single line containing space-separated integers.

Output format:
Output the number of distinct integers in the list.
*/

function Test(str) {
  let arr = str.split(" ");
  let set = new Set(arr);
  return set.size
}

console.log(Test("1 2 3 2 1"));
console.log(Test("1 2 3 4 5 6 7 8 9 10"));
console.log(Test("1 2 3 4 5 1 2 1 2 7 3"));
