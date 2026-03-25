/*
In the arcade museum, there is an old tabletop basketball game. n people are playing it.
There are two hoops, and each player can score in either of them and get one, two, or three points.

The score of the game is represented by two numbers — how many points were scored in the first hoop
and in the second hoop, respectively. The numbers are separated by a colon.
For example: "30:41 Vasya".

Determine which player scored the most points.

Input format:
- The first line contains an integer n (1 <= n <= 50) — the number of players.
- The next n lines contain the players' names si (1 <= |si| <= 15).
  The names consist only of uppercase and lowercase Latin letters.
- Line number n + 2 contains an integer m (1 <= m <= 500) — the number of score records.
- The next m lines contain records in the format "ai:bi ti" without quotes, where:
  - ai is the number of points scored in the first hoop,
  - bi is the number of points scored in the second hoop,
  - ti is the name of the player who made the score become this.
- It is guaranteed that all records are valid.

The initial score is 0:0.

Output format:
Print the name of the player who scored the most points and the number of points they scored,
separated by a space.
If there are multiple correct answers, print any of them.
*/

function Test(n, arr1, q, arr2) {
  let obj1 = new Object();
  for (let i = 0; i<= arr1.length-1; i++) {
    obj1[arr1[i]] = 0;
  }

  let count = 0;

  for (let i = 0; i<= arr2.length-1; i++) {
    let x = arr2[i].split(" ");
    let parts = x[0].split(":")
    let h = Number(parts[0]);
    let m = Number(parts[1]);
    x[0] = h+m;
    obj1[x[1]] += x[0] - count;
    count = x[0]
  }

  let [key, value] = Object.entries(obj1).reduce((max, curr) => curr[1] > max[1] ? curr : max);

  return [key, value]
}

console.log(Test(3,[ "Vasya", "Petya", "Masha"], 4,
["3:0 Vasya",
"3:2 Petya",
"4:2 Masha",
"7:2 Masha"]));
