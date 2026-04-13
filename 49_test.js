/*
You are given a histogram consisting of N rectangles placed next to each other.
All rectangles have width 1, but their heights may differ.

The i-th rectangle has height h[i], and rectangles are aligned on a common base line.
The order of rectangles matters.

Your task is to find the area of the largest rectangle that can be formed inside the histogram.
The rectangle must also be aligned with the base line.

Input:
- The first number is N (1 < N ≤ 10^6) — the number of rectangles.
- The next N integers h[1], ..., h[N] (0 ≤ h[i] ≤ 10^9) represent the heights of the rectangles.

Output:
- Output a single integer — the maximum possible area of a rectangle within the histogram.

Note:
- The rectangle must be formed by a contiguous segment of rectangles.
- The height of the rectangle is the minimum height among the chosen segment.
- The width of the rectangle is the number of rectangles in the segment.
*/

function Test(str) {
  let data = str.split(" ").map(Number);
  let n = data[0];
  let arr = data.slice(1, n + 1);
  arr.push(0);

  let st = [];
  let fin = 0;

  for (let i = 0; i < arr.length; i++) {
    let cur = arr[i];
    let start = i;

    while (st.length && st[st.length - 1][0] > cur) {
      let [h, ind] = st.pop();
      fin = Math.max(fin, h * (i - ind));
      start = ind;
    }

    st.push([cur, start]);
  }

  return fin;
}

console.log(Test("8 2 1 4 5 1 3 3 3"));
