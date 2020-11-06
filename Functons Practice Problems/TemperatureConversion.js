conversion1 = "CelciusToFarenheit";
conversion2 = "FarenheitToCelcius";

function temperatureConversion(chooseConversion,temperature)
{
    if(chooseConversion == conversion1 &&(temperature>=0 && temperature <=100))
    {
         return (temperature*(9/5)+32);
    }
    else if(chooseConversion == conversion2 &&(temperature >=32 && temperature<=212 )){
        return ((temperature-32)*(5/9));
    }
    else{
        console.log("invalid selection");
    }
}
//celcius to farenheit
 let tempAfterConversion1 = temperatureConversion(conversion1,50);
console.log(tempAfterConversion1);

//farenheit to celcius
let tempAfterConversion2 = temperatureConversion(conversion2,50);
console.log(tempAfterConversion2);