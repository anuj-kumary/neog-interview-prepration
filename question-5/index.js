const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.yellow("Student Mark Database"));
console.log('------------------------------');
console.log('------------------------------');

let studentList = [];

for(let i = 0; i < 2; i++){
    let name = readlineSync.question("Enter Your Name ");
    let unitTest = readlineSync.question("Enter Your Unit Test Marks ");
    let preliumTest = readlineSync.question("Enter the Prelium Test Marks ");
    let finalTest = readlineSync.question("Enter The Final Test Marks ");

  let studentObj = {
    name : name,
    unitMarks : unitTest,
    preliumMarks : preliumTest,
    finalMarks : finalTest
  }
  studentList.push(studentObj);
}
  function comapareValues(studentList){
  
  if(Number(studentList[0].finalMarks) > Number(studentList[1].finalMarks) )
  {
    console.log(studentList[0].name + " Has a higher Marks")
  }
  else if(Number(studentList[1].finalMarks) > Number(studentList[0].finalMarks))
  {
    console.log(studentList[1].name + " Has a higher Marks")
  }
  else
  {
     console.log("Sorry Draw");
  }
}

  function studentAverage(studentList){

    let averageSum = parseInt(studentList[0].finalMarks) + parseInt(studentList[1].finalMarks);
    console.log(averageSum)
    let averages = averageSum / 2;
    console.log(averages)
  }

comapareValues(studentList);
studentAverage(studentList)const readlineSync = require("readline-sync");
const chalk = require("chalk");

console.log(chalk.yellow("Student Mark Database"));
console.log('------------------------------');
console.log('------------------------------');

let studentList = [];

for(let i = 0; i < 5; i++){
    let name = readlineSync.question("Enter Your Name ");
    let unitTest = readlineSync.question("Enter Your Unit Test Marks ");
    let preliumTest = readlineSync.question("Enter the Prelium Test Marks ");
    let finalTest = readlineSync.question("Enter The Final Test Marks ");

  let studentObj = {
    name : name,
    unitMarks : unitTest,
    preliumMarks : preliumTest,
    finalMarks : finalTest
  }
  studentList.push(studentObj);
}
  function comapareValues(studentList){
  
  if( Number(studentList[0].finalMarks) > Number(studentList[1].finalMarks) && 
      Number(studentList[0].finalMarks) > Number(studentList[2].finalMarks) &&
      Number(studentList[0].finalMarks) > Number(studentList[3].finalMarks) &&
      Number(studentList[0].finalMarks) > Number(studentList[4].finalMarks)
    )
  {
    console.log(studentList[0].name + " Has a higher Marks")
  }
  else if(Number(studentList[1].finalMarks) > Number(studentList[0].finalMarks) &&
          Number(studentList[1].finalMarks) > Number(studentList[2].finalMarks) &&
          Number(studentList[1].finalMarks) > Number(studentList[3].finalMarks) &&
          Number(studentList[1].finalMarks) > Number(studentList[4].finalMarks)
  )
  {
    console.log(studentList[1].name + " Has a higher Marks")
  }
  else if(Number(studentList[2].finalMarks) > Number(studentList[0].finalMarks) &&
          Number(studentList[2].finalMarks) > Number(studentList[1].finalMarks) &&
          Number(studentList[2].finalMarks) > Number(studentList[3].finalMarks) &&
          Number(studentList[2].finalMarks) > Number(studentList[4].finalMarks)
  )
  {
    console.log(studentList[2].name + " Has a higher Marks")
  }
  else if(Number(studentList[3].finalMarks) > Number(studentList[0].finalMarks) &&
          Number(studentList[3].finalMarks) > Number(studentList[1].finalMarks) &&
          Number(studentList[3].finalMarks) > Number(studentList[2].finalMarks) &&
          Number(studentList[3].finalMarks) > Number(studentList[4].finalMarks)
  )
  {
    console.log(studentList[3].name + " Has a higher Marks")
  }
  else if(Number(studentList[4].finalMarks) > Number(studentList[0].finalMarks) &&
          Number(studentList[4].finalMarks) > Number(studentList[1].finalMarks) &&
          Number(studentList[4].finalMarks) > Number(studentList[2].finalMarks) &&
          Number(studentList[4].finalMarks) > Number(studentList[3].finalMarks)
  )
  {
    console.log(studentList[4].name + " Has a higher Marks")
  }
  else
  {
     console.log("Sorry Draw");
  }
}

  function studentAverage(studentList){

    let averageSum = parseInt(studentList[0].finalMarks) + parseInt(studentList[1].finalMarks) + parseInt(studentList[2].finalMarks) + parseInt(studentList[3].finalMarks) + parseInt(studentList[4].finalMarks) ;
    console.log(averageSum)
    let averages = averageSum / 5;
    console.log(averages)
  }

comapareValues(studentList);
studentAverage(studentList)


let studentList = [];

for(let i = 0; i < 2; i++){
  let name = readlineSync.question("Enter Your name ");
  let ut = readlineSync.question("Enter the unit test marks ");
  let preFinal = readlineSync.question("Enter the pre final marks ");
  let finalMark = readlineSync.question("Enter the final marks ");

  let studentMarksObj = {
    name : name,
    unitTest : ut,
    preFinalMarks : preFinal,
    finalMarks : finalMark
  }
  studentList.push(studentMarksObj)
}

function getHigherMarks(studentList){
  let sum = 0;
  for(let j = 0; j < 2; j++){
    // let AdditionMarks = Number(studentList[j].unitTest) + Number(studentList[j].preFinalMarks) + Number(studentList[j].finalMarks)

    if(Number(studentList[j].unitTest) + Number(studentList[j].preFinalMarks) + Number(studentList[j].finalMarks) > sum){
      sum = Number(studentList[j].unitTest) + Number(studentList[j].preFinalMarks) + Number(studentList[j].finalMarks)
    } 
    
  }
  console.log(sum)
}

getHigherMarks(studentList);