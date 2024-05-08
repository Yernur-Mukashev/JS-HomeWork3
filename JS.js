// Задание № 1
function cubeAndSum(x, y) {
	let result = Math.pow(x, 3) + Math.pow(y, 3);
	console.log(result);
}
cubeAndSum(2, 3);

// Задание № 2

function salary(money) {
	let num = parseFloat(money);
	if (!isNaN(num)) {
		money = money * 0.87; // money - money * 0.13
		return money;
	} else {
		console.log("Значение задано неверно");
	}
}

const userMoney = Number(prompt("Сколько Вы зарабатываете?"));

let moneyMonth = salary(userMoney);

console.log(
	`Размер заработной платы за вычетом налогов равен ${salary(userMoney)}`
);

// Задание № 3
function findMaxNumber(num1, num2, num3) {
	return Math.max(num1, num2, num3);
}

let input1 = parseFloat(prompt("Введите первое число:"));
let input2 = parseFloat(prompt("Введите второе число:"));
let input3 = parseFloat(prompt("Введите третье число:"));

if (!isNaN(input1) && !isNaN(input2) && !isNaN(input3)) {
	var maxNumber = findMaxNumber(input1, input2, input3);
	console.log("Максимальное число: " + maxNumber);
} else {
	console.log("Ошибка ввода. Введите числа корректно.");
}


// Задача №4
function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  if (a > b) {
      return a - b;
  } else if (a < b) {
      return b - a;
  } else {
      return 0;
  }
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
let a = 6;
let b = 8;
console.log("Сумма:", sum(a, b));
console.log("Разность:", difference(a, b));
console.log("Умножение:", multiply(a, b));
console.log("Деление:", divide(a, b));
