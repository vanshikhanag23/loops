/*
Write a program to take a number from the user and print the number digits in the given number.

Test Case1:
Input:
456
Output:
3
*/
const input=require("readline-sync")
let n=input.questionInt("enter the value of n") 
for (s=0; n!=0; s++)
{
   n=Math.floor(n/10);
}   console.log(s);
