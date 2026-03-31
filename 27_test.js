/*
You are given a sequence of integers a1, a2, ..., an.

Compute the sequence of prefix sums b1, b2, ..., bn, where:
bj = a1 + a2 + ... + aj

Input format:
- The first line contains an integer n (1 ≤ n ≤ 1000) — the number of elements in the sequence.
- The second line contains n integers a1, a2, ..., an (|ai| ≤ 10^6).

Output format:
- Output n integers b1, b2, ..., bn — the prefix sums of the sequence.
*/

function Test(n, str) {
  let arr = str.split(" ").map(Number);
  let obj = new Object();

  for (let i = 0; i <= arr.length - 1; i++) {
    if (obj[i - 1] !== undefined) {
      obj[i] = obj[i - 1] + arr[i];
    } else {
      obj[i] = arr[i];
    }
  }
  return Object.values(obj);
}

console.log(Test(5, "10 -4 5 0 2"));
