/*
A string s consisting of round (), square [], and curly {} brackets
is called a valid bracket sequence if:

1) s is empty; or
2) s can be written as (t), [t], or {t}, where t is a valid bracket sequence; or
3) s can be written as a concatenation t1 + t2, where both t1 and t2 are valid bracket sequences.

A cyclic shift of a string s is a string of the form:
s[k] s[k+1] ... s[n-1] s[0] s[1] ... s[k-1]
for some k, where n is the length of s.

You are given a string s consisting only of the characters:
'(', ')', '[', ']', '{', '}'.

Determine whether s is a cyclic shift of some valid bracket sequence.

Input:
A single string s (0 ≤ |s| ≤ 1000).

Output:
Print "YES" if s is a cyclic shift of a valid bracket sequence,
otherwise print "NO".
*/

function Test(str2) {
  if (str2.length === 0) {
    return "YES";
  }

  for (let i = 0; i <= str2.length - 1; i++) {
    let str = str2.slice(i) + str2.slice(0, i);
    let ok = true;
    let arr = [];

    for (let i = 0; i <= str.length - 1; i++) {
      if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
        arr.push(str[i]);
        continue;
      }

      if (arr.length === 0) {
        ok = false;
        break;
      }

      if (str[i] === "}" && arr[arr.length - 1] === "{") {
        arr.pop();
      } else if (str[i] === ")" && arr[arr.length - 1] === "(") {
        arr.pop();
      } else if (str[i] === "]" && arr[arr.length - 1] === "[") {
        arr.pop();
      } else {
        ok = false;
        break;
      }
    }

    if (arr.length === 0 && ok) {
      return "YES";
    } else {
      continue;
    }
  }
  return "NO";
}

console.log(Test("}()[]{"));
console.log(Test("}([)]{"));
console.log(Test("()]["));
