//UC1
{
const IS_ABSENT = 0;
let empCheck = Math.floor(Math.random()*10)%2;
if(empCheck == IS_ABSENT)
{
console.log("Employee is ABSENT FOR WHOLE MONTH");
return;
}
else
{
console.log("Employee is PRESENT");
}	 
}



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

//UC5 Using while Loop statement
 let totalEmpHrs = 0;
let totalWorkingDays = 0;
const MAX_HRS_IN_MONTH = 100;
 while(totalEmpHrs<=MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS)
{
totalWorkingDays++;
let empCheck = Math.floor(Math.random()*10)%3;
totalEmpHrs  += getWorkingHours(empCheck);
if(totalEmpHrs >100)
{
totalEmpHrs =100;
}
}
let  empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("Total days : " +totalWorkingDays + 
" ,Working Hours : "+totalEmpHrs+"  ,EMPLOYEE WAGE IS :" +empWage);

