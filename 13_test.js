/*
A sequence of integers is given in a single line, separated by spaces.
For each number in the sequence, output the word "YES" (on a new line)
if this number has already appeared earlier in the sequence,
or "NO" if it has not appeared before.

Input format:
A single line containing space-separated integers.

Output format:
For each number, print "YES" or "NO" on a separate line.
*/

function Test(str) {
  let set = new Set();
  let objFin = {};
  let count = 0;

  for (let value of str.split(" ")) {
    if (set.has(value) === false) {
      objFin[count] = "NO";
      set.add(value);

    } else if (set.has(value) === true) {
      objFin[count] = "YES";
    }

    count++
  };

  return Object.values(objFin);
}

console.log(Test("1 2 3 2 3 4"));
