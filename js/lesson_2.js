// 1

var a = 1;
var b = 1;
var c, d;

c = ++a;       			  // 2 - потому что сначала выполняется операция инкременации, потом присвоения, потом вывод
d = b++;      			  // 1 - тут наоборот, сначала присвоение, потом вывод, затем инкременация, после всех операций b = 2
c = (2+ ++a);  			  // 5 - а уже = 2, инкременация а = 3, + 2, с = 5
d = (2+ b++);  			  // 4 - b уже = 2, + 2, d = 4, вывод, потом инкременация b = 3 , после всех операций d = 5



// 2

var a = 2;
var x = 1 + (a *= 2);	  // x = 5



// 3

/*
var a = + prompt ('Пожалуйста, введите 1 чиcло');
var b = + prompt ('Пожалуйста, введите 2 чиcло');
var c;

if (a >= 0 && b >= 0) {
	console.log ('Разность a и b = ' + (a - b))
} else if (a < 0 && b < 0) {
	console.log ('Произведение a и b = ' + (a * b))
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
	console.log ('Сумма a и b = ' + (a +b));
} else {
	alert ('Вас просили ввести число');
	window.location.reload();
}
*/



// 4       
// Не совсем понял это задание: надо выводить каждое число отдельно или просто числовой ряд? или вообще через массив делать?

var a = Math.round(Math.random() * 15);

// Вариант решения через цикл for без switch, так как он мне тоже не нравится)

/*
for (var n = a; n <= 15; n++) {    
	console.log(n);
}
*/

// Вариант со switch, break убран умышленно, чтобы проходили все действия

/*
switch (a) {
	case 0:
		console.log(a);	
		a++;				  
	case 1:
		console.log(a);	
		a++;
	case 2:
		console.log(a);	
		a++;
	case 3:
		console.log(a);	
		a++;
	case 4:
		console.log(a);	
		a++;
	case 5:
		console.log(a);	
		a++;
	case 6:
		console.log(a);	
		a++;
	case 7:
		console.log(a);	
		a++;
	case 8:
		console.log(a);	
		a++;
	case 9:
		console.log(a);	
		a++;
	case 10:
		console.log(a);	
		a++;
	case 11:
		console.log(a);	
		a++;
	case 12:
		console.log(a);	
		a++;
	case 13:
		console.log(a);	
		a++;
	case 14:
		console.log(a);	
		a++;
	case 15:
		console.log(a);
}
*/



// 5

var sum = function (x, y) {
	return x + y;
}

var sub = function (x, y) {
	return x - y;
}

var mult = function (x, y) {
	return x * y;
}

var div = function (x, y) {
	return x / y;
}




// 6

/*
var a = + prompt ('Пожалуйста, введите 1 чиcло');
var b = + prompt ('Пожалуйста, введите 2 чиcло');
var c = + prompt ('Пожалуйста, выберите операцию \n 1 - сложение \n 2 - вычитание \n 3 - умножение \n 4 - деление');

if (isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
	alert ('Вас просили ввести число');
	window.location.reload();
} 

if (c < 1 || c > 4) {
	alert ('Выберите одну из четырех операций');
	window.location.reload();
} 

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case 1:
			return sum (arg1, arg2);	
			break;				  
		case 2:
			return sub (arg1, arg2);	
			break;
		case 3:
			return mult (arg1, arg2);	
			break;
		case 4:
			return div (arg1, arg2);	
			break;
	}
}

console.log (mathOperation (a, b, c));
*/



// 7

/*
console.log(null == 0);  // false
console.log(null === 0); // false
console.log(null > 0);   // false
console.log(null >= 0);  // true
*/

// Разобрался только прочитав статью https://habr.com/ru/company/ruvds/blog/337732/


// 8 - восьмое задание пока не успеваю, но обязательно попробую сделать)