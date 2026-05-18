let isAuthorized, internetSpeed, isBanned, accessResult;

isAuthorized = prompt("Чи авторизований користувач?");
internetSpeed = prompt("Введіть швидкість інтернету");
isBanned = prompt("Чи заблокований акаунт?");

if (isAuthorized === "true" && internetSpeed >= 20 && isBanned !== "true") {
    accessResult = "Доступ дозволено";
} else {
    accessResult = "Доступ заборонено";
}

console.log(accessResult);
alert(accessResult);