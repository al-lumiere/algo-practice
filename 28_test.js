/*
There are n students in a ballroom dance school — boys and girls.
The instructor arranged them in a single row.

He wants to choose a contiguous group of students (without reordering),
such that the number of boys and girls in the group is equal.

How many such groups are there?

Input format:
- The first line contains an integer n (1 ≤ n ≤ 10^6).
- The second line contains a string of length n consisting of characters 'a' and 'b',
  where 'a' represents a girl and 'b' represents a boy.

Output format:
- Output a single integer — the number of valid groups.
*/

function Test(n, str) {
  let obj = new Object();
  obj[0] = 1;
  let sum = 0;
  let fin = 0;

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "a") {
      sum += 1;
    } else if (str[i] === "b") {
      sum -= 1;
    }

    if (obj[sum] === undefined) {
      obj[sum] = 1;
    } else {
      fin += obj[sum];
      obj[sum] += 1;
    }
  }
  return fin;
}

console.log(Test(8, "aabbaabb"));
