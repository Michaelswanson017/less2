





// let items = prompt('Что принесет дополнительный доход (Перечислить через запятую)', '');

// if ( items != '' && items != null && isNaN(items) == true ) {
//     alert('правильно');
// } else {
//     alert('неправильно');
// }




let items;

do {
    items = prompt('Вопрос??', '');
}
// } while (items == '' && items == null && isNaN(items) == true);



while (items == '' || items == null || !isNaN(items));
