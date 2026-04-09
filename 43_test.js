/*
You are given a numerical expression. You need to evaluate its value
or determine that it contains an error.

The expression may contain addition (+), subtraction (-), multiplication (*),
parentheses, and spaces (there must be no spaces inside numbers).
Operator precedence is standard.

All numbers in the expression are integers and their absolute values do not exceed 2 × 10^9.
It is also guaranteed that all intermediate results do not exceed 2 × 10^9.

Input format:
The first line contains the expression. Its length does not exceed 100 characters.
The expression is followed by a newline.

Output format:
Output the value of the expression, or the word "WRONG" if the value is undefined.
*/

function Test(str) {
  let cmd = ["+", "-", "*"];
  let arr = [];

  for (let i = 0; i <= str.length - 1; i++) {
    let prev = str[i - 1];
    let cur = str[i];
    let next = str[i + 1];

    if (/[a-zA-Z]/.test(cur)) {
      return "WRONG";
    }

    if (cur === " " && cmd.includes(prev) && cmd.includes(next)) {
      return "WRONG";
    }

    if (cur === " " && /^\d$/.test(prev) && /^\d$/.test(next)) {
      return "WRONG";
    }

    if (cur === " ") {
      continue;
    }

    if (
      cur === "-" &&
      (prev === undefined || prev === "(" || cmd.includes(prev)) &&
      /^\d$/.test(next)
    ) {
      let num = "-";
      i++;

      while (i <= str.length - 1 && /^\d$/.test(str[i])) {
        num += str[i];
        i++;
      }

      arr.push(num);
      i--;
    } else if (/^\d$/.test(cur)) {
      let num = "";

      while (i <= str.length - 1 && /^\d$/.test(str[i])) {
        num += str[i];
        i++;
      }

      arr.push(num);
      i--;
    } else {
      arr.push(cur);
    }
  }

  let nums = [];
  let opr = [];

  function result(nums, op) {
    if (nums.length < 2) return false;

    let b = nums.pop();
    let a = nums.pop();

    if (op === "+") nums.push(a + b);
    else if (op === "-") nums.push(a - b);
    else if (op === "*") nums.push(a * b);
    else return false;

    return true;
  }

  function mustCalc(top, cur) {
    if (top === "(") return false;
    if (top === "*") return true;
    if ((top === "+" || top === "-") && (cur === "+" || cur === "-")) {
      return true;
    }
    return false;
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    let cur = arr[i];

    if (/^-?\d+$/.test(cur)) {
      nums.push(Number(cur));
    } else if (cur === "(") {
      opr.push(cur);
    } else if (cur === ")") {
      if (!opr.includes("(")) return "WRONG";

      while (opr[opr.length - 1] !== "(") {
        if (!result(nums, opr.pop())) return "WRONG";
      }

      opr.pop();
    } else if (cmd.includes(cur)) {
      while (opr.length !== 0 && mustCalc(opr[opr.length - 1], cur)) {
        if (!result(nums, opr.pop())) return "WRONG";
      }

      opr.push(cur);
    } else {
      return "WRONG";
    }
  }

  while (opr.length !== 0) {
    if (opr[opr.length - 1] === "(") return "WRONG";
    if (!result(nums, opr.pop())) return "WRONG";
  }

  if (nums.length !== 1) return "WRONG";

  return nums[0];
}

console.log(Test("1+(2*2 - 3)")); //2
console.log(Test("1+a+1")); //WRONG
console.log(Test("1 1 + 2")); //WRONG
console.log(Test("- - 3 2")); //WRONG
console.log(Test("3 - (-2)"));
console.log(Test("-3 - (-2)"));
