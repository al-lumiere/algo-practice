/*
There are N students in a school. The i-th student knows Mi languages.
Determine which languages are known by all students and which languages are known by at least one student.

Input format:
The first line contains the number of students N.
Then follow N blocks: each block starts with an integer Mi,
followed by Mi lines containing the names of languages known by the i-th student.

The length of each language name does not exceed 1000 characters.
The number of distinct languages is at most 1000.
Constraints:
1 <= N <= 1000
1 <= Mi <= 500

Output format:
On the first line, output the number of languages known by all students.
Starting from the second line, output the list of such languages.
Then output the number of languages known by at least one student.
On the following lines, output the list of such languages.
*/

function Test(n, arr) {
  let obj = new Object();

  for (let i = 0; i <= arr.length - 1; i++) {
    let x = arr[i];
    for (let k = 0; k <= x[1].length - 1; k++) {
      if (obj[x[1][k]]) {
        obj[x[1][k]] += 1;
      } else {
        obj[x[1][k]] = 1;
      }
    }
  }

  let popLang = [0, []];
  let allLang = Object.keys(obj);

  for (let i = 0; i <= allLang.length - 1; i++) {
    if (obj[allLang[i]] === n) {
      popLang[0] += 1;
      popLang[1].push(allLang[i]);
    }
  }

  return [popLang[0], popLang[1], allLang.length, allLang];
}

console.log(
  Test(3, [
    [3, ["Russian", "English", "Japanese"]],
    [2, ["Russian", "English"]],
    [1, ["English"]],
  ]),
);
