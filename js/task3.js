let subtract,sum1 ;  
const numbers = [1,1,2,3,4,1,4,4,5,6]
let max=0 ;
let min=numbers [0];

for (let i = 0; i < numbers.length; i++) 
{ 
 
if (numbers[i]>max)
{  
    max = numbers [i] ;
    
}
if (numbers[i]<min) 
{
    min = numbers [i] ;
}

}
subtract= max- min ;

console.log ("max-min",subtract) ;