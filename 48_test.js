/*
LineLand is a one-dimensional world represented as a straight line with N cities,
numbered from 0 to N - 1 from west to east.

During a crisis, all residents decided to migrate eastward. People from each city
move to the right (towards increasing indices) until they reach the first city
where the average cost of living is strictly lower than in their original city.

If no such city exists, they continue moving east and disappear into infinity.

Input:
- The first line contains an integer N (2 ≤ N ≤ 10^5) — the number of cities.
- The second line contains N integers a[i] (0 ≤ a[i] ≤ 10^9) —
  the average cost of living in each city.

Output:
- For each city i (from 0 to N - 1), output the index of the city where its residents
  will settle.
- If there is no such city, output -1 for that position.
*/

function Test(n, str) {
  let arr = str.split(" ").map(Number);
  let st = [];
  let fin = new Object();

  for (let i = 0; i <= arr.length - 1; i++) {
    let cur = arr[i];
    let topVal = st[st.length - 1]?.[0];
    let topInd = st[st.length - 1]?.[1];

    if (topVal === undefined || cur >= topVal) {
      fin[i] = -1;
      st.push([cur, i]);
      continue;
    }

    while (topVal !== undefined && cur < topVal) {
      fin[topInd] = i;
      st.pop();
      topVal = st[st.length - 1][0];
      topInd = st[st.length - 1][1];
    }

    fin[i] = -1;
    st.push([cur, i]);
  }

  return Object.values(fin).join(" ");
}

console.log(Test(10, "1 2 3 2 1 4 2 5 3 1")); // -1 4 3 4 -1 6 9 8 9 -1
