//1
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//2
let maxEven = parseInt(prompt("2: Введіть число N для пошуку парних чисел:"));

for (let i = 1; i <= maxEven; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//3
let maxSum = parseInt(prompt("3: Введіть число N для обчислення суми:"));
let sum = 0;

for (let i = 1; i <= maxSum; i++) {
    sum += i;
}
alert("Сума чисел від 1 до " + maxSum + " дорівнює: " + sum);

//4
let countdownStart = parseInt(prompt("4: Введіть число N для зворотного відліку:"));

for (let i = countdownStart; i >= 1; i--) {
    console.log(i);
}

//5
let multiplyNumber = parseInt(prompt("5: Введіть число N для таблиці множення:"));

for (let i = 1; i <= 10; i++) {
    console.log(multiplyNumber + " x " + i + " = " + (multiplyNumber * i));
}

//6
const correctPassword6 = "admin123";
let userPassword6;

do {
    userPassword6 = prompt("6: Введіть пароль:");
    if (userPassword6 !== correctPassword6) {
        alert("Неправильний пароль");
    }
} while (userPassword6 !== correctPassword6);

alert("Пароль правильний");

//7
const correctPassword7 = "admin123";
let accessGranted = false;

for (let attempt = 1; attempt <= 3; attempt++) {
    let userPassword7 = prompt("7: Введіть пароль (Спроба " + attempt + " з 3):");

    if (userPassword7 === correctPassword7) {
        accessGranted = true;
        break;
    } else {
        alert("Неправильний пароль");
    }
}

if (accessGranted) {
    alert("Доступ дозволено");
} else {
    alert("Доступ заблоковано");
}

//8
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

//9
let userNumber9 = prompt("9: Введіть число для підрахунку цифр:");
let digitsCount = Math.abs(parseInt(userNumber9)).toString().length;

alert("Кількість цифр у числі: " + digitsCount);

//10
const targetNumber = Math.floor(Math.random() * 10) + 1; // Загадуємо число від 1 до 10
let userGuess;

while (true) {
    userGuess = parseInt(prompt("10: Вгадайте число від 1 до 10:"));

    if (userGuess > targetNumber) {
        alert("Менше");
    } else if (userGuess < targetNumber) {
        alert("Більше");
    } else if (userGuess === targetNumber) {
        alert("Ви вгадали");
        break;
    } else {
        alert("Будь ласка, введіть коректне число.");
    }
}