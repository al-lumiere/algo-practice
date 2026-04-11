/*
Problem: Destroyed Balls

In a computer game, a player places balls of different colors in a line.
When a contiguous segment of three or more balls of the same color appears,
it is removed from the line. After removal, the remaining balls move closer
together, and the process may repeat.

Given the current configuration of balls, determine how many balls will be
destroyed in total.

It is guaranteed that initially there is at most one contiguous segment of
three or more balls of the same color.

Input format:
A single line contains:
- an integer n (1 ≤ n ≤ 1000) — the number of balls,
- followed by n integers (from 0 to 9), representing the colors of the balls.

Output format:
Output a single integer — the total number of balls that will be destroyed.

Example:
Input:
5 1 3 3 3 2

Output:
3
*/

function Test(str) {
  let arr2 = str.split(" ");
  let arr = [];

  for (let i = 0; i <= arr2.length - 1; i++) {
    let j = i;
    while (j <= arr2.length - 1 && arr2[j] === arr2[i]) {
      j++;
    }

    arr.push([arr2[i], j - i]);
    i = j - 1;
  }

  console.log(arr);

  let st = [];
  let fin = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (st.length === 0) {
      if (arr[i][1] >= 3) {
        fin += arr[i][1];
      } else {
        st.push(arr[i]);
      }
      continue;
    }

    let last = st[st.length - 1];

    if (last[0] === arr[i][0]) {
      last[1] += arr[i][1];

      if (last[1] >= 3) {
        fin += last[1];
        st.pop();
      }
    } else {
      if (arr[i][1] >= 3) {
        fin += arr[i][1];
      } else {
        st.push(arr[i]);
      }
    }
  }

  return fin;
}

console.log(Test("5 1 3 3 3 2"));
console.log(Test("3 3 2 1 1 1 2 2 3 3"));
console.log(Test("3 0 0 0"));
