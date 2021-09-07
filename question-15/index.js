const obj1 = {
  name : "Ram",
  age : "Dwapar",
  power : 2500
}

const obj2= {
  name : "Krishna",
  age : "Treta",
  power : 2325
}

function morePower(obj1 , obj2){
  if(obj1.power > obj2.power ){
    console.log(obj1.name + " have a more power ")
  }else{
     console.log(obj2.name + " have a more power ")
  }
}
morePower(obj1 , obj2)