let str = prompt(`Введите слово палиндром:`);
const strArray = [...str];
const newArray = [];
strArray.forEach(index => { 
newArray.unshift(index);
});
const newStr = newArray.join('');
if(str === newStr) {
	alert(`Слово ` + `"${str}"` + ` является палиндромом`);
} else {
	alert(`Слово ` + `"${str}"` + ` не является палиндромом`);
}