/*
A delivery rover started from point 0 at the beginning of a straight avenue.

At some moment, the satellite navigation stopped working, and the exact position
of the rover (point X) became unknown.

Using signals from n mobile base stations, it was determined that for each station i,
there are two integers xi and di, meaning that the station located at position xi
is at a distance no more than di from the rover's position X.

In other words:
|X - xi| <= di for all i.

Your task is to determine the maximum possible value of X that satisfies all constraints.

Input format:
The first line contains a single integer n (1 ≤ n ≤ 10^5).

Each of the next n lines contains two integers xi and di
(0 ≤ xi ≤ 10^9, 0 ≤ di ≤ 10^9).

Output format:
Print the maximum possible X that satisfies all constraints,
or -1 if such X does not exist.
*/

function Test(n, arr) {
  let left = arr[0][0] - arr[0][1];
  let rigth = arr[0][0] + arr[0][1];

  for (let i = 1; i <= arr.length - 1; i++) {
    let x = arr[i];
    left = Math.max(left, x[0] - x[1]);
    rigth = Math.min(rigth, x[0] + x[1]);
  }

  if (left > rigth) {
    return -1;
  }

  return rigth;
}

console.log(
  Test(2, [
    [1, 2],
    [3, 2],
  ]),
);

console.log(
  Test(3, [
    [2, 2],
    [6, 2],
    [8, 1],
  ]),
);

console.log(
  Test(5, [
    [100, 97],
    [115, 104],
    [97, 115],
    [111, 115],
    [107, 97],
  ]),
);

console.log(
  Test(2, [
    [0, 10],
    [2, 10],
  ]),
);
