/*
Given a sequence consisting of round (), square [], and curly {} brackets.

A bracket sequence is considered correct if:
- The empty sequence is correct.
- If A is a correct sequence, then (A), [A], and {A} are also correct.
- If A and B are correct sequences, then their concatenation AB is also correct.

Your task is to determine whether the given bracket sequence is correct.

Input:
A single line containing a bracket sequence of at most 100000 characters.

Output:
If the sequence is correct, output "yes".
Otherwise, output "no".
*/

function Test(str) {
  if (str.length === 0) {
    return "yes";
  }

  let arr = [];

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === "{" || str[i] === "(" || str[i] === "[") {
      arr.push(str[i]);
      continue;
    }

    if (arr.length === 0) {
      return "no";
    }

    if (str[i] === "}" && arr[arr.length - 1] === "{") {
      arr.pop();
    } else if (str[i] === ")" && arr[arr.length - 1] === "(") {
      arr.pop();
    } else if (str[i] === "]" && arr[arr.length - 1] === "[") {
      arr.pop();
    } else {
      return "no";
    }
  }

  if (arr.length === 0) {
    return "yes";
  } else {
    return "no";
  }
}

console.log(Test("()[]"));
console.log(Test("([)]"));
console.log(Test("("));
console.log(Test("([)]"));
console.log(Test("")); // yes
console.log(Test("()")); // yes
console.log(Test("([])")); // yes
console.log(Test("([)]")); // no
console.log(Test("{[}]")); // no
console.log(Test("(")); // no
console.log(Test(")")); // no
console.log(Test("(()")); // no
console.log(Test("()[]{}")); // yes
