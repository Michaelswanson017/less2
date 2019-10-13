// 'use strict';

// let arr = ['plum', 'top'];

// console.log(arr[1]);


// // let answer = confirm("Are you here&");
// // console.log(answer);


// let answer = prompt("Есть ли вам 18?", "ДА");
// // console.log(answer);

// console.log(typeof(answer));


// 

let num = 50;

if (num < 49) {
    console.log("Неверно");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Это так!");
};

(num == 50) ? console.log("Верно") : console.log("Неверно");

switch (num) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;
    case num > 80:
        console.log("Тоже много");
        break;
    case num == 50:
        console.log("Верно");
        break;
    default:
        console.log("Что-то не то");
        break;
}



var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}