let number = 997;
let flag = true;
for(let i =2;i<=number/2;i++)
{
    if(number%i == 0 && number !=1)
    {
    flag = false;
     break;
    }
}
if(flag == false)
{
    console.log("Not a prime number");
}
else if(number == 1)
{
    console.log("not a prime number")
}
else{
    console.log("prime number");
}
