let n = 3;
console.log("printing table");
let twoPowerN = 1;
console.log( "value for power : 0  is  = "+ twoPowerN );
let i =1;
while(i<=n && twoPowerN <256)
{
     i++;
     twoPowerN = twoPowerN*2; 
console.log( "value for power : "+i + "  is  = "+ twoPowerN );
}
console.log("final value : "+twoPowerN);