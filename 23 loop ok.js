/*
Take the number N and the name from the user as inputs, and print the name N times.

Test Case1:
Input:
2
Badanti
Output:
Bedanti 
Bedanti
*/
const input=require("readline-sync")
let n=input.questionInt("enter the value of n:")
let i=1
while(i<=n){
    console.log("Badanti");
    i=i+1;
}