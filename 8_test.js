/*
Solve the equation in integers:

    sqrt(a * x + b) = c

Here a, b, and c are given integers. Find all integer solutions, or report that there are no integer solutions.

Input format:
Three integers a, b, and c are given, each on a separate line.

Output format:
The program must output all solutions of the equation in increasing order,
or output NO SOLUTION (in uppercase) if there are no solutions.
If there are infinitely many solutions, output MANY SOLUTIONS.
*/

function Test(arr) {
  let a = arr[0];
  let b = arr[1];
  let c = arr[2];

  if (c < 0) {
    return `NO SOLUTION`;
  }

  if (a === 0 && b === c ** 2) {
    return `MANY SOLUTIONS`;
  }

  if (a === 0) {
    return `NO SOLUTION`;
  }

  let x = (c ** 2 - b) / a;

  if (Number.isInteger(x)) {
    return x;
  } else {
    return `NO SOLUTION`;
  }
}

console.log(Test([1, 2, 3]));
console.log(Test([1, 0, 0]));
console.log(Test([1, 2, -3]));
