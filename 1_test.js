/*
Tree Painting

Vasya and Masha are painting trees along a street.
Trees are located every 1 meter and numbered:
..., -2, -1, 0, 1, 2 ...

Vasya's bucket is at tree P, he can move at most V meters.
Masha's bucket is at tree Q, she can move at most M meters.

Find how many trees can be painted.

Input:
P V
Q M

Output:
number of trees
*/

function Test(arrV, arrM) {
  let V0 = arrV[0] - arrV[1];
  let V1 = arrV[0] + arrV[1];

  let M0 = arrM[0] - arrM[1];
  let M1 = arrM[0] + arrM[1];

  if (M0 >= V0 && M1 <= V1) {
    return Math.abs(V1 - V0) + 1;
  } else if (M0 <= V0 && M1 >= V1) {
    return Math.abs(M1 - M0) + 1;
  } else if (M0 >= V0 && M0 <= V1 && M1 >= V1) {
    return Math.abs(M1 - V0) + 1;
  } else if (M0 <= V0 && M1 <= V1 && M1 >= V0) {
    return Math.abs(V1 - M0) + 1;
  } else {
    return Math.abs(V1 - V0) + Math.abs(M1 - M0) + 2;
  }
}

console.log(Test([0, 7], [12, 5])); // 25
