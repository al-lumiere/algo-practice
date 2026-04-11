/*
Problem: Battleship Field Validation

According to the rules of the game "Battleship", a player has a 10×10 grid
on which exactly 10 ships must be placed:
- 1 battleship (size 4×1),
- 2 cruisers (size 3×1),
- 3 destroyers (size 2×1),
- 4 submarines (size 1×1).

The following conditions must be satisfied:
1. All ships must be placed on the grid.
2. Each ship must lie entirely within the grid.
3. Each ship occupies a set of cells forming a straight line (horizontal or vertical).
4. Ships cannot overlap.
5. Ships cannot touch each other, even diagonally (i.e., no adjacent cells in any direction).

You are given a 10×10 grid. Each cell contains:
- '#' if the cell is occupied by a ship,
- '.' otherwise.

Determine whether the given configuration is a valid placement of ships.

Input format:
The input consists of 10 lines, each containing exactly 10 characters.
Each character is either '#' or '.'.

Output format:
Print "YES" if the configuration is valid according to the rules,
or "NO" otherwise.

Example:
Input:
#..#......
#..#......
..........
....###...
..........
..##......
..........
..........
...#......
..........

Output:
YES
*/


function Test(str) {
  let dir = [
    [0, 1],
    [0, -1],
    [1, 1],
    [1, -1],
    [-1, 0],
    [-1, 1],
    [-1, -1],
    [1, 0],
  ];
  let obj = new Object();
  let st = new Set();

  for (let i = 0; i <= str.length - 1; i++) {
    for (let j = 0; j <= str.length - 1; j++) {
      let cur = str[i][j];
      let curR = str[i][j + 1] || ".";
      let curD = str[i + 1]?.[j] || ".";

      if (cur === ".") {
        continue;
      }

      if (st.has(`${i}, ${j}`)) {
        continue;
      }

      if (curR === "#" && curD === "#") {
        return "NO";
      }

      let ceils = [];

      if (curR === "." && curD === ".") {
        ceils.push([i, j]);
      } else if (curR === "#") {
        let k = j;
        while (k <= str.length - 1 && str[i][k] === "#") {
          ceils.push([i, k]);
          k++;
        }
      } else if (curD === "#") {
        let w = i;
        while (w <= str.length - 1 && str[w][j] === "#") {
          ceils.push([w, j]);
          w++;
        }
      }

      if (ceils.length > 4) {
        return "NO";
      }

      for (let t = 0; t <= ceils.length - 1; t++) {
        st.add(`${ceils[t][0]}, ${ceils[t][1]}`);
      }

      let ceils2 = new Set(ceils.map(([a, b]) => `${a}, ${b}`));

      for (let t = 0; t <= ceils.length - 1; t++) {
        let [x, y] = ceils[t];
        for (let h = 0; h <= dir.length - 1; h++) {
          let Nx = dir[h][0] + x;
          let Ny = dir[h][1] + y;

          if (Nx < 0 || Nx >= str.length || Ny < 0 || Ny >= str.length) {
            continue;
          }

          if (str[Nx][Ny] === ".") {
            continue;
          }

          if (!ceils2.has(`${Nx}, ${Ny}`)) {
            return "NO";
          }
        }
      }

      if (obj[ceils.length]) {
        obj[ceils.length]++;
      } else {
        obj[ceils.length] = 1;
      }
    }
  }

  if (obj[1] === 4 && obj[2] === 3 && obj[3] === 2 && obj[4] === 1) {
    return "YES";
  } else {
    return "NO";
  }
}

console.log(
  Test([
    "#.#.#.....",
    ".......##.",
    ".#..#.....",
    ".#........",
    ".#..##....",
    "..........",
    "####...#..",
    ".......#..",
    ".......#..",
    "##........",
  ]),
);
