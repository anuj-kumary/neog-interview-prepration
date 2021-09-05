const readlineSync = require('readline-sync');
const chalk = require('chalk');


function detectNews(questions, answers) {

  let answer = readlineSync.question(questions);
  if (answer === answers) {
    console.log('Don"t believe things on FB , Whatsapp and telegram');
    console.log(chalk.yellow('-------------------------------------'))
  } else {
    console.log('This is true news');
    console.log(chalk.yellow('-------------------------------------'))
  }

}
detectNews("Don't believe things on FB and Whatsapp ", "FB");
detectNews("Don't believe things on FB and Whatsapp ", "Whatsapp");
detectNews("Don't believe things on FB and Whatsapp ", "telegram");