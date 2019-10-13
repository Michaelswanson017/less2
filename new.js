var money = prompt("Ваш бюджет на месяц");
var time = prompt("Введите дату");

var a = prompt('Введите обязательную статью расходов в этом месяце');
var b = prompt('Во сколько она обойдётся?');

var appData = {
    allMoney: money,
    timeData: time,
    expenses: {
        a : b
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('Эта статья расходов обойдётся вам в день в ' + b/30 + " рублей");



