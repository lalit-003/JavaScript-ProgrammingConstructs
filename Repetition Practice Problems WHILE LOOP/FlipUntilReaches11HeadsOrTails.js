let head =0;
let headCount =0;
let tailCount =0;
while(headCount<11 && tailCount<11)
{
 let tossResult = Math.floor(Math.random()*10)%2;
if(tossResult == head)
{
    headCount++;
}
else{
    tailCount++;
}
}
if(headCount == 11)
{
    console.log("Reached head 11 times first");
}
else{
    console.log("Reached tail 11 times first");
}