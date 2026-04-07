/*
Implement a stack data structure for integers and simulate its behavior.

The program reads a sequence of commands (one per line) and executes them.
After each command, the program must output a result on a separate line.

Supported commands:

push n
Push the integer n onto the stack.
Output: "ok"

pop
Remove and output the top element of the stack.

back
Output the top element without removing it.

size
Output the number of elements in the stack.

clear
Clear the stack.
Output: "ok"

exit
Output "bye" and terminate the program.

Important:
Before executing "pop" or "back", check whether the stack is empty.
If it is empty, output "error" instead of a number.
*/

function Test(arr) {
  let finArr = [];
  let ans = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    let cmd = arr[i].split(" ");

    if (finArr.length === 0 && (cmd[0] === "pop" || cmd[0] === "back")) {
      ans.push("error");
      continue;
    }

    if (cmd[0] === "push") {
      finArr.push(cmd[1]);
      ans.push("ok");
    } else if (cmd[0] === "pop") {
      ans.push(finArr[finArr.length - 1]);
      finArr.pop();
    } else if (cmd[0] === "back") {
      ans.push(finArr[finArr.length - 1]);
    } else if (cmd[0] === "size") {
      ans.push(finArr.length);
    } else if (cmd[0] === "clear") {
      finArr = [];
      ans.push("ok");
    } else if (cmd[0] === "exit") {
      ans.push("bye");
      break;
    }
  }

  return ans.join("\n");
}

console.log(Test(["push 1", "back", "exit"]));
console.log(
  Test(["size", "push 1", "size", "push 2", "size", "push 3", "size", "exit"]),
);
console.log(
  Test([
    "push 3",
    "push 14",
    "size",
    "clear",
    "push 1",
    "back",
    "push 2",
    "back",
    "pop",
    "size",
    "pop",
    "size",
    "exit",
  ]),
);
