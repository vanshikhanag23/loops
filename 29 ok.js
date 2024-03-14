/*
Write a program to take a number from the user and print the sum of the digits of the 
given number.

Test Case1:
Input:
456
Output:
15
Explanation:
4+5+6 = 15
Turn on screen reader support
*/
const input=require("readline-sync")
let n=input.questionInt("enter the value of n")
let s=0; 
for ( n==0; a=n%10; s=s+a) 
{
   n=Math.floor(n/10);
}   console.log(s);
