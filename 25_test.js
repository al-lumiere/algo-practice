/*
You are given a database of sales from an online store.
Each line of the input file represents a record in the format:
Buyer Product Quantity, where:
- Buyer is the name of the customer (a string without spaces),
- Product is the name of the product (a string without spaces),
- Quantity is the number of units of the product purchased.

Create a list of all buyers, and for each buyer calculate the total number
of units purchased for each type of product.

Input format:
The input contains purchase records in the format described above.

Output format:
Print the list of all buyers in lexicographical order.
After each buyer's name, print a colon, then print the list of all products
purchased by that buyer in lexicographical order.
After each product name, print the total number of units of that product
purchased by the given buyer.
Information about each product should be printed on a separate line.
*/

function Test(arr) {
  let obj = new Object();

  for (let i = 0; i <= arr.length-1; i++) {
    let x = arr[i].split(" ");
    x[2] = Number(x[2]);

    if (obj[x[0]]) {
      if (obj[x[0]][x[1]]) {
        obj[x[0]][x[1]] += x[2];
      } else {
        obj[x[0]][x[1]] = x[2];
      }
    } else {
      obj[x[0]] = new Object();
      obj[x[0]][x[1]] = x[2];
    }
  }

  return obj
}

console.log(Test(["Ivanov paper 10", "Petrov pens 5", "Ivanov marker 3", "Ivanov paper 7", "Petrov envelope 20", "Ivanov envelope 5"]));
console.log(Test(['Ivanov aaa 1',
'Petrov aaa 2',
'Sidorov aaa 3',
'Ivanov aaa 6',
'Petrov aaa 7',
'Sidorov aaa 8',
'Ivanov bbb 3',
'Petrov bbb 7',
'Sidorov aaa 345',
'Ivanov ccc 45',
'Petrov ddd 34',
'Ziborov eee 234',
'Ivanov aaa 45']));