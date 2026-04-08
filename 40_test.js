/*
You are given an image taken with an electron microscope that contains square-shaped bacteria.
Your task is to count the number of bacteria in the image.

It is guaranteed that every bacterium has the shape of a square,
with its sides parallel to the edges of the image.

Input format:
The first line contains two integers n and m — the dimensions of the image (1 ≤ n, m ≤ 500).
Each of the next n lines contains m characters.
Each character is either:
  '#' — part of a bacterium
  '.' — empty space

Output format:
Output a single integer — the number of bacteria in the image.
*/

function Test(arr, pole) {
  let count = 0;

  for (let i = 0; i <= pole.length - 1; i++) {
    pole[i] = pole[i].split("");
  }

  for (let i = 0; i <= pole.length - 1; i++) {
    for (let j = 0; j <= pole[i].length - 1; j++) {
      let x = pole[i][j];

      if (x === ".") {
        continue;
      }

      if (x === "#") {
        let sideSize = 1;
        for (let k = 1; k <= pole[i].length - 1 - j; k++) {
          if (pole[i][j + k] === ".") {
            break;
          }
          sideSize = k + 1;
        }

        count++;

        for (let k = i; k <= i + sideSize - 1; k++) {
          for (let q = j; q <= j + sideSize - 1; q++) {
            pole[k][q] = ".";
          }
        }
      }
    }
  }
  return count;
}

console.log(
  Test(
    [8, 6],
    [
      "......",
      "...##.",
      "...##.",
      "......",
      ".###..",
      ".###..",
      ".###..",
      "......",
    ],
  ),
);

console.log(Test([2, 1], [".", "."]));
