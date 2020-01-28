const formatString = function(string) {
  let stringSize = 40;
  if(string.length <= stringSize){
    
    return string;
  } 
   
    
  return string.slice(0, 40) + '...'
  
  
  
    
};


console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
console.log(formatString('Curabitur ligula sapien.'));