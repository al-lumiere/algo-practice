/*
There are n candies arranged in a row. Each candy has a type pi.

You can choose a contiguous sequence of candies such that
there are exactly two distinct types of candies in that sequence.

Determine the maximum number of candies you can take.

Input format:
- The first line contains a positive integer n (1 ≤ n ≤ 10^6) — the number of candies.
- The second line contains n integers p1, p2, ..., pn (1 ≤ pi ≤ 10^9),
  where pi is the type of the i-th candy.

Output format:
- Output a single integer — the maximum number of candies that can be taken.
*/

function Test(n, str) {
  let arr = str.split(" ");
  let l = 0;
  let fin = 0;
  let count = new Map();

  for (let r = 0; r <= arr.length - 1; r++) {
    count.set(arr[r], (count.get(arr[r]) || 0) + 1);

    while (count.size > 2) {
      count.set(arr[l], count.get(arr[l]) - 1);
      if (count.get(arr[l]) === 0) {
        count.delete(arr[l]);
      }
      l++;
    }

    if (count.size === 2) {
      fin = Math.max(fin, r - l + 1);
    }
  }

  return fin;
}

console.log(Test(6, "3 3 1 2 2 1"));
console.log(Test(2, "1 1"));
