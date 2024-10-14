let name = prompt (`Введите ваше имя:`);
let num = +prompt (`Введите ващ год рождения:`);
let	Year = Number(num);
const age = 2024 - num;
let a = age % 10;
if (Year === Number(num)) {
	switch(a) {
		case 1:
			alert(`${name}` + `:` + `${age}` + ` год`);
			break;
		case 2:
		case 3:
		case 4:
			alert(`${name}` + `:` + `${age}` + ` года`);
			break;
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 0:
			alert(`${name}` + `:` + `${age}` + ` лет`);
			break;
	}
} else {
	alert(`год не число или пустое имя`);
}

