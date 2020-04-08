import validator from './validator.js';

console.log(validator);


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
  }
  
  function flow3(){
    let flujo2=document.getElementById("contactForm");
    let flujo3=document.getElementById("finalScreen");
    flujo2.style.display="none";
    flujo3.style.display="block";
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
