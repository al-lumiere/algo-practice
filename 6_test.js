/*
Professor studies string theory. He chose a very long string and divided it
into segments numbered from 1 to 10^9.

Initially, the height of the string at all segments was equal to zero.
After that, n quantum events occurred.

The i-th quantum event had strength x_i and affected the string segments
from l_i to r_i inclusive. As a result of this event, the height of segment
l_i increased by x_i, the height of segment l_i + 1 decreased by x_i,
the next one increased again, and so on up to segment r_i inclusive.

Knowing all n events, the professor wants to determine the final height
of some m segments of interest.

Input format:
The first line contains two positive integers n and m
(1 ≤ n, m ≤ 1000) — the number of quantum events and the number of segments
whose final heights the professor is interested in.

Each of the next n lines contains the description of a quantum event:
three integers l_i, r_i, x_i
(1 ≤ l_i ≤ r_i ≤ 10^9; 1 ≤ x_i ≤ 1000).

Each of the next m lines contains one integer q_i
(1 ≤ q_i ≤ 10^9) — the index of the segment whose final height must be found.
The segment indices are given in increasing order.

Output format:
For each of the m queries, output one integer — the height of the
corresponding segment.
*/

function Test(q, s, u) {
  let fin = [];

  for (let i = 0; i <= u.length - 1; i++) {
    let res = 0;
    for (let k = 0; k <= s.length - 1; k++) {
      let start = s[k][0];
      let end = s[k][1];
      let strenth = s[k][2];

      if (u[i] >= start && u[i] <= end) {
        if ((u[i] - start) % 2 !== 0) {
          res -= strenth;
        } else {
          res += strenth;
        }
      }
    }

    fin.push(res);
  }

  return fin;
}

console.log(
  Test(
    [2, 6],
    [
      [1, 6, 7],
      [3, 7, 2],
    ],
    [1, 2, 3, 6, 7, 8],
  ),
);
console.log(Test([1, 3], [[9, 9, 1]], [8, 9, 10]));
