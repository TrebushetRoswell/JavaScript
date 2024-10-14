let name = prompt (`Введите ваше имя:`);
let num = +prompt (`Введите ващ год рождения:`);
let	Year = Number(num);
if (Year === Number(num)) {
	const age = 2024 - num;
	alert (`${name}` + `:` + `${age}`);
} else {
	alert(`Год должен быть числом!`);
}
