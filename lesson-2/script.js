"use strict";

//----------ЗАДАНИЕ 1--------

//Пример-1

let a = 1,
  b = 1,
  c,
  d;
c = ++a;
console.log(c); // 2
/*
- Объявляем переменные и присваиваем a значение 1
- Присваиваем c значение а
- ++(инкремент префиксный) - увеличивает заданную переменную на 1, поэтому в консоли получим 2
*/

//Пример-2

d = b++;
console.log(d); //1
/*
- Присваиваем переменной d значение b
- ++(постфиксный инкремент) - сначала возвращает значение, а затем увеличивается на 1, поэтому получим 1
 */

//Пример-3

c = 2 + ++a;
console.log(c); //5
/*
- Переменная а, в данный момент имеет значение 2, после первого инкремента
- ++(префиксный инкремент) - увеличиваем переменную а на 1
- Значение переменной c будет равно2 + 3 = 5
*/

//Пример-4

d = 2 + b++;
console.log(d); //4
/*
- Переменная b, в данный момент имеет значение 2
- ++(постфиксный инкремент) - сначала 2 складываем с текущим значением b
- Присваиваем d полученное значение 4, затем увеличиваем b на 1
*/

console.log(a); // 3
console.log(b); // 3

//------ЗАДАНИЕ 2----------

let y = 2;
let x = 1 + (y *= 2);
console.log(x); //5
/*
- Объявляем переменную y и присваиваем ей значение 2
- Объявляем переменную x
- *=(умножение с присвоением) - текущее значение y умножаем на 2 затем к произведению прибавляем 1
- Переменной х присваиваем значение - 5
*/

//-----ЗАДАНИЕ 3-------

let n1 = -10;
let n2 = 12;

if (n1 >= 0 && n2 >= 0) {
  console.log(n1 - n2);
} else if (n1 <= 0 && n2 <= 0) {
  console.log(n1 * n2);
} else if (n1 * n2 < 0) {
  console.log(n1 + n2);
}

//-------ЗАДАНИЕ 4------

function plus(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// -----ЗАДАНИЕ 5 ------

function mathOperation(arg1, arg2, operation) {
  switch (operation) {
    case "+":
      return plus(arg1, arg2);
    case "-":
      return minus(arg1, arg2);
    case "*":
      return multiply(arg1, arg2);
    case "/":
      return divide(arg1, arg2);
    default:
      console.log("Error");
  }
}

console.log(mathOperation(5, 2, "+"));