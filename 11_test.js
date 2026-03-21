/*
Vasya works as a university teacher, and he got tired of students using LLMs
to solve problems, so he rented a bunker with a metal detector at the entrance
for the exam. Now he wants to seat the students красиво and take a selfie
with them in the background.

There are n students in total. They must be seated according to the following rules:

1. Students must be seated in rows.
2. The number of students in any two rows must differ by at most one.
3. If there are rows with different numbers of students, then any two adjacent
   rows must have different numbers of students.

Vasya does not want the seating arrangement to be too stretched vertically
or horizontally, so he is interested in the minimum possible absolute difference
between the number of rows and the maximum number of students in a row.

Input format:
A single line contains one natural number n — the number of students
(1 <= n <= 10^12).

Output format:
Print the minimum possible absolute difference between the number of rows
and the maximum number of students in one row.

Examples:
Input:
1
Output:
0

Input:
2
Output:
1

Input:
3
Output:
0
*/

function Test(N) {
  let min = Infinity;
  let c = 0;

  for (let R = 1; R <= 1000000; R++) {
    if (N % R === 0) {
      c = Math.abs(R - Math.floor(N / R));
      if (c < min) {
        min = c;
      }
    }

    if (Math.abs(R - 2 * (N % R)) <= 1) {
      c = Math.abs(R - Math.floor(N / R) - 1);
      if (c < min) {
        min = c;
      }
    }
  }

  for (let M = 1; M <= 1000000; M++) {
    if (N % M === 0) {
      c = Math.abs(M - Math.floor(N / M));
      if (c < min) {
        min = c;
      }
    }

    if (N % (2 * M - 1) === 0 && M >= 2) {
      let R = (2 * N) / (2 * M - 1);
      c = Math.abs(R - M);
      if (c < min) {
        min = c;
      }
    }

    if (N >= M && (N - M) % (2 * M - 1) === 0 && M >= 2) {
      let R = (2 * (N - M)) / (2 * M - 1) + 1;
      c = Math.abs(R - M);
      if (c < min) {
        min = c;
      }
    }

    if (N >= M - 1 && (N - M + 1) % (2 * M - 1) === 0 && M >= 2) {
      let R = (2 * (N - M + 1)) / (2 * M - 1) + 1;
      c = Math.abs(R - M);
      if (c < min) {
        min = c;
      }
    }
  }

  return min;
}

console.log(Test(1));
console.log(Test(2));
console.log(Test(3));
console.log(Test(50));
