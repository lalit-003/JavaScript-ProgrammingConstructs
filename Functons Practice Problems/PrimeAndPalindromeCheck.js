function checkPalindrome(number)
{
    let reversedNumber = 0;
     let numberCopy = number;
     while(numberCopy !=0)
     {
         currentDigit = numberCopy%10;
         reversedNumber = (reversedNumber * 10) + currentDigit; //creating the reversed number
         numberCopy= Math.floor(numberCopy / 10);
     }
     if(number == reversedNumber)
     {
     return true;
     }
     else
     {
        return false;
     }
}

function checkPrime(number)
{
    let flag = true;
    for( let i =2;i*i<number;i++)
    {
        if(number%i ==0 )
        {
            flag = false;
            break;
        }
    }
    if(number==1)
    flag= false;
    return flag;     
}

let number = 131;

if(checkPalindrome(number)== true && checkPrime(number)== true)
{
    console.log("number is palindrome as well as prime ");
}
 else if(checkPalindrome(number)== true )
{
    console.log("number is palindrome only ");
}
else if(checkPrime(number)== true )
{
    console.log("number is prime only ");
}
else
{
    console.log("number is neither prime nor palindrome");
}


