import validator from './validator.js';
function flow1(){
    let flujo1=document.getElementById("enterCard");
    let intro=document.getElementById("welcome");
    flujo1.style.display= "block";
    intro.style.display= "none";
  };
  
  function forbidden(){
    let accesoProhibido=document.getElementById("forbiddenAccess");
    let intro=document.getElementById("welcome");
    accesoProhibido.style.display= "block";
    intro.style.display = "none";
  };
  function information(){
    let institucional= document.getElementById("about");
    let intro= document.getElementById("welcome");
    institucional.style.display= "block";
    intro.style.display = "none";
  };
  
  function flow2(){
    let flujo1=document.getElementById("enterCard");
    let flujo2=document.getElementById("contactForm");
    flujo1.style.display="none";
    flujo2.style.display="block";
  };
  
  function flow3(){
    let flujo2=document.getElementById("contactForm");
    let flujo3=document.getElementById("finalScreen");
    flujo2.style.display="none";
    flujo3.style.display="block";
  };
  
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
  };
  
  

console.log(validator);
