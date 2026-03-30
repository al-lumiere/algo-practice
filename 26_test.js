/*
A bank wants to implement a system for managing client accounts
that supports the following operations:

- Deposit money into a client's account.
- Withdraw money from a client's account.
- Query the balance of an account.
- Transfer money between clients' accounts.
- Apply interest to all clients.

You need to implement such a system.

Clients are identified by unique names (strings without spaces).
Initially, the bank has no clients.

Whenever a deposit, withdrawal, or transfer operation is performed
for a client who does not yet have an account, an account is created
with a balance of 0.

All further operations are performed on this account.
The account balance can be both positive and negative,
but it is always an integer.

Input format:
The input contains a sequence of operations. The following operations are possible:

DEPOSIT name sum — add the amount sum to the account of client name.
If the client does not have an account, it is created.

WITHDRAW name sum — subtract the amount sum from the account of client name.
If the client does not have an account, it is created.

BALANCE name — output the balance of client name's account.

TRANSFER name1 name2 sum — transfer the amount sum from the account of client
name1 to the account of client name2.
If either client does not have an account, it is created.

INCOME p — apply p% interest to all clients who have accounts.
Interest is applied only to clients with a positive balance.
If a client's balance is negative, it does not change.
After applying interest, the balance remains an integer:
only the integer part of the accrued interest is added,
and the fractional part is discarded.

Output format:
For each BALANCE query, output the balance of the specified client's account.
If the client does not have an account, output "ERROR".
*/

function Test(arr) {
  let obj = new Object();
  let final = [];

  function Account(name) {
    if (!obj.hasOwnProperty(name)) {
      obj[name] = 0;
    }
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    let x = arr[i].split(" ");
    let cmd = x[0];
    let name1 =
      cmd === "DEPOSIT" ||
      cmd === "WITHDRAW" ||
      cmd === "TRANSFER" ||
      cmd === "BALANCE"
        ? x[1]
        : " ";
    let name2 = cmd === "TRANSFER" ? x[2] : " ";
    let ammount = Number(x[x.length - 1]);

    if (cmd === "DEPOSIT") {
      Account(name1);
      obj[name1] += ammount;
    } else if (cmd === "WITHDRAW") {
      Account(name1);
      obj[name1] -= ammount;
    } else if (cmd === "BALANCE") {
      if (!obj.hasOwnProperty(name1)) {
        final.push("ERROR");
      } else {
        final.push(obj[name1]);
      }
    } else if (cmd === "TRANSFER") {
      Account(name1);
      Account(name2);
      obj[name1] -= ammount;
      obj[name2] += ammount;
    } else if (cmd === "INCOME") {
      let keys = Object.keys(obj);
      for (let i = 0; i <= keys.length - 1; i++) {
        Account(keys[i]);
        if (obj[keys[i]] > 0) {
          obj[keys[i]] += Math.floor((obj[keys[i]] * x[x.length - 1]) / 100);
        }
      }
    }
  }
  return final;
}

console.log(
  Test([
    "DEPOSIT Ivanov 100",
    "INCOME 5",
    "BALANCE Ivanov",
    "TRANSFER Ivanov Petrov 50",
    "WITHDRAW Petrov 100",
    "BALANCE Petrov",
    "BALANCE Sidorov",
  ]),
);

console.log(
  Test([
    "BALANCE Ivanov",
    "BALANCE Petrov",
    "DEPOSIT Ivanov 100",
    "BALANCE Ivanov",
    "BALANCE Petrov",
    "DEPOSIT Petrov 150",
    "BALANCE Petrov",
    "DEPOSIT Ivanov 10",
    "DEPOSIT Petrov 15",
    "BALANCE Ivanov",
    "BALANCE Petrov",
    "DEPOSIT Ivanov 46",
    "BALANCE Ivanov",
    "BALANCE Petrov",
    "DEPOSIT Petrov 14",
    "BALANCE Ivanov",
    "BALANCE Petrov",
  ]),
);
