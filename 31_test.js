/*
You are given an array of integers. Your task is to find a non-empty subarray with the maximum possible sum.

Input:
- The first line contains a single integer n (1 ≤ n ≤ 3 * 10^5) — the size of the array.
- The second line contains n integers a_i (−10^9 ≤ a_i ≤ 10^9) — the elements of the array.

Output:
- Print a single integer — the maximum sum of any non-empty subarray.

Example:
Input:
4
1 2 3 4

Output:
10
*/

function Test(n, arr) {
  let PrefSum = [];
  let min = 0;

  fin = -1

  for (let i = 0; i <= arr.length - 1; i++) {
    PrefSum.push((PrefSum[i - 1] || 0) + arr[i]);

    if (PrefSum[i] < min) {
      min = PrefSum[i];
    }

    fin = Math.max(fin, PrefSum[i] - (min || 0))
  }

  return fin
}

console.log(Test(4, [1, 2, 3, 4]));
console.log(Test(4, [5, 4, -10, 4]));
console.log(Test(5, [-2, 3, -1, 3, -2]));
