

//BOTONES
const botonParaFlow1= document.getElementById("boton1");
botonParaFlow1.addEventListener("click", flow1);

const botonParaForbidden= document.getElementById("boton2");
botonParaForbidden.addEventListener("click", forbidden);

const botonParaInformation= document.getElementById("boton3");
botonParaInformation.addEventListener("click", information);

const botonParaFlow2= document.getElementById("boton4");
botonParaFlow2.addEventListener("click", flow2);

const botonParaComeback1= document.getElementById("boton5");
botonParaComeback1.addEventListener("click", cancel);

const botonParaComeback2= document.getElementById("boton6");
botonParaComeback2.addEventListener("click", cancel);

const botonParaComeback3= document.getElementById("boton7");
botonParaComeback3.addEventListener("click", cancel);

const botonParaFlow3= document.getElementById("boton8");
botonParaFlow3.addEventListener("click", flow3);

const botonParaComeback4= document.getElementById("boton9");
botonParaComeback4.addEventListener("click", cancel);

const botonParaComeback5= document.getElementById("boton10");
botonParaComeback5.addEventListener("click", cancel);


//FUNCIONES PARA BOTONES
function flow1(){
    let flujo1=document.getElementById("enterCard");
    let intro=document.getElementById("welcome");
    flujo1.style.display= "block";
    intro.style.display= "none";
  }
  
  function forbidden(){
    let accesoProhibido=document.getElementById("forbiddenAccess");
    let intro=document.getElementById("welcome");
    accesoProhibido.style.display= "block";
    intro.style.display = "none";
  }

  function information(){
    let institucional= document.getElementById("about");
    let intro= document.getElementById("welcome");
    institucional.style.display= "block";
    intro.style.display = "none";
  }
  
  function flow2(){
    let flujo1=document.getElementById("enterCard");
    let flujo2=document.getElementById("contactForm");
    flujo1.style.display="none";
    flujo2.style.display="block";
    let cardInformation=document.getElementById("cardNumber").value;
    if (cardInformation.length > 16 || cardInformation.length < 16 || cardInformation==="" || cardInformation === " ") {
      alert("Ingresa una tarjeta válida");
      flujo1.style.display="block";
      flujo2.style.display="none";
    } else {
let numbersToAdd= cardInformation.split("");
// let arrNumbersCard=[]; 
// arrNumbersCard.push(numbersToAdd);
//console.log(numbersToAdd);
let backwardsArrNumbersCard= [];
for (let i=numbersToAdd.length -1; i>=0; i--) {
  backwardsArrNumbersCard.push(numbersToAdd[i]);
} console.log(backwardsArrNumbersCard);

let newBackwardsArr= parseInt(backwardsArrNumbersCard);
let evenNum= []
for (let x= 0; x= backwardsArrNumbersCard.lenght-1; x++){
  let sumatoria=
newBackwardsArr [0]+ newBackwardsArr [2] + newBackwardsArr [4] + newBackwardsArr [6] + newBackwardsArr [8] + newBackwardsArr [10] + newBackwardsArr [12] + newBackwardsArr [14];
console.log(sumatoria);
evenNum.push(sumatoria);
console.log(evenNum);
}

  }

  //for (let i=numbersToAdd.length -1; i>=0; i--) {
   
    //console.log(backwardsArrNumbersCard);
   // console.log (backwardsArrNumbersCard += backwardsArrNumbersCard[i]);
  

  /*for (let i= 0; i< backwardsArrNumbersCard.length; i++) {
    if (backwardsArrNumbersCard[i] %2 !== 0) {
      let unevenNumbers= [];
      unevenNumbers.push(backwardsArrNumbersCard)
      console.log("impares", unevenNumbers); 
    } else if (backwardsArrNumbersCard[i] %2===0) {
      let evenNumbers= [];
      evenNumbers.push(backwardsArrNumbersCard)
      console.log("pares", evenNumbers);
    } else {
      console.log("no es par ni impar");
    }
  }*/
} 

  function flow3(){
    let flujo2=document.getElementById("contactForm");
    let flujo3=document.getElementById("finalScreen");
    flujo2.style.display="none";
    flujo3.style.display="block";
    let nombre=document.getElementById("name").value;
    let ci=document.getElementById("rut").value;
    let reservaFinal=document.getElementById("reserva").value;
    console.log("Datos Usuario", nombre, ci, reservaFinal);
  }
  
  function cancel(){
    let cancelar=document.getElementById("welcome")
    let flujo1=document.getElementById("enterCard");
    let flujo2=document.getElementById("contactForm");
    let flujo3=document.getElementById("finalScreen");
    let accesoProhibido=document.getElementById("forbiddenAccess");
    let institucional= document.getElementById("about");
    cancelar.style.display="block";
    flujo1.style.display="none";
    flujo2.style.display="none";
    flujo3.style.display="none";
    accesoProhibido.style.display="none";
    institucional.style.display="none";
  }

