let total = 0;
let input;
const numbers = [];

do {
    let input = prompt('Ввведите число')
    if(input === null) {
        break;
    } 
    input = Number(input);  
    
    numbers.push(input)
   

}while(true)

for(const number of numbers){
    total += number;
    
    
    
}
console.log(`Общая сумма чисел равна ${total}`)
