let sum = 0;
let average = 0;
max =99;
min =10;
for (i=0;i<5;i++)
{
    twoDigitNumber = Math.floor(Math.random()*(max -min +1)+min);
    console.log(twoDigitNumber); 
    sum += twoDigitNumber;
}
average = sum/5;
console.log("sum  is : "+sum);
console.log("average  is : "+average);