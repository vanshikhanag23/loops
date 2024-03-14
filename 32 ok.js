/*
Write a program to take two numbers from the user as input and obtain the HCF and LCM of the two numbers.

Test Case1:
Input:
12
15
Output:
3
60
*/

const input=require("readline-sync")
let a=input.questionInt("enter the value of a:")
let b=input.questionInt("enter the value of b:")
let c=a*b 
let hcf  
while (a!=b)
{
    if(a>b)
    {
        a=a-b;
        hcf=a;
    }    
    else 
    {
        b=b-a;
        hcf=a;
    }
}
lcm=c/hcf;
console.log("hcf",hcf ,"lcm",lcm,);















