let score = prompt("Введіть кількість балів");
let homeworkDone = prompt("Чи виконані всі домашні завдання?");
let finalTestPassed = prompt("Чи пройдено фінальний тест?");

if (score >= 70 && homeworkDone === "true" && finalTestPassed === "true") {
    certificateResult = "Сертифікат успішно отримано";
} else {
    certificateResult = "Умови для отримання сертифіката не виконані";
}

console.log(certificateResult);
alert(certificateResult);