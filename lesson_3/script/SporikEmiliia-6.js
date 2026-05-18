let temperature = prompt("Введіть температуру в кімнаті");
let sensorError = prompt("Чи є помилка датчика?");
let data

if (sensorError === "true") {
    data = "Помилка датчика температури"
} else if (temperature < 18) {
    data = "Увімкнути обігрів"
} else if (temperature >= 18 && temperature <= 25) {
    data = "Температура комфортна"
} else if (temperature > 25) {
    data = "Увімкнути кондиціонер"
}

console.log(data);
alert(data);
