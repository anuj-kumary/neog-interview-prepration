const readlineSync = require('readline-sync');
const chalk = require('chalk');

const listOfStudent = [];

for (let i = 0; i < 5; i++) {
  let name = readlineSync.question("Enter Your Name: ")
  let unitTestMark = readlineSync.question("Enter Your Unit Test Mark: ")
  let preliumMarks = readlineSync.question("Enter Your Prelium Marks: ")
  let finalMarks = readlineSync.question("Enter Your Final Marks: ")
  console.log(chalk.blue("--------------------------------------------"))
  console.log(chalk.blue("--------------------------------------------"))

  const studentObj = {
    name: name,
    unitMarks: unitTestMark,
    preliumTest: preliumMarks,
    finalTest: finalMarks
  }

  listOfStudent.push(studentObj);
}

function comapareMarks(listOfStudent) {
  if(Number(listOfStudent[0].finalTest) > Number(listOfStudent[1].finalTest) &&
    Number(listOfStudent[0].finalTest) > Number(listOfStudent[2].finalTest) &&
    Number(listOfStudent[0].finalTest) > Number(listOfStudent[3].finalTest) &&
    Number(listOfStudent[0].finalTest) > Number(listOfStudent[4].finalTest) 
  ){
    console.log(listOfStudent[0].name + " has the highest marks")
  }
  else if(Number(listOfStudent[1].finalTest) > Number(listOfStudent[0].finalTest) &&
    Number(listOfStudent[1].finalTest) > Number(listOfStudent[2].finalTest) &&
    Number(listOfStudent[1].finalTest) > Number(listOfStudent[3].finalTest) &&
    Number(listOfStudent[1].finalTest) > Number(listOfStudent[4].finalTest) )
  {
    console.log(listOfStudent[1].name + " has the highest marks")
  }
  else if(Number(listOfStudent[2].finalTest) > Number(listOfStudent[0].finalTest) &&
    Number(listOfStudent[2].finalTest) > Number(listOfStudent[1].finalTest) &&
    Number(listOfStudent[2].finalTest) > Number(listOfStudent[3].finalTest) &&
    Number(listOfStudent[2].finalTest) > Number(listOfStudent[4].finalTest))
    {
      console.log(listOfStudent[2].name + " has the highest marks")
  }
  else if(Number(listOfStudent[3].finalTest) > Number(listOfStudent[0].finalTest) &&
    Number(listOfStudent[3].finalTest) > Number(listOfStudent[1].finalTest) &&
    Number(listOfStudent[3].finalTest) > Number(listOfStudent[2].finalTest) &&
    Number(listOfStudent[3].finalTest) > Number(listOfStudent[4].finalTest))
    {
      console.log(listOfStudent[3].name + " has the highest marks")
  }else{
    console.log(listOfStudent[4].name + " has the highest marks")
  }
}

comapareMarks(listOfStudent)