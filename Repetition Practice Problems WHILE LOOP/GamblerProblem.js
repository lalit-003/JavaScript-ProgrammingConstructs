let money =100;

let win =0;
while(money>0 && money<200)
{
    let gamblingResult = Math.floor(Math.random()*10)%2;
if(gamblingResult == win)
{
    console.log("It's win");
    money++;
    console.log(money);
}
else{
    console.log("It's loss");
    money--;
    console.log(money);
}
}
if(money == 0)
{
    console.log("no more money to gamble");
}
else{
    console.log("gambler reached goal");
}