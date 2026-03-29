/*
There are n guests sitting around a round table in a Chinese restaurant,
numbered from 1 to n.

Initially, the chef prepared dish ai for the i-th guest.
All dishes are distinct and numbered from 1 to n.

The i-th guest is allergic to the dish with number i.

The table is circular and can rotate in one direction only.
In one operation, the table can be rotated so that the dish that was in front
of guest n moves to guest 1, and every other guest (except the first)
receives the dish that was previously in front of the guest with number one less.

Determine the minimum number of rotations required so that no guest
gets a dish they are allergic to.

Input format:
The first line contains an integer n — the number of guests and dishes
(1 ≤ n ≤ 2 * 10^5).

The second line contains n distinct integers a1, a2, ..., an,
where ai is the dish initially assigned to the i-th guest
(1 ≤ ai ≤ n, and all ai are distinct).

Output format:
Print a single integer k — the minimum number of rotations needed.
If it is impossible to rotate the table so that no guest gets
their allergic dish, print -1.
*/

function Test(n, arr) {
  let arr2 = [];
  for (let i = 0; i <= n - 1; i++) {
    arr2.push(0);
  }

  for (let i = 0; i <= n - 1; i++) {
    let num = (i - arr[i] + n + 1) % n;
    arr2[num] = 1;
  }

  let fin = -1;

  for (let i = 0; i <= n - 1; i++) {
    if (arr2[i] === 0) {
      fin = i;
      break;
    }
  }

  return fin;
}

console.log(Test(5, [1, 4, 2, 3, 5]));
console.log(Test(5, [1, 3, 5, 2, 4]));
