/*alert('Калькулятор');
var a = +prompt('Введите первое число');
var oper = prompt('Введите "+" или "-" или "*" или "/"');
var b = +prompt('Введите второе число');

if (oper == '+') {
	sum = a + b;
	alert('Результат: ' + sum);
} else if (oper == '-') {
	var sub = a - b;
	alert('Результат: ' + sub);
} else if (oper == '*') {
	var mult = a * b;
	alert('Результат: ' + mult);
} else if (oper == '/') {
	var div = a / b;
	alert('Результат: ' + div);
} */


function add() {
	document.getElementById("operators").value = '+';
}
function sub() {
	document.getElementById("operators").value = '-';
}
function mult() {
	document.getElementById("operators").value = '*';
}
function div() {
	document.getElementById("operators").value = '/';
}
function go() {
	var operator = document.getElementById("operators").value;
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;

	if (operator == '+') {
		document.querySelector('h2').textContent = (+number1 + +number2);
	} else if (operator == '-') {
		document.querySelector('h2').textContent = (+number1 - +number2);
	} else if (operator == '*') {
		document.querySelector('h2').textContent = (+number1 * +number2);
	} else if (operator == '/') {
		document.querySelector('h2').textContent = (+number1 / +number2);
	}
}
function allResults() {
	var number1 = document.getElementById("number1").value;
	var number2 = document.getElementById("number2").value;
	document.querySelector('#addit').textContent = ('Сложение: ' + (+number1 + +number2) );
	document.querySelector('#subt').textContent = ('Вычитание: ' + (+number1 - +number2) );
	document.querySelector('#multip').textContent = ('Умножение: ' + (+number1 * +number2) );
	document.querySelector('#divis').textContent = ('Деление: ' + '' + (+number1 / +number2) );
}