/*
A robot moves on an infinite 2D grid. The program controlling the robot
consists of commands:
- "U" — move one cell up
- "R" — move one cell to the right
- "D" — move one cell down
- "L" — move one cell to the left

The robot paints every cell it visits, including the starting cell.

Your task is to determine how many cells are painted more than once.

Input:
A single string representing the robot's program.
It contains only the characters "U", "R", "D", and "L".
The length of the string does not exceed 1000.

Output:
Print the number of cells that were painted more than once.

Example:
Input:
ULDR

Output:
1
*/

function Test(str) {
  let ceils = new Map();

  function toString(i, q) {
    return `${i} ${q}`;
  }

  let i = 0;
  let q = 0;

  ceils.set("0 0", 1);

  let fin = 0;

  for (let l = 0; l <= str.length - 1; l++) {
    if (str[l] === "U") {
      q += 1;
    } else if (str[l] === "D") {
      q -= 1;
    } else if (str[l] === "R") {
      i += 1;
    } else if (str[l] === "L") {
      i -= 1;
    }

    let coor = toString(i, q);

    if (ceils.has(coor)) {
      ceils.set(coor, ceils.get(coor) + 1);
      if (ceils.get(coor) === 2) {
        fin++;
      }
    } else {
      ceils.set(coor, 1);
    }
  }
  return fin;
}

console.log(Test("ULDR"));
console.log(Test("ULRD"));
