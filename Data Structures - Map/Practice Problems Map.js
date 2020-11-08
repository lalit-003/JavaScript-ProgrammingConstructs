
// finding number rolled maximum and minimum times

let dictionary = {1:0,2:0,3:0,4:0,5:0,6:0};
console.log(dictionary);
let number =0;

while(number<10)
{
    let dieRoll = Math.floor(Math.random()*6)+1;
    console.log(dieRoll);
    number = dictionary[dieRoll];
    number =number+1;
    dictionary[dieRoll]= number;
}

console.log(dictionary);

let max = dictionary[1];
let min = dictionary[1];

for(var key in dictionary)
{
    if(max<dictionary[key])
    max = dictionary[key];
    if(min>dictionary[key])
    min = dictionary[key];
}

for(var key in dictionary)
{
    if(max==dictionary[key])
    console.log("Key : "+key+" reached maximum times of value = "+dictionary[key]);
    if(min ==dictionary[key])
    console.log("Key : "+key+" reached minimum times of value = "+dictionary[key]);
}


//storing persons who were borned in the same month

let BirthMonthToPersonMap = new Map();
let BirthMonthToPersonMap2 = new Map([[1,new Array()],[2,new Array()],[3,new Array()],[4,new Array()],[5,new Array()],[6,new Array()]
                                      ,[7,new Array()],[8,new Array()],[9,new Array()],[10,new Array()],[11,new Array()],[12,new Array()]]);
for(let i =1;i<=50;i++)
{
    let BirthMonth =  Math.floor(Math.random()*12)+1;
    //string of persons
    if(BirthMonthToPersonMap.get(BirthMonth) == undefined){
        let persons = i;
        BirthMonthToPersonMap.set(BirthMonth,persons);
    }
    else{
        let persons = BirthMonthToPersonMap.get(BirthMonth);
        persons += "," + i;
        BirthMonthToPersonMap.set(BirthMonth,persons);
    }
    //array of persons
        let persons = BirthMonthToPersonMap2.get(BirthMonth);
        persons.push(i);
        BirthMonthToPersonMap2.set(BirthMonth,persons);
}
console.log(BirthMonthToPersonMap); 
console.log(BirthMonthToPersonMap2); 


