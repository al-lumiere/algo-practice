/*
In the 21879 training season, instead of classic problems, multiple-choice tests were used.
There were n questions in the test. Each question had 4 answer options: A, B, C, and D,
and exactly one correct answer.

Two students' answer sheets are considered similar if:
- more than half of the correctly answered questions in one sheet match the answers in the other sheet, and
- more than half of the incorrectly answered questions in one sheet match the answers in the other sheet.

Find all pairs of similar answer sheets.

Input:
- The first line contains an integer n — the number of questions (1 ≤ n ≤ 100).
- The second line contains a string of length n — the correct answers (characters A, B, C, D).
  The i-th character is the correct answer to the i-th question.
- The third line contains an integer m — the number of students (1 ≤ m ≤ 100).
- The next m lines contain the students' answers, each as a string of length n.

Output:
- In the first line, print the number of similar pairs.
- In the following lines, print all pairs of similar students in any order.
- Students are numbered from 1 to m in the order they appear in the input.
- The order of indices within each pair can also be arbitrary.
*/

function Test(n, str, m, arr) {
  let fin = [];
  for (let i = 0; i <= m - 1; i++) {
    for (let j = i + 1; j <= m - 1; j++) {
      let R2R = 0;
      let W2R = 0;
      let R2W = 0;
      let W2W = 0;
      let WD2WD = 0;

      for (let k = 0; k <= n - 1; k++) {
        let ans1 = arr[i][k];
        let ans2 = arr[j][k];
        let ansR = str[k];

        if (ans1 === ansR && ans2 === ansR) {
          R2R++;
        } else if (ans1 !== ansR && ans2 === ansR) {
          W2R++;
        } else if (ans1 === ansR && ans2 !== ansR) {
          R2W++;
        } else if (ans1 !== ansR && ans2 !== ansR) {
          if (ans1 !== ans2) {
            WD2WD++;
          } else {
            W2W++;
          }
        }
      }

      if (R2R > R2W && R2R > W2R && W2W > R2W + WD2WD && W2W > W2R + WD2WD) {
        fin.push(`${i + 1} ${j + 1}`);
      }
    }
  }

  return [fin.length, fin];
}

console.log(Test(3, "AAA", 4, ["ABA", "ABA", "CBA", "CAA"]));
console.log(Test(6, "ABCDAB", 3, ["ABCCCC", "BBCDCC", "ACCDCC"]));
