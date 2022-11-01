let sum =0,sum1 ;  
const numbers = [1,1,2,3,4,1,4,4,]
let max=0 ;
let min=numbers [0];
let num1 = 0,num2=0 ;
for (let i = 0; i < numbers.length; i++) 
{ sum = sum + numbers[i] ;
 
if (numbers[i]>max)
{  
    max = numbers [i] ;
    
}
if (numbers[i]<min) 
{
    min = numbers [i] ;
}

}
for (let i = 0; i < numbers.length; i++)
{
// maxlarin sayi
if (max == numbers[i]) 
{
    num1++ ;
}
//minlarin sayi
if (min == numbers[i]) 
{
    num2++ ;
}

}

sum1 = sum - num1*max - num2*min ;
console.log ("min ve max olmadan digerlerinin cemi;",sum1) ;