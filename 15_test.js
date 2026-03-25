/*
Two lists of integers are given. Each list may contain up to 100000 numbers.
Print all numbers that appear in both lists, in ascending order.

Input format:
Two lines are given. Each line contains space-separated integers
representing one list.

Output format:
Print the integers that are present in both lists, sorted in ascending order.
*/

function Test(str1, str2) {
  let set1 = new Set(str1.split(" "));
  let set2 = new Set(str2.split(" "));
  let fin = [];

  console.log(set1, set2);

  for (let value of set1) {
    if (set2.has(value) === true) {
      fin.push(value);
    }
  }

  return fin.sort((a, b) => a - b);
}

console.log(Test("1 3 2", "4 3 2"));
