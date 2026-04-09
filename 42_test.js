/*
In postfix notation (also known as Reverse Polish Notation), an operator is written
after its two operands.

For example:
- The sum of two numbers A and B is written as: A B +
- The expression B C + D * means (B + C) * D
- The expression A B C + D * + means A + (B + C) * D

The advantage of postfix notation is that it does not require parentheses
or additional rules for operator precedence.

Input format:
A single line contains an expression in postfix notation,
consisting of digits and the operations +, -, *.
Numbers and operators are separated by spaces.
The line may contain an arbitrary number of trailing spaces.

Output format:
Output the value of the given expression.
*/

function Test(str) {
  let arr = str.trim().split(" ");
  let arrN = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== "+" && arr[i] !== "-" && arr[i] !== "*") {
      arrN.push(Number(arr[i]));
    } else {
      if (arr[i] === "+") {
        arrN[arrN.length - 2] = arrN[arrN.length - 2] + arrN[arrN.length - 1];
      }
      if (arr[i] === "-") {
        arrN[arrN.length - 2] = arrN[arrN.length - 2] - arrN[arrN.length - 1];
      }
      if (arr[i] === "*") {
        arrN[arrN.length - 2] = arrN[arrN.length - 2] * arrN[arrN.length - 1];
      }

      arrN.pop();
    }
  }

  return arrN[0];
}

console.log(Test("8 9 + 1 7 - *   "));
