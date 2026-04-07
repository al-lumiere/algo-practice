/*
A train arrives at a dead-end track from track 1 (see the diagram).
You are allowed to detach one or several cars from the front of the train
and move them into the dead-end track (you may even move the entire train at once).

After that, you can move some of these cars from the dead-end track to track 2.
Then you can again move some cars from track 1 into the dead-end track,
and again move some cars from the dead-end track to track 2, and so on.

Each car can enter the dead-end track from track 1 only once,
and then leave the dead-end track to track 2 only once.

It is forbidden to move cars from track 2 back into the dead-end track,
or from the dead-end track back to track 1.
Also, it is impossible to move a car directly from track 1 to track 2 without using the dead-end track.

The initial order of the train cars is given.
Determine whether it is possible to rearrange the cars so that they leave to track 2
in increasing order: 1, 2, ..., N.

Input:
The first line contains an integer N — the number of cars (1 ≤ N ≤ 100).
The second line contains N distinct integers from 1 to N —
the order of the cars from the front of the train on track 1.

Output:
If it is possible to obtain the order 1 to N on track 2, output "YES".
Otherwise, output "NO".
*/

function Test(n, arr) {
  let arr2 = [];
  let arrT = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let firstCar1 = arr[i];
    let lastCarT = arrT[arrT.length - 1];
    let lastCar2 = arr2[arr2.length - 1];

    if (firstCar1 > lastCarT && lastCarT !== undefined) {
      return "NO";
    }

    arrT.push(firstCar1);
    lastCarT = firstCar1;

    if (lastCarT === 1) {
      arr2.push(lastCarT);
      lastCar2 = lastCarT;
      lastCarT = arrT[arrT.length - 2];
      arrT.pop();
    }

    while (lastCarT === lastCar2 + 1) {
      arr2.push(lastCarT);
      lastCar2 = lastCarT;
      lastCarT = arrT[arrT.length - 2];
      arrT.pop();
    }
  }

  return "YES";
}

console.log(Test(3, [3, 2, 1]));
console.log(Test(4, [4, 1, 3, 2]));
console.log(Test(3, [2, 3, 1]));

console.log(Test(1, [1])); // YES
console.log(Test(2, [1, 2])); // YES
console.log(Test(2, [2, 1])); // YES

console.log(Test(3, [3, 2, 1])); // YES
console.log(Test(5, [5, 4, 3, 2, 1])); // YES
console.log(Test(5, [2, 1, 4, 3, 5])); // YES

console.log(Test(3, [2, 3, 1])); // NO
console.log(Test(4, [3, 1, 2, 4])); // YES
console.log(Test(5, [1, 3, 2, 5, 4])); // YES
console.log(Test(5, [2, 4, 1, 3, 5])); // NO
