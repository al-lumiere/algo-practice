/*
Zhenya comes to a cafeteria and sees a queue of n people.
Each person i has:
- patience t_i — the maximum time (in seconds) they are willing to wait,
- order time k_i — how long (in seconds) it takes them to place an order.

The waiting time of a person is the total order time of all people standing before them.

It is guaranteed that initially, for every person, their waiting time does not exceed their patience.

Zhenya knows everyone in the queue and can stand at any position.
He wants to stand as close to the front as possible, but he must ensure that
after he joins the queue, no person's waiting time exceeds their patience.
Zhenya himself has infinite patience.

Your task is to determine the minimum position (1-based) where Zhenya can stand.

Input:
The first line contains an integer cases (1 ≤ cases ≤ 10000) — the number of test cases.

For each test case:
- The first line contains two integers n and d (1 ≤ n ≤ 1e5, 1 ≤ d ≤ 1e9),
  where n is the number of people in the queue and d is Zhenya's order time.
- Each of the next n lines contains two integers t_i and k_i (1 ≤ t_i, k_i ≤ 1e9),
  representing the patience and order time of the i-th person.

Let N be the total number of people across all test cases.
It is guaranteed that N ≤ 1e6.

Output:
For each test case, print the minimum position where Zhenya can stand.
*/

function Test(q, test) {
  function Solve(n, d, arr) {
    let sum1 = 0;
    let ind = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
      let t = arr[i][0];
      let k = arr[i][1];
      if (sum1 + d > t) {
        ind = i + 1;
      }
      sum1 += k;
    }

    return ind + 1;
  }

  let fin = [];

  for (let i = 0; i <= q - 1; i++) {
    fin.push(Solve(test[i][0][0], test[i][0][1], test[i][1]));
  }

  return fin;
}

console.log(
  Test(2, [
    [
      [3, 2],
      [
        [5, 1],
        [6, 2],
        [10, 3],
      ],
    ],
    [
      [4, 3],
      [
        [2, 2],
        [4, 1],
        [5, 3],
        [8, 2],
      ],
    ],
  ]),
);
