const inchToFeet = 1/12;
const feetToMeter=1/3.28;
const feetSqToAcre = 1/43560;

console.log("converting 42 inch to feet : "+(42*inchToFeet));
console.log("converting 60ft*40ft to meter : "+(60/feetToMeter)*(40*feetToMeter));
console.log("converting 25 such plots to acre : " +(60*40*25)*feetSqToAcre);
