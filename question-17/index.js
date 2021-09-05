const readlineSync = require('readline-sync');


function detectNews(questions, answers) {

  let answer = readlineSync.question(questions);
  if (answer === answers) {
    console.log('Don"t believe things on FB , Whatsapp and telegram');
  } else {
    console.log('This is true news');
  }

}
detectNews("Don't believe things on FB and Whatsapp ", "FB");
detectNews("Don't believe things on FB and Whatsapp ", "Whatsapp");
detectNews("Don't believe things on FB and Whatsapp ", "telegram");