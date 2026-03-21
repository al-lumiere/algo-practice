/*
Vasya is building an LLM-based bot to chat with girls. The bot sends a meme, and ideally the girl should respond with laughter.
To improve the bot using reinforcement learning, it is necessary to evaluate the longest sequence of laughter in the reply.

Vasya defines laughter as a sequence of alternating letters 'a' and 'h'.
For example:
- "ahahaha", "hah", and "a" are considered laughter
- "abacaba" and "hh" are NOT considered laughter

You are given the girl's reply as a string.
Your task is to find the length of the longest substring that represents laughter.

Input format:
- The first line contains a natural number n (1 ≤ n ≤ 100000) — the length of the reply string.
- The second line contains a string of lowercase Latin letters of length n — the girl's reply.

Output format:
- Output a single integer — the maximum length of a substring that is considered laughter.
*/

function Test(n, str) {
  let arr = str.split("");
  let count = 0;
  let res = 0;

  let look = "a";
  let letter = "h";

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === look) {
      count++;
      look = letter;
      letter = arr[i];
    } else {
      if (count > res) {
        res = count;
      }
      look = "a";
      letter = "h";
      count = 0;

      if (arr[i] === look) {
        count++;
        look = letter;
        letter = arr[i];
      }
    }
  }

  if (count > res) {
    res = count;
  }

  look = "h";
  letter = "a";
  count = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === look) {
      count++;
      look = letter;
      letter = arr[i];
    } else {
      if (count > res) {
        res = count;
      }
      look = "h";
      letter = "a";
      count = 0;

      if (arr[i] === look) {
        count++;
        look = letter;
        letter = arr[i];
      }
    }
  }

  if (count > res) {
    res = count;
  }

  return res;
}

console.log(Test(5, "abaha"));
console.log(Test(10, "hahahxahah"));
console.log(Test(9, "hhahahahh"));
console.log(Test(10, "aaahhhhaaa"));
console.log(Test(7, "abahaha"));
console.log(Test(10, "ahahaahaha"));
