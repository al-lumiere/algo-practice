/*
During the semester, each student received grades represented by uppercase Latin letters from "A" to "Z".
Here, "A" is the best grade, and "Z" is the worst.

To calculate the final grade, the teacher computed the arithmetic mean of all grades received during the semester
and rounded it according to standard rounding rules (to the nearest integer).

If the value is exactly halfway between two integers, it is rounded towards the better grade.

However, the final grade cannot be more than one level better than the worst grade obtained during the semester.

Your task is to determine the final grade based on the given grades.

Input:
A single non-empty string consisting of uppercase Latin letters.
The length of the string does not exceed 100.

Output:
Print a single character — the final grade for the semester.
*/

function Test(str) {
  let count = 0;
  let min = 0;

  for (let i = 0; i <= str.length-1; i++) {
    count += str[i].charCodeAt(0);
    if (str[i].charCodeAt(0) > min) {
      min = str[i].charCodeAt(0);
    }
  }

  let av = 0;

  if (count / str.length - Math.trunc(count / str.length) === 0.5 ) {
    av = Math.round(count / str.length) - 1;
  } else {
    av = Math.round(count / str.length);
  }

  let fin = Math.max(av, min - 1);

  return String.fromCharCode(fin)
}

console.log(Test("ABACABA"));
console.log(Test("AZAA"));
console.log(Test("ABABAB"));
