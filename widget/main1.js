// show brex resultes on click
function showBrex(){
  let elem = document.getElementById("myBar");   
  let width = 0;
  let id = setInterval(frame, 0.2);
  function frame() {
    if (width >= 10) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
    document.getElementById("bre").style.display = "block";
   
   }
// show stripe resultes on click
function showStripe(){

  let elem = document.getElementById("myBar2");   
  let width = 0;
  let id = setInterval(frame, 0.2);
  function frame() {
    if (width >= 20) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }
    
    document.getElementById("stri").style.display = "block";
   
   
   }
// show amex resultes on click

function showAmex(){
    
  let elem = document.getElementById("myBar3");   
  let width = 0;
  let id = setInterval(frame, 0.2);
  function frame() {
    if (width >= 30) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
    }
  }


    document.getElementById("ame").style.display = "block";
    
   
   }
// progress bar 
   function show(){
    
    let elem = document.getElementById("myBar4");   
    let width = 0;
    let id = setInterval(frame, 0.2);
    function frame() {
      if (width >= 40) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }}
  
// compare rewards function (all calculations)
 function compareRewards() {
    // rewards calculations variables(inputs)
        let vendor = document.getElementById("vendor").value;
        let media = document.getElementById("media").value;
        let corp = document.getElementById("corp").value;
        let team = document.getElementById("team").value;
        // calculate sum
        let sum = +vendor + +media + +corp + + team
        
        // document.getElementById("sumPrice").innerHTML = sum;

       // buttons show results on click
        document.getElementById("brex").innerHTML = sum* 0.3
        document.getElementById("stripe").innerHTML = sum *2.9
        document.getElementById("amex").innerHTML = sum * 1.3

    //   automatically appearance
        document.getElementById("unlimited").innerHTML = sum * 1.1;
        document.getElementById("life").innerHTML = sum * 1.2;
        // document.getElementById('meter1').setAttribute('value', '10');


    }


    // active buttons
let result = document.getElementById("resultes");
let btns = result.getElementByClassName("btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementByClassName("active");

  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}



