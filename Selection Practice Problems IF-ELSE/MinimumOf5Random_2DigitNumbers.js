let min = 100;
minLimit =10;
maxLimit =99; 
for (i=0;i<5;i++)
{
    twoDigitNumber = Math.floor(Math.random()*(maxLimit -minLimit +1)+minLimit);
    console.log(twoDigitNumber); 
    if(min>twoDigitNumber)
    {
        min = twoDigitNumber;
    }
}
console.log("minimum number  is : "+min);