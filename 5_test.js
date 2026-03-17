/*
You are given a grid of size n × m. Some cells of the grid are occupied.

Determine how many ways it is possible to place a domino of size 2 × 1
(it can also be rotated by 90 degrees), such that no cell of the domino
overlaps with an occupied cell.

Input format:
The first line contains two integers n and m (1 ≤ n, m ≤ 1000) — the grid dimensions.

Each of the next n lines contains m characters.
The character '#' means the corresponding cell is occupied,
and '.' means the cell is free.

Output format:
Output the number of ways to place the domino.
*/

function Test(inf, field) {
  let count = 0;
  for (let n = 0; n < inf[0]; n++) {
    for (let m = 0; m < inf[1]; m++) {
      if (
        field[n][m + 1] !== undefined &&
        field[n][m] === "." &&
        field[n][m + 1] === "."
      ) {
        count++;
      }

      if (
        field[n + 1] !== undefined &&
        field[n][m] === "." &&
        field[n + 1][m] === "."
      ) {
        count++;
      }
    }
  }

  return count;
}

console.log(
  Test(
    [2, 3],
    [
      [".", ".", "."],
      [".", ".", "."],
    ],
  ),
);
console.log(
  Test(
    [3, 4],
    [
      [".", ".", "#", "."],
      ["#", ".", ".", "#"],
      [".", ".", "#", "."],
    ],
  ),
);
