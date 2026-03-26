/*
A string s consisting of lowercase Latin letters is given.

You need to find a substring t such that the number of its non-overlapping
occurrences in s is as large as possible.

An occurrence of substring t in string s is defined as a pair of indices (l, r)
such that l <= r and the substring of s from position l to position r, inclusive,
is equal to t.

Two occurrences (l1, r1) and (l2, r2) are called non-overlapping if the segment
[l1, r1] does not intersect the segment [l2, r2].

Find the maximum possible length of a substring that satisfies this condition.

Input format:
A single string s is given (1 <= |s| <= 10^5), consisting only of lowercase
Latin letters.

Output format:
Print the maximum length of a substring satisfying the condition.
*/

function Test(str) {
  let arr = str.split("");
  let obj = new Object();
  let fin = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]].push(i);
    } else {
      obj[arr[i]] = [];
      obj[arr[i]].push(i);
    }
  }

  let max = 0;

  for (let key in obj) {
    let value = obj[key];
    if (value.length > max) {
      max = value.length;
    }
  }

  for (let key in obj) {
    let value = obj[key];
    if (value.length < max) {
      continue;
    }

    let maxLen = 26;

    for (let i = 0; i <= value.length - 2; i++) {
      if (value[i + 1] - value[i] < maxLen) {
        maxLen = value[i + 1] - value[i];
      }
    }

    maxLen = Math.min(maxLen, str.length - value[value.length - 1]);

    for (let k = maxLen; k >= 1; k--) {
      let st = str.slice(value[0], value[0] + k);

      let check = true;

      for (let n = 1; n <= value.length - 1; n++) {
        if (st !== str.slice(value[n], value[n] + k)) {
          check = false;
          break;
        }
      }

      if (check === true) {
        fin = Math.max(fin, k);
        break;
      }
    }
  }
  return fin;
}

console.log(Test("abacaba"));
console.log(Test("abab"));
console.log(Test("a"));
console.log(Test("aaaaa"));
console.log(Test("abababab"));
console.log(Test("abcabcabcabc"));
console.log(Test("abcabcabcabc"));
