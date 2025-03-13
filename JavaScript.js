const name1 = prompt('Введите ваше имя:')
console.log(name1)
alert("Привет, " + name1)
const age = prompt('Введите ваш возраст:')
if (age >= 18) {
    alert("Доступ разрешен");
} else {
    alert("Доступ запрещен");
}
let a = prompt("Введите первое число:")
let d = prompt("Введите второе число:")
let sum = a + d;
let difference = a - d
let multiplication = a * d
let division = d !== 0 ? a / d : "Деление на ноль невозможно"
console.log("Сумма: " + sum)
console.log("Разность: " + difference)
console.log("Произведение: " + multiplication)
console.log("Частное: " + division)
const rnd = Math.floor(Math.random() * 100) + 1
const x = prompt("Угадайте число от 1 до 100:")
if (x === rnd) {
    alert("Поздравляю! Вы угадали число!")
} else {
    alert("Не угадали. Загаданное число было: "+rnd)
}
