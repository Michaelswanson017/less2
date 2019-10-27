// 'use strict';

// let arr = ['plum', 'top'];

// console.log(arr[1]);


// // let answer = confirm("Are you here&");
// // console.log(answer);


// let answer = prompt("Есть ли вам 18?", "ДА");
// // console.log(answer);

// console.log(typeof(answer));


// 
var x = 5;
alert(++x);


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


let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}


var a = [];
var b = a + false - null + true;

console.log(b);


let y = 1;
let x = y = 2;

console.log(x);



var a = [];
var b = a + 1 + 2;

console.log(b);

console.log("1"[0]);







var a = 2 && 1 && null && 0 && undefined;
console.log(a);


var z = !!( a && b);
var po = (a && b);

if (z == po) {
    console.log('Ты прав Димас');
} else {
    console.log('Ты не прав, блэт');
}


console.log(!!( a && b) == (a && b));


console.log(null || 2 && 3 || 4);






