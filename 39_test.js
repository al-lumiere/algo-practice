/*
We define a correct bracket sequence (CBS) as follows:

- An empty string is a correct bracket sequence.
- If A is a correct bracket sequence, then (A) and [A] are also correct bracket sequences.
- If A and B are correct bracket sequences, then their concatenation AB is also a correct bracket sequence.

You are given four bracket characters: '(', ')', '[' and ']'.
Their lexicographical order is defined by a string w of length 4,
where w1 < w2 < w3 < w4.

For example, if w = "()[]", then '(' < ')' < '[' < ']'.

You are given:
- an integer n (1 ≤ n ≤ 100000) — the required length of the sequence,
- a string w — a permutation of the 4 bracket characters defining their order,
- a string s — a prefix of the desired sequence (|s| ≤ n).

Among all correct bracket sequences of length n that start with s,
find the lexicographically smallest one according to the order defined by w.

Two strings A and B of equal length are compared lexicographically as follows:
A < B if there exists an index i such that:
- for all j < i: A[j] = B[j]
- and A[i] < B[i] according to the order in w.

It is guaranteed that at least one valid sequence exists.

Output the resulting sequence.
*/

function Test(n, strW, strBeg) {
  let ans = strBeg.split("");
  let open = [];

  for (let i = 0; i <= ans.length - 1; i++) {
    if (ans[i] === "(" || ans[i] === "[") {
      open.push(ans[i]);
      continue;
    }

    if (ans[i] === ")" && open[open.length - 1] === "(") {
      open.pop();
    } else if (ans[i] === "]" && open[open.length - 1] === "[") {
      open.pop();
    }
  }

  while (ans.length < n) {
    for (let i = 0; i <= strW.length - 1; i++) {
      let el = strW[i];

      let size = open.length;
      let last = open[open.length - 1];
      let ok = true;

      if (el === "(" || el === "[") {
        size++;
      } else if (el === ")") {
        if (last === "(") {
          size--;
        } else {
          ok = false;
        }
      } else if (el === "]") {
        if (last === "[") {
          size--;
        } else {
          ok = false;
        }
      }

      if (!ok) continue;

      let places = n - ans.length - 1;

      if (size <= places && (places - size) % 2 === 0) {
        ans.push(el);

        if (el === "(" || el === "[") {
          open.push(el);
        } else {
          open.pop();
        }

        break;
      }
    }
  }

  return ans.join("");
}

console.log(Test(6, "()[]", "([("));
console.log(Test(4, "(][)", "()[]"));
console.log(Test(6, "][)(", "(["));
console.log(Test(6, ")([]", "(("));

console.log(Test(2, "()[]", "")); // "()"
console.log(Test(4, "()[]", "")); // "(())"
console.log(Test(6, "()[]", "")); // "((()))"

console.log(Test(6, "()[]", "(")); // "((()))"
console.log(Test(6, "()[]", "([")); // "([()])"
console.log(Test(6, "()[]", "([(")); // "([()])"
console.log(Test(6, "()[]", "()(")); // "()(())"

console.log(Test(6, "][)(", "(")); // "([][])"
console.log(Test(6, "][)(", "([")); // "([][])"
console.log(Test(6, "([)]", "(")); // "((()))"
