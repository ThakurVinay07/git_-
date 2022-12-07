// whether number is prime or not




let num=7
let count=0;
for(let i=1;i<=num;i++)
{
    if(num%2==0){
          count--;
       }
}

if(count==7){
   console.log("Given number is prime");
   }
else{
     console.log("Given number is not prime");
    }
