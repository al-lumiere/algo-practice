/*
Ambulance

An ambulance team was dispatched to a call in one of the remote districts.
Unfortunately, when the dispatcher received the call, he managed to write down
only the building address and the apartment number K1, and then the connection
was lost.

However, he remembered that some time ago an ambulance had been dispatched
to the same building address to apartment K2, which is located in entrance P2
on floor N2.

It is known that the building has M floors, and the number of apartments
on each floor in each entrance is the same.

Write a program that determines the entrance number P1 and the floor number N1
for apartment K1.

Input:
K1 M K2 P2 N2

Output:
P1 N1

If the input data does not allow determining P1 or N1 uniquely, output 0 instead
of the corresponding number.

If the input data is contradictory, output:
-1 -1
*/

function Test(inf) {
  let appQ = 0;

  if (inf[3] === 1) {
    appQ = Math.ceil(inf[2] / inf[4]);
  } else {
    appQ = Math.ceil((inf[2] / (inf[4] + ((inf[3] - 1) * inf[1]))))
  }

  let flQ = Math.ceil(inf[0] / appQ);

  console.log(flQ);

  let floor = Math.ceil(flQ % inf[1]);
  let entrance = Math.ceil(flQ / inf[1]);

  return [entrance, floor]
}

console.log(Test([89, 20, 41, 1, 11]));
console.log(Test([11, 1, 1, 1, 1]));
