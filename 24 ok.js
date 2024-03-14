/*
Take a number N from the user as input, and print even numbers up to N.

Test Case1:
Input:
10
Output:
2  4 6 8 
Turn on screen reader support
*/
const input=require("readline-sync")
let n=input.questionInt("enter the value of n")
// for(i=1;i<n;i++)
// {
//     if(i%2==0)
//     {
//         console.log("Even number is:",i);
//     }
// }
let i=1;
while(i<n)
{
    if(i%2==0)
{
console.log(i);
}
i++
} 