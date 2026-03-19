/*
On New Avenue, 10 buildings have been constructed in a row. Each building can be either a residential house, a shop, or an office building.

It turned out that for residents of some houses on New Avenue, the nearest shop is too far away. To develop a public transport plan for New Avenue, the city mayor asked you to determine the maximum distance that residents have to walk from their house to the nearest shop.

Input format:
The program receives ten integers separated by spaces. Each number represents the type of a building on New Avenue:
1 — residential house,
2 — shop,
0 — office building.
It is guaranteed that there is at least one residential house and at least one shop on New Avenue.

Output format:
Output a single integer: the maximum distance from a house to its nearest shop.
The distance between two neighboring buildings is considered to be 1.
(That is, if two buildings stand next to each other, the distance between them is 1; if there is one building between them, the distance is 2, and so on.)
*/

function Test(arr) {
  let final = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 1) {
      let LValue = 0;
      let BValue = 0;

      for (l = i; l >= 0; l--) {
        if (arr[l] === 2) {
          LValue = Math.max(LValue, i - l);
          break;
        }
      }

      for (b = i; b <= arr.length - 1; b++) {
        if (arr[b] === 2) {
          BValue = Math.max(BValue, b - i);
          break;
        }
      }

      if (LValue !== 0 && BValue !== 0) {
        final.push(Math.min(LValue, BValue));
      } else if (LValue !== 0 && BValue === 0) {
        final.push(LValue);
      } else if (LValue === 0 && BValue !== 0) {
        final.push(BValue);
      }
    }
  }

  final.sort((a, b) => b - a);
  return final[0];
}

console.log(Test([2, 0, 1, 1, 0, 1, 0, 2, 1, 2]));
