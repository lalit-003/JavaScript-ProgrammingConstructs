
//UC2 switch case 

const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

{
//UC3 Refactored code by implementing function
function getWorkingHours(empCheck){
switch(empCheck)
  {
      case IS_PART_TIME :return PART_TIME_HOURS;
                           
      case IS_FULL_TIME : return FULL_TIME_HOURS;
                          
        default : return 0;
}
}
}


  function calDailyWage(empDailyHrs)
  {
      return empDailyHrs*WAGE_PER_HOUR;
  }


//UC5 Using while Loop statement
 let totalEmpHrs = 0;
let totalWorkingDays = 0;
const MAX_HRS_IN_MONTH = 100;
let empDailyWageArr = new Array();
 while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
totalWorkingDays++;
let empCheck = Math.floor(Math.random()*10)%3;
let empDailyHrs= getWorkingHours(empCheck);
totalEmpHrs +=empDailyHrs;
empDailyWageArr.push(calDailyWage(empDailyHrs));
if(totalEmpHrs >100)
{
totalEmpHrs =100;
}
}
let  empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total days : " +totalWorkingDays + 
", Working Hours : "+totalEmpHrs+", EMPLOYEE WAGE IS :" +empWage);
//UC 6 printing daily wage array
console.log("Daily wages are : "+empDailyWageArr);


//UC 7 Using array helper functions

//using for each to calculate daily wage

empWage = 0;
function sum(dailyWage)
{
 empWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("total wage using sum method : "+empWage);

//using reduced function to calculate total wage

function totalEmpWages(totalEmpWage,dailyWage)
{
  return totalEmpWage+dailyWage;
}

console.log("Emp wage using reduced method : "+empDailyWageArr.reduce(totalEmpWages,0));


//show day along with daily wage

let dailycntr = 0;
function mapDayWithWage(dailyWage)
{
  dailycntr++;
  return dailycntr + " :  "+dailyWage; 
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("daily wage map");
console.log(mapDayWithWageArr);

// show days when employee worked full time
function fullTimeWage(dailyWage)
{
   return dailyWage.includes("160");
}
 let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
 console.log("daily wage filter when employee worked full time :");
 console.log(fullDayWageArr);

// find first day occurence when worked full time

function findFullTimeWage(dailyWage)
{
return dailyWage.includes("160");
}
 console.log(" first full time wage occurence : "+mapDayWithWageArr.find(findFullTimeWage));

 
 // check if every element of full time wage array includes fulltime wage("160")

function isFullTimeWage(dailyWage)
{
  return dailyWage.includes("160");
}
console.log(" check all elements have full time wage  in full day wage array : "+fullDayWageArr.every(isFullTimeWage));

// check if there is any part time wage 

function isAnyPartTimeWage(dailyWage)
{
  return dailyWage.includes("80");
}
console.log("check if any PartTime wage : "+mapDayWithWageArr.some(isAnyPartTimeWage));


// find the number of days the employee worked

function totalDaysWorked(numOfDays,dailyWage)
{
   if(dailyWage >0)
   return numOfDays+1;
   return numOfDays;
}

console.log("number of days emp worked : " + empDailyWageArr.reduce(totalDaysWorked,0));