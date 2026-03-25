/*
There are n words of the same length. You need to find the largest possible number k
such that the words can be split into pairs, and in each pair the two words have at least
the first k letters in common.

Determine the maximum value of k.

Input format:
- The first line contains an integer n (1 <= n <= 2 * 10^5, n is even) — the number of words.
- The next n lines contain the words.
- It is guaranteed that all words have the same length and the total length of all words
  does not exceed 2 * 10^6.

Output format:
- Print a single integer k — the required maximum value.
*/

function Test(n, arr) {
  arr.sort();
  let fin = Infinity;
  let count = 0;

  for (let i = 0; i<= arr.length-1; i+= 2) {
    count = 0;
    let str1 = arr[i];
    let str2 = arr[i+1];

    for (let k = 0; k<= arr[i].length - 1; k++) {
      if (str1[k] === str2[k]) {
        count++
      } else {
        break
      }
    }

    if (count < fin) {
      fin = count;
    }
  }

  return fin
}

console.log(Test(4,
["bbbb",
"aabc",
"aacc",
"bbbd"]));

console.log(Test(2,
["a",
"b"]));
