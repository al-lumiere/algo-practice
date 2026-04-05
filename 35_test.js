/*
Vasya won the All-Sberland Programming Olympiad and will now receive prizes from the sponsors.
All prizes are arranged in a line, and each prize has a value a[i] (the value may be negative).

Vasya may choose two integers L and R and take all prizes with indices from L to R inclusive.

However, there is one restriction: the total value of the prizes taken by Vasya must NOT be divisible by K,
because K is Vasya's unlucky number.

Determine the maximum possible total value of prizes that Vasya can take.
If necessary, Vasya may choose to take no prize at all.

Input:
The first line contains two integers N and K (1 <= N, K <= 100000) —
the number of prizes and Vasya's unlucky number.

The second line contains N integers a[i] (-10^6 <= a[i] <= 10^6) —
the values of the prizes.

Output:
Print one integer — the maximum possible total value of prizes Vasya can get.
If it is better to take no prizes, print 0.
*/

function Test(n, arr) {
  let k = n[1];
  let PrefSum = [];
  let min1 = 0;
  let min2 = Infinity;
  let minRem1 = 0;
  let minRem2 = -1;
  let fin = 0;
  let obj = new Object();
  obj[0] = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    PrefSum.push((PrefSum[i - 1] || 0) + arr[i]);

    let rem = PrefSum[i] % k;
    if (rem < 0) {
      rem += k
    }

    let min = 0;

    if (minRem1 !== rem) {
      min = min1;
    } else {
      min = min2;
    }

    if (min !== Infinity) {
      fin = Math.max(fin, PrefSum[i] - min);
    }

    if (Object.hasOwn(obj, rem) === true && PrefSum[i] > obj[rem]) {
      continue
    }

    obj[rem] = PrefSum[i];

    if (rem === minRem1) {
      min1 = PrefSum[i];
      continue
    }

    if (rem === minRem2) {
      min2 = PrefSum[i];
      if (min2 < min1) {
        min2 = min1
        min1 = PrefSum[i]

        minRem2 = minRem1;
        minRem1 = rem;
      }
      continue
    }

    if (PrefSum[i] < min1) {
      min2 = min1
      minRem2 = minRem1
      min1 = PrefSum[i]
      minRem1 = rem;
    } else if (PrefSum[i] < min2) {
      min2 =PrefSum[i]
      minRem2 = rem;
    }
  }

  return fin
}

console.log(Test([3, 6], [3, 2, 1]));
console.log(Test([5, 15], [5, 2, 4, 1, 3]));
console.log(Test([5, 4], [5, 2, 4, 1, 3]));
console.log(Test([5, 2], [-1, 2, -1, 2, -1]));
console.log(Test([5, 1], [-1, 2, -1, 2, -1]));

console.log(Test([2, 2], [-1, 2]));
