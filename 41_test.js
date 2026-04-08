/*
During a programming contest, a special browser is used to collect telemetry.

There are n text windows open on the participant's computer, each displaying a text file.
At the beginning, all windows are empty.
At any moment, each window shows the last k characters of its text document.

The participant can press several kinds of keys:

1. Lowercase Latin letters.
   The corresponding character is appended to the end of the current text file.

2. Backspace.
   One character is removed from the end of the current text document.
   If the document is empty, nothing happens.

3. Copy.
   The part of the current text file that is currently visible on the screen
   is saved to the clipboard.

4. Paste.
   The contents of the clipboard are appended to the end of the current text file.
   Initially, the clipboard is empty.

5. Next.
   Switches to the next window.
   The order of windows is always the same.
   After the last window, this key switches to the first one.

Determine what will be displayed on the screen after all keys are pressed.

Input format:
The first line contains three positive integers n, m, k
(1 ≤ n ≤ 10; 1 ≤ m, k ≤ 1000) — the number of windows on the participant's computer,
the number of key presses, and the limit on the number of characters displayed in a window.

Each of the next m lines contains a description of a pressed key:
either a lowercase Latin letter or the name of one of the keys described above.

Output format:
Output in a single line the information that will be displayed on the computer screen
after all keys have been pressed.

If the current text file is empty, output "Empty".
*/

function Test(arr, str) {
  let cmd = str.split(" ");
  let n = arr[0];
  let m = arr[1];
  let k = arr[2];
  let taps = [];
  let copy = [];

  for (let i = 0; i <= n - 1; i++) {
    taps.push([]);
  }

  let cur = 0;
  for (let i = 0; i <= m - 1; i++) {
    if (cmd[i] === "Backspace" && taps[cur].length !== 0) {
      taps[cur].pop();
    } else if (cmd[i] === "Copy") {
      copy = taps[cur].slice(Math.max(0, taps[cur].length - k));
    } else if (cmd[i] === "Paste") {
      for (let y = 0; y <= copy.length - 1; y++) {
        taps[cur].push(copy[y]);
      }
    } else if (cmd[i] === "Next") {
      cur = (cur + 1) % n;
    } else if (cmd[i] !== "Backspace") {
      taps[cur].push(cmd[i]);
    }
  }

  let fin = taps[cur].slice(-k).join("");

  if (fin.length === 0) {
    return "Empty";
  } else {
    return fin;
  }
}

console.log(Test([2, 7, 10], "Next a b Copy Next Paste Paste"));
console.log(Test([1, 1, 10], "Backspace"));
