/*
Write a program to print the sum of odd numbers up to N.

Test Case1:
Input:
20
Output:
100
*/
const input=require("readline-sync")
let n=input.questionInt("enter the value of n:")
let s=0;
for(i=1; i<=n; i++ )
{
   if(i%2!=0)
   {
    s+=i;
   }
} console.log(s);
