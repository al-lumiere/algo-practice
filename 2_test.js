/*
An ambulance team was dispatched to a call in a remote district. Unfortunately,
when the dispatcher received the call, they managed to record only the building
address and the apartment number K1, after which the connection was lost.

However, the dispatcher remembered that some time ago an ambulance was sent to
the same building address to apartment K2, which is located in entrance P2 on
floor N2.

It is known that the building has M floors, and the number of apartments on each
landing is the same.

Write a program that determines the entrance number P1 and the floor number N1
for apartment K1.

Input format:
The input contains five positive integers:
K1, M, K2, P2, N2 (each not exceeding 10^6).

Output format:
Output two integers P1 and N1.

If the input data does not allow determining P1 or N1 uniquely, output 0 instead
of the corresponding number.

If the input data is inconsistent (contradictory), output two numbers: -1 -1.
*/

function Test(K1, M, K2, P2, N2) {
  if (N2 > M) {
    console.log('-1 -1');
    rl.close();
    return;
  }

  let ansP = -1;
  let ansN = -1;
  let found = false;

  const limit = Math.max(K1, K2);

  for (let x = 1; x <= limit; x++) {
    const flatsPerEntrance = M * x;

    const p2 = Math.ceil(K2 / flatsPerEntrance);
    const localK2 = K2 - (p2 - 1) * flatsPerEntrance;
    const n2 = Math.ceil(localK2 / x);

    if (p2 === P2 && n2 === N2) {
      const p1 = Math.ceil(K1 / flatsPerEntrance);
      const localK1 = K1 - (p1 - 1) * flatsPerEntrance;
      const n1 = Math.ceil(localK1 / x);

      if (!found) {
        ansP = p1;
        ansN = n1;
        found = true;
      } else {
        if (ansP !== p1) ansP = 0;
        if (ansN !== n1) ansN = 0;
      }
    }
  }

  if (P2 === 1 && N2 === 1) {
    const p1 = 1;
    const n1 = 1;

    if (!found) {
      ansP = p1;
      ansN = n1;
      found = true;
    } else {
      if (ansP !== p1) ansP = 0;
      if (ansN !== n1) ansN = 0;
    }
  }

  if (!found) {
    return '-1 -1'
  } else {
    return [ansP, ansN]
  }
};

console.log(Test(89,20, 41, 1, 11));