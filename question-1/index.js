const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const add = document.querySelector("#addition");
const sub = document.querySelector("#subtraction");
const mult = document.querySelector("#multiplication");
const divi = document.querySelector("#division");
const output = document.querySelector("#output");

function sum() {
    let x = Number(number1.value);
    let y = Number(number2.value);
    let z = x + y;
    output.innerText = x + " " + "+" + y + " " + "=" + z
}

function subtraction (){
    let x = Number(number1.value);
    let y = Number(number2.value);
    let z = x - y;
    output.innerText = x + " " + "-" + y + " " + "=" + z
}

function multiplication (){
    let x = Number(number1.value);
    let y = Number(number2.value);
    let z = x * y;
    output.innerText = x + " " + "*" + y + " " + "=" + z
}

function division (){
    let x = Number(number1.value);
    let y = Number(number2.value);
    let z = x / y;
    output.innerText = x + " " + "/" + y + " " + "=" + z
}

add.addEventListener('click', sum);
sub.addEventListener('click', subtraction);
mult.addEventListener('click', multiplication);
divi.addEventListener('click', division);