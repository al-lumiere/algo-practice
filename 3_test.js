/*
Air Conditioner

In Petr's office, a new type of air conditioner was installed.
This air conditioner is very simple to control: it has only two parameters —
desired temperature and operating mode.

The air conditioner supports four modes:

freeze — cooling mode.
It can only decrease the room temperature.
If the room temperature is already not greater than the desired temperature,
the air conditioner turns off.

heat — heating mode.
It can only increase the room temperature.
If the room temperature is already not less than the desired temperature,
the air conditioner turns off.

auto — automatic mode.
It can both increase and decrease the temperature to reach the desired value.

fan — ventilation mode.
It only circulates air and does not change the temperature.

The air conditioner is powerful enough to reach the desired temperature
within one hour if the selected mode allows it.

Your task is to determine the temperature in the room after one hour.

Input:
t_room t_cond
mode

Constraints:
-50 ≤ t_room ≤ 50
-50 ≤ t_cond ≤ 50

Output:
The temperature in the room after one hour.
*/

function Test(temp, mode) {
  let Tr = temp[0];
  let Tc = temp[1];

  let n = Tc - Tr;

  if (n > 0 && (mode === "heat" || mode === "auto")) {
    return Tc;
  } else if (n < 0 && (mode === "freeze" || mode === "auto")) {
    return Tc;
  } else if (n === 0) {
    return Tc
  } else {
    return Tr
  }
}

console.log("20, 20, 10");
console.log(Test([10, 20], "heat"));
console.log(Test([20, 10], "heat"));
console.log(Test([10, 10], "heat"));

console.log("10, 10, 10");
console.log(Test([10, 20], "freeze"));
console.log(Test([20, 10], "freeze"));
console.log(Test([10, 10], "freeze"));

console.log("20, 10, 10");
console.log(Test([10, 20], "auto"));
console.log(Test([20, 10], "auto"));
console.log(Test([10, 10], "auto"));

console.log("10, 20, 10");
console.log(Test([10, 20], "fan"));
console.log(Test([20, 10], "fan"));
console.log(Test([10, 10], "fan"));

console.log("50, -50, -50, 50");
console.log(Test([-50, 50], "heat"));
console.log(Test([50, -50], "freeze"));
console.log(Test([-50, -50], "auto"));
console.log(Test([50, 50], "fan"));
