let country = prompt('Введите страну для доставки товара')
let cost;
const normilizedCountry = country.toLowerCase();




switch (normilizedCountry) {
    case 'китай':
        cost = 100;
        console.log(`Доставка в ${normilizedCountry} будет стоить ${cost} кредитов`);
        break;

    
    case 'чили':
        cost = 250;
        console.log(`Доставка в ${normilizedCountry} будет стоить ${cost} кредитов`);
        break;

    
    case 'австралия':
        cost = 170;
        console.log(`Доставка в ${normilizedCountry} будет стоить ${cost} кредитов`);
        break;

    
    case 'индия':
        cost = 80;
        console.log(`Доставка в ${normilizedCountry} будет стоить ${cost} кредитов`);
        break;
       
    case 'ямайка':
        cost = 120;
        console.log(`Доставка в ${normilizedCountry} будет стоить ${cost} кредитов`);
        break;
    default:
        alert('В вашей стране доставка не доступна');
        
}





