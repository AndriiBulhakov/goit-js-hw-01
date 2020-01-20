let credits = 23580;
let pricePerDroid = 3000;
let value;
let totalPrice;
let message;
let balance;


value = prompt('Введите количество дроидов');
console.log(Number(value));

totalPrice = value * pricePerDroid;
balance = totalPrice - credits;

if(value === null){
    message = 'Отменено пользователем!'
} else if(totalPrice > credits){
    message = 'Недостаточно средств на счету!'
} else if(credits > totalPrice) {
    message = `Вы купили ${value} дроидов, на счету осталось ${balance} кредитов.`
}

console.log(message);


