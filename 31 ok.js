/*
Factors question
Write a program to check if a number is a special type of number called a 'prime number'. 
A prime number is a number that is only divisible by 1 and itself, and it doesn't have any 
other factors.
For example, the number 7 is a prime number because it can only
be divided by 1 and 7 without leaving a remainder. However,
the number 12 is not a prime number because it has other factors, 
such as 2, 3, 4, and 6, in addition to 1 and 12. (Take the number from the user)?
Learn sieve algorithm

Test Case1:
Input:
97
Output:
Yes

Test Case2:
Input:
49
Output:
No
*/

const input=require("readline-sync")
let n=input.questionInt("enter the value of n:")
let sum=0;
let i=1;
while(i<=n)
{
   if(n%i==0){
    sum=sum+1;
   } i++
}
if(sum==2)
   {
     console.log("prime");
   } 
  else
   {
     console.log("not prime");
   }








// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         sum=sum+1;
//     }
// }
//   if(sum==2)
//   {
//      console.log("prime");
//   } else
//    {
//      console.log("not prime");
//    }












