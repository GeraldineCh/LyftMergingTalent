var become = document.getElementById("form");

become.addEventListener("submit", function(event) {
  event.preventDefault();
  var array = document.getElementsByClassName("input-registro");
  for(i = 0 ; i < array.length; i++){
    if(! (array[i].value.trim().length != 0)){
      array[i].nextElementSibling.nextElementSibling.style.display="inline-block";
      array[i].style.borderBottom="1px solid red";
    }else{
      array[i].nextElementSibling.nextElementSibling.style.display="none";
      array[i].style.borderBottom="1px solid black";
    }
  }
});

var array = document.getElementsByClassName("input-registro");
for(i = 0 ; i < array.length; i++){
    array[i].addEventListener("blur", validateForm);
    array[i].addEventListener("blur", blurInput);
    array[i].addEventListener("focus", focusInput);
}
 
function validateForm(){
  var patronTel = /[9]{1}[0-9]{8}/;
  var patronTexto = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
  var patronEmail =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+(\w{2,4})+$/;

  //-----------------------------------------------------Validación de campos vacios
  if(this.value.trim().length === 0){
    this.nextElementSibling.nextElementSibling.style.display="inline-block";
    this.style.borderBottom="1px solid red";
  }else{
    this.nextElementSibling.nextElementSibling.style.display="none";
    this.style.borderBottom="1px solid black";
  }

  if(this.getAttribute("id")=="phone"){
    if(!(patronTel.test(this.value.trim()))){
      this.nextElementSibling.nextElementSibling.style.display="inline-block";
      this.style.borderBottom="1px solid red";
    }else{
      this.nextElementSibling.nextElementSibling.style.display="none";
      this.style.borderBottom="1px solid black";
    }
  }

  if(this.getAttribute("id")=="name"){
    if(!(patronTexto.test(this.value.trim()))){
      this.nextElementSibling.nextElementSibling.style.display="inline-block";
      this.style.borderBottom="1px solid red";
    }else{
      this.nextElementSibling.nextElementSibling.style.display="none";
      this.style.borderBottom="1px solid black";
    } 
  }

  if(this.getAttribute("id")=="email"){
    if(!(patronEmail.test(this.value.trim()))){
      this.nextElementSibling.nextElementSibling.style.display="inline-block";
      this.style.borderBottom="1px solid red";
    }else{
      this.nextElementSibling.nextElementSibling.style.display="none";
      this.style.borderBottom="1px solid black";
    }  
  }
  if(this.getAttribute("id")=="city"){
    if(!(patronTexto.test(this.value.trim()))){
      this.nextElementSibling.nextElementSibling.style.display="inline-block";
      this.style.borderBottom="1px solid red";
    }else{
      this.nextElementSibling.nextElementSibling.style.display="none";
      this.style.borderBottom="1px solid black";
    } 
  }

}
//-------------------------------------------Efecto Label
function focusInput() {
  this.parentElement.children[1].className = "label active";
}

function blurInput(){
      this.parentElement.children[1].className = "label";
}