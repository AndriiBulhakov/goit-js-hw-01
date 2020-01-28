let logItems = function(array) {
    
    for (let i = 0; i < array.length; i += 1){
        let n = 1
        n = n + i
        logItems = (`${n} - ${array[i]}`);
        console.log(logItems) 
    } 
    

};

logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);


logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);




