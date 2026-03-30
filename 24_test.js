/*
You are given a dictionary consisting of pairs of words.
Each word is a synonym of the word paired with it.
All words in the dictionary are distinct.

For a given word, determine its synonym.

Input format:
The program receives an integer N — the number of synonym pairs.
Then follow N lines, each containing exactly two synonym words.
After that, one more word is given.

Output format:
Output the synonym of the given word.
*/

function Test(n, arr, str) {
  let obj = new Object();

  for (let i = 0; i <= n-1; i++) {
    obj[arr[i][0]] = arr[i][1];
  }

  if (obj[str]) {
    return obj[str]
  } else {
    return Object.keys(obj).find(k => obj[k] === str);
  }
}

console.log(Test(3, [["Hello", "Hi"], ["Bye", "Goodbye"], ["List", "Array"]], "Goodbye"));