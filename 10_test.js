/*
A rebus is a sequence of pictures. Apostrophes may appear on both sides of each picture.
Each picture corresponds to some word.

Suppose there are i apostrophes before a picture and j apostrophes after it.
This means that for the word corresponding to that picture, you must remove
i letters from the beginning and j letters from the end. The remaining part
of the word replaces the picture along with its surrounding apostrophes.

This must be done for every picture and its adjacent apostrophes.
After processing all pictures, the resulting parts must be concatenated
into a single word.

Input format:
A single line contains the rebus (length ≤ 100 characters).
It is guaranteed that the string contains only apostrophes (ASCII code 39),
spaces, and lowercase Latin letters. The rebus is valid, meaning that
no word requires removing more letters than its length.

Output format:
Print one word — the solution to the rebus.

Example:
Input:
yandex'''' 'algo''' trainings''''

Output:
yatrain
*/

function Test(str) {
  let arr = str.split(" ");
  let NArr = arr.map((item) => item.split(""));
  let final = "";

  for (let i = 0; i <= NArr.length - 1; i++) {
    let a = NArr[i];
    let bef = 0;
    let af = 0;
    let letter = 0;

    for (let k = 0; k <= a.length - 1; k++) {
      if (a[k] === "'" && letter === 0) {
        bef++;
      } else if (a[k] === "'" && letter !== 0) {
        af++;
      } else if (a[k] !== "'") {
        letter++;
      }
    }

    let word = NArr[i].slice(bef * 2, NArr[i].length - af * 2);
    final += word.join("");
  }

  return final;
}

console.log(Test("yandex'''' 'algo''' trainings''''"));
console.log(Test(""));
console.log(Test("yandex yandex yandex"));
console.log(Test("''cat'"));
