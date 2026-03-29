/*
There are N turtles moving one after another along a road.

Each turtle makes a statement of the form:
"There are ai turtles in front of me and bi turtles behind me."

Your task is to determine the maximum number of turtles that could be telling the truth.

Input format:
The first line contains an integer N (1 ≤ N ≤ 10000).
Each of the next N lines contains two integers ai and bi
(|ai|, |bi| ≤ 10000), describing the statement of the i-th turtle.

Output format:
Print a single integer M — the maximum number of turtles that can be telling the truth.
*/

function Test(n, arr) {
  let st = new Set();

  for (let i = 0; i <= n-1; i++) {
    let x = Math.abs(arr[i][0]) + Math.abs(arr[i][1]);
    if (x === (n-1)) {
      st.add(arr[i].join(','));
    }
  }

  return st.size
}

console.log(Test(3, [[2, 0], [0, 2], [2, 2]]));
console.log(Test(5, [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]]));
console.log(Test(10, [[9, 1], [8, 1], [7, 2], [6, 2], [5, 3], [4, 4], [3, 6], [2, 7], [1, 9], [0, 8]]));
