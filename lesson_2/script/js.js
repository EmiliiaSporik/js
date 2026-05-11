// if (вираз) {
//     [інструкції];
//     [інструкції];
// }


// false
// 0
// 0n //великі числа
// ""
// null
// undefined
// NaN


//оператори порівняння
// let a = 2, b = 3, c = "3";
// console.log(a == b);
// console.log(a != b);
// console.log(a > b); //< >= <=
// console.log(b === c); //строга рівність

// let a = 2, b = 3, c;

// if (a > b) {
//     c = 'a > b'
// } else {
//     c = 'a < b'
// }
// console.log(c)

// if (a > b) {
//     c = "a > b"
// } else {
//     if (a < b) {
//         c = "a < b"
//     } else {
//         c = "a === b"
//     }
// }
// console.log(c)

// if (a > b) {
//     c = "a > b"
// } else if (a < b) {
//     c = "a < b"
// } else {
//     c = "a === b"
// }

// if (a > b)c = "a > b";
// else if (a < b)c = "a < b";
// else c = "a === b";


//switch case

// let course, title;
// course = prompt('Введіть направлення яке Ви хочете вивчити ');
// switch (course) {
//     case 'JavaScript':
//         title = 'мова програмування JavaScript';
//         break;
//     case 'Figma':
//         title = 'Основи Figma';
//         break;
//     case 'Frontend':
//     case 'HTML':
//     case 'CSS':
//         title = 'HTML/CSS';
//         break;
//     default:
//         title = 'Я не знаю, що ти хочеш';
//         break;
// }
// alert(title);

// логічні оператори

//логічні не
// let a = false;
// console.log(!a);
// let b = 'text';
// console.log(!!b);

// // логічне і
// let a = true, b = true, c = false;
// console.log(a && b);
// console.log(a && c);
//
// //логічне або
// console.log(b || c);

// let age = prompt('Скільки тобі років?'), info;
// if (age >= 18 && age <=35) {
//     info = 'користувачу від 18 до 35 років'
// }
// else if (age > 35) {
//     info = 'користувачу більше 35 років'
// } else {
//     info = 'користувач неповнолітній'
// }
//
// alert(info);