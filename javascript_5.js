let age = prompt(`Введите ваш возраст:`);
let range1 = "Мы можем выдать максимум 50000";
let range2 = "Мы можем выдать максимум 400000";
let range3 = "Мы можем выдать максимум 1000000";
if(age < 18) {
	alert(`Вы не можете получить кредит!`);
} else if(age >= 18 && age <=21) {
	let sum = prompt(`${range1}\n` + `Введите сумму кратную 1000`);
	let multiplicity = sum % 1000;
	if(multiplicity > 0) {
		alert(`Вы ввели значение не кратное 1000. Мы можем выдать ` + `${Math.round( sum / 1000 ) * 1000}`);
	}
} else if(age >= 22 && age <=35) {
	let sum = prompt(`${range2}\n` + `Введите сумму кратную 1000`);
	let multiplicity = sum % 1000;
	if(multiplicity > 0) {
		alert(`Вы ввели значение не кратное 1000. Мы можем выдать ` + `${Math.round( sum / 1000 ) * 1000}`);
	}
} else if(age >= 36 && age <=65) {
	let sum = prompt(`${range3}\n` + `Введите сумму кратную 1000`);
	let multiplicity = sum % 1000;
	if(multiplicity > 0) {
		alert(`Вы ввели значение не кратное 1000. Мы можем выдать ` + `${Math.round( sum / 1000 ) * 1000}`);
	}
}