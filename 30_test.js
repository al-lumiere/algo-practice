/*
You are given an integer array A consisting of N elements.

You need to process Q queries of the following type:
- Given indices L and R, compute the sum of elements from index L to R inclusive.

Since the number of queries is large, they are not provided directly.
Instead, you must generate them using a pseudo-random number generator.

You are given an initial value X0. Using it, generate a sequence:
X0, X1, ..., X(2Q - 1)

For i >= 1:
Xi = (11173 * X(i - 1) + 1) mod 1000000007

Using this sequence, queries are formed as follows:

For each i from 0 to Q - 1:
- L_i = min(X(2i) mod N, X(2i + 1) mod N)
- R_i = max(X(2i) mod N, X(2i + 1) mod N)

For each query, compute the sum of A[L_i] to A[R_i].

Return a single integer:
the sum of all query results modulo 1000000007.

Input:
- First line: integer N (1 ≤ N ≤ 100000)
- Second line: N integers A[i] (0 ≤ A[i] ≤ 10^9)
- Third line: integer Q (1 ≤ Q ≤ 10000)
- Fourth line: integer X0 (0 ≤ X0 ≤ 10^9)

Output:
- One integer — the total sum of all query results modulo 1000000007.
*/

function Test(n, arrN, q, x0) {
  let arrX = [];
  arrX[0] = x0;

  for (let i = 1; i <= 2 * q - 1; i++) {
    arrX.push((11173 * arrX[i - 1] + 1) % 1000000007);
  }

  let RefSum = [];

  for (let i = 0; i <= arrN.length - 1; i++) {
    RefSum[i] = (RefSum[i - 1] || 0) + arrN[i];
  }

  let SumQ = 0;
  let r = 0;
  let l = 0;

  for (let i = 0; i <= q - 1; i++) {
    l = Math.min(arrX[2 * i] % n, arrX[2 * i + 1] % n);
    r = Math.max(arrX[2 * i] % n, arrX[2 * i + 1] % n);

    SumQ = (SumQ + (RefSum[r] - (RefSum[l - 1] || 0))) % 1000000007;
  }

  return SumQ;
}

console.log(Test(5, [1, 2, 3, 4, 5], 3, 123));
console.log(Test(7, [34, 10, 49, 32, 28, 15, 70], 5, 0));
