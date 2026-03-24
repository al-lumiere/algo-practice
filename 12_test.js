/*
You are given a rectangular bedsheet of size n × m and a rectangular package of size h × w.

You can fold the bedsheet along lines parallel to its sides.
Each fold reduces one chosen side of the bedsheet by half.

You may rotate both the bedsheet and the package (i.e., swap their sides).

Your task is to determine the minimum number of folds required so that the folded bedsheet
can fit entirely inside the package.

Constraints:
- All values n, m, h, w are integers.
- 1 ≤ n, m, h, w ≤ 10^18

Output:
- Print the minimum number of folds needed.
- If the bedsheet already fits, output 0.
*/

function Test(arr) {
  let [pr1, pr2, pac1, pac2] = arr;

  if ((pr1 <= pac1 && pr2 <= pac2) || (pr2 <= pac1 && pr1 <= pac2)) {
    return 0;
  }

  let n1 = 0;
  let n2 = 0;
  let n3 = 0;
  let n4 = 0;

  let a = pac1;
  while (a < pr1) {
    a *= 2;
    n1++;
  }

  a = pac2;
  while (a < pr1) {
    a *= 2;
    n2++;
  }

  a = pac1;
  while (a < pr2) {
    a *= 2;
    n3++;
  }

  a = pac2;
  while (a < pr2) {
    a *= 2;
    n4++;
  }

  return n1 + n4 < n2 + n3 ? n1 + n4 : n2 + n3;
}

console.log(Test([10, 20, 20, 10])); //0
console.log(Test([3, 3, 2, 2])); //2
console.log(Test([10, 20, 10, 20])); //0
console.log(Test([10, 20, 5, 20])); //1
console.log(Test([10, 20, 10, 10])); //1
console.log(Test([10, 20, 5, 10])); //2
console.log(Test([100, 25, 13, 25])); //3
console.log(Test([8, 5, 6, 4])); //1
