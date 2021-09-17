const cashGiven = document.querySelector('#cash-given');
const billAmount = document.querySelector('#bill-amount');
const calculateBtn = document.querySelector('#calculate');
const notes = document.querySelector('#notes')
const note = document.querySelectorAll('.note')

const cashAvailable = ['2000','500','200','100','50','10','1'];

function checkDifference(){
  let amountToBeReturned =Number( cashGiven.value - billAmount.value )
  checkNote(amountToBeReturned)
}

function checkNote(amountToBeReturned){
  console.log(amountToBeReturned)
  for(let i =0; i<cashAvailable.length; i++){
    let returnedNote =Math.trunc(amountToBeReturned/cashAvailable[i]);
        amountToBeReturned%=cashAvailable[i];
        console.log(`${cashAvailable[i]} ${returnedNote}`)
        note[i].innerText = `${returnedNote}`

  }
}
calculateBtn.addEventListener('click', checkDifference)

