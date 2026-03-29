/*
You are given a string consisting of digits from 0 to 9.
Using these digits, you need to construct the largest possible number that is divisible by 3.

The number may contain leading zeros.
If two numbers are equal in value, the longer one is considered larger.
For example, "00021" is considered larger than "021".

Input format:
A single string consisting of digits (0–9).
The length of the string is at least 3 and does not exceed 10^5.

Output format:
Print the largest possible number that can be formed from the given digits
such that it is divisible by 3.

It is guaranteed that such a number exists.
*/

function Test(str) {
  let arr = str.split("").map(Number);
  let obj = new Object();
  let sum = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] += 1;
    } else {
      obj[arr[i]] = 1;
    }
    sum += arr[i];
  }

  let fin = "";

  if (sum % 3 === 1) {
    let check = false;
    for (let i = 1; i <= 7; i += 3) {
      if (obj.hasOwnProperty(i) && obj[i] > 0) {
        obj[i] -= 1;
        check = true;
        break;
      }
    }

    if (check !== true) {
      let n = -1;
      for (let l = 0; l <= 1; l++) {
        for (let i = 2; i <= 8; i += 3) {
          if (obj.hasOwnProperty(i) && obj[i] > 0) {
            n = i;
            obj[i] -= 1;
            break;
          }
        }
      }
    }
  } else if (sum % 3 === 2) {
    let n = -1;
    let flag2 = true;
    for (let i = 2; i <= 8; i += 3) {
      if (obj.hasOwnProperty(i) && obj[i] > 0) {
        obj[i] -= 1;
        flag2 = false;
        break;
      }
    }

    if (flag2 === true) {
      for (let l = 0; l <= 1; l++) {
        let flag = false;
        for (let i = 1; i <= 7; i += 3) {
          if (obj.hasOwnProperty(i) && obj[i] > 0) {
            flag = true;
            n = i;
            obj[i] -= 1;
            break;
          }
        }
        if (flag === false && n != -1) {
          obj[n]++;
          flag2 = false;
        } else if (flag === false) {
          flag2 = false;
        }
      }
    }
  }

  for (let v = 9; v >= 0; v--) {
    if (obj.hasOwnProperty(v) && obj[v] > 0) {
      fin += String(v).repeat(obj[v]);
    }
  }

  return fin;
}

console.log(Test("105"));
console.log(Test("2222"));
console.log(Test("000"));
console.log(Test("54321"));
console.log(Test("1112"));
