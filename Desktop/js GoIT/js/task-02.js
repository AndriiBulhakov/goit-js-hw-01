const total = 100;
const ordered = 50;
let orderResult;

if (total >= ordered) {
    orderResult = "Заказ оформлен, с вами свяжется менеджер.";
} else {
    orderResult = "На складе недостаточно товаров!";
}

console.log (orderResult)