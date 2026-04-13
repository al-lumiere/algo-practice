/*
There is a card game played by two players.

A deck of 10 distinct cards with values from 0 to 9 is split evenly:
each player receives 5 cards. The cards are given in order from top to bottom,
so the first number in each input line is the top card of that player's deck.

The game proceeds in turns:
- Each player reveals (removes) the top card of their deck.
- The player with the higher card wins the round and takes both cards.
- The winner places both cards at the bottom of their deck:
  first the card of the first player, then the card of the second player.

Special rule:
- Card 0 beats card 9.

The game continues until one player has no cards left.
That player loses.

Input:
- Two lines.
- Each line contains 5 integers (from 0 to 9), representing the decks
  of the first and second player respectively (top to bottom).

Output:
- If the game finishes, output:
  "first X" if the first player wins, or
  "second X" if the second player wins,
  where X is the number of turns taken.
- If the game does not finish within 10^6 moves, output:
  "botva".
*/

function Test(str1, str2) {
  let arr1 = str1.split(" ").map(Number);
  let arr2 = str2.split(" ").map(Number);
  let n = 0;

  while (arr1.length !== 0 && arr2.length !== 0) {
    if (n >= 1000000) {
      return "botva";
    }

    let cur1 = arr1[0];
    let cur2 = arr2[0];

    if (cur1 === 0 && cur2 === 9) {
      arr1.push(cur1, cur2);
      arr1.shift();
      arr2.shift();
    } else if (cur2 === 0 && cur1 === 9) {
      arr2.push(cur1, cur2);
      arr1.shift();
      arr2.shift();
    } else if (cur1 > cur2) {
      arr1.push(cur1, cur2);
      arr1.shift();
      arr2.shift();
    } else {
      arr2.push(cur1, cur2);
      arr1.shift();
      arr2.shift();
    }

    n++;
  }

  if (arr1.length === 0) {
    return `second ${n}`;
  } else {
    return `first ${n}`;
  }
}

console.log(Test("1 3 5 7 9", "2 4 6 8 0"));
console.log(Test("2 4 6 8 0", "1 3 5 7 9"));
console.log(Test("1 7 3 9 4", "5 8 0 2 6"));
console.log(Test("1 3 5 7 9", "2 4 6 8 0"));
console.log(Test("0 1 2 3 4", "9 5 6 7 8"));
console.log(Test("9 1 2 3 4", "0 5 6 7 8"));
console.log(Test("5 6 7 8 9", "0 1 2 3 4"));
console.log(Test("0 2 4 6 8", "1 3 5 7 9"));
console.log(Test("2 1 0 4 3", "5 6 7 8 9"));
